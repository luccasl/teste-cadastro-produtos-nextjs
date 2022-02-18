import { ArrowLeftIcon, CheckIcon, PlusIcon } from "@heroicons/react/solid"
import Link from "next/link"
import React, { useEffect, useReducer, useState } from "react"
import Button from "../../../components/Button"
import Container from "../../../components/Container"
import TextInput from "../../../components/TextInput"
import { Tag } from "../../../interfaces/Tag"
import { EditProductContext, initialEditProductState } from "./EditProductContext"
import { TagBreadcrumbList } from "./components/TagBreadcrumbList"
import { EditTagsActionType, editTagsReducer } from "./reducers"
import { useRouter } from "next/router"
import { UpdateSuccessMessage } from "./components/UpdateSuccessMessage"
import ComboSelect from "../../../components/ComboSelect"
import { api } from "../../../http/api"
import { TagDto } from "../../../dto/TagDto"
import { LoadingProductForm } from "./components/LoadingProductForm"

const EditProduct: React.FunctionComponent<{ data: Array<Tag> }> = ({ data }) => {
    const [ name, setName ] = useState<string>('')
    const [ selectedTag, setSelectedTag ] = useState<number>(-1)
    const [ success, setSuccess ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(true)

    const [editProductState, editTagsDispatch] = useReducer(editTagsReducer, initialEditProductState)
    const editProductContextValues = { editProductState, editTagsDispatch }

    const router = useRouter()

    const {
        query: { id }
    } = router

    useEffect(() => {
        if(!router.isReady) {
            return
        }

        api.get(`/products/${id}`)
        .then(res => res.data)
        .then(product => {
            setName(product.name)

            const tags: Array<TagDto> = product.tags
            
            editTagsDispatch({
                type: EditTagsActionType.SET_TAGS,
                payload: tags.map(tag => ({
                    id: tag.tag.id,
                    name: tag.tag.name,
                }))
            })

            setLoading(false)
        })
    }, [router.isReady])

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onChangeSelectedTag = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTag(Number.parseInt(event.target.value))
    }

    const addTag = () => {
        const tag = data[selectedTag]
        const { tags } = editProductState
        
        const existingTag = tags.find(({ id }) =>
            id === (tag ? tag.id : -1)
        )

        if(selectedTag === -1 || existingTag) {
            return;
        }

        editTagsDispatch({
            type: EditTagsActionType.ADD_TAG,
            payload: tag
        })
    }

    const updateProduct = async () => {
        const { tags } = editProductState

        const data = {
            name,
            tags: tags.map(tag => ({
                tag: {
                    id: tag.id,
                }
            })),
        }

        try {
            await api.put(`/products/${id}`, data)

            setSuccess(true)
        } catch(err) {
            setSuccess(false)
        }
    }

    return (
        <EditProductContext.Provider value={ editProductContextValues }>
            <Container title='Editar produto'>
                { !loading ?
                    <div className="animate-fade-in duration-300">
                        <form className='max-w-lg'>
                            <div>
                                <TextInput id='name' label='Nome' placeholder='Amaciante...' onChange={ onChangeName } value={ name } />
                            </div>
                            <div className="flex flex-wrap mt-2">
                                <TagBreadcrumbList />
                            </div>
                            <div className='flex flex-row space-x-2 mt-4'>
                                <ComboSelect
                                    defaultText='Selecionar tag'
                                    data={ data }
                                    renderItem={ item => (item as Tag).name }
                                    onChange={ onChangeSelectedTag }
                                    value={ String(selectedTag) } />
                                <Button
                                    left={ <PlusIcon className='h-4 w-4 text-white' /> }
                                    onPress={ addTag } />
                            </div>
                            <div className='flex flex-row justify-end space-x-2 mt-4'>
                                <Link href='/products'>
                                    <div>
                                        <Button secondary text='Voltar' left={ <ArrowLeftIcon className='h-4 w-4 text-white mr-1' /> }/>
                                    </div>
                                </Link>
                                <Button onPress={ updateProduct } text='Salvar' left={ <CheckIcon className='h-4 w-4 text-white mr-1' /> }/>
                            </div>
                            { success &&
                                <UpdateSuccessMessage />
                            }
                        </form>
                    </div> :
                    <LoadingProductForm />
                }
            </Container>
        </EditProductContext.Provider>
    )
}

export { EditProduct }