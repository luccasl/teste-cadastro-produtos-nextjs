import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/solid"
import Link from "next/link"
import React, { useReducer, useState } from "react"
import Button from "../../../components/Button"
import ComboSelect from "../../../components/ComboSelect"
import Container from "../../../components/Container"
import TextInput from "../../../components/TextInput"
import { Tag } from "../../../interfaces/Tag"
import { AddProductContext, initialAddProductState } from "./AddProductContext"
import { TagBreadcrumbList } from "./components/TagBreadcrumbList"
import { EditTagsActionType, editTagsReducer } from "./reducers"

const AddProduct: React.FunctionComponent<{ data: Array<Tag> }> = ({ data }) => {
    const [ name, setName ] = useState<string>('')
    const [ selectedTag, setSelectedTag ] = useState<number>(-1)

    const [addProductState, editTagsDispatch] = useReducer(editTagsReducer, initialAddProductState)
    const addProductContextValues = { addProductState, editTagsDispatch }

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onChangeSelectedTag = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTag(Number.parseInt(event.target.value))
    }

    const addTag = () => {
        const tag = data[selectedTag]
        const { tags } = addProductState
        
        if(selectedTag === -1 || tags.includes(tag)) {
            return;
        }

        editTagsDispatch({
            type: EditTagsActionType.ADD_TAG,
            payload: tag
        })
    }

    const sendProduct = async () => {
        const { tags } = addProductState

        const data = {
            name,
            tags: tags.map(tag => ({
                tag: {
                    id: tag.id,
                }
            })),
        }

        await fetch('http://localhost/api/products', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setName('')
        setSelectedTag(-1)

        editTagsDispatch({
            type: EditTagsActionType.CLEAR_TAGS
        })
    }

    return (
        <AddProductContext.Provider value={ addProductContextValues }>
            <Container title='Adicionar produto'>
                <div>
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
                            <Button onPress={ sendProduct } text='Adicionar' left={ <PlusIcon className='h-4 w-4 text-white mr-1' /> }/>
                        </div>
                    </form>
                </div>
            </Container>
        </AddProductContext.Provider>
    )
}

export { AddProduct }