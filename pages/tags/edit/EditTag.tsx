import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Button from "../../../components/Button"
import Container from "../../../components/Container"
import { EditSuccessAlert } from "../../../components/EditSuccessAlert/EditSuccessAlert"
import LoadingContainer from "../../../components/LoadingContainer"
import LoadingElement from "../../../components/LoadingElement"
import TextInput from "../../../components/TextInput"
import { api } from "../../../http/api"
import { LoadingTagForm } from "./components/LoadingTagForm"

const EditTag: React.FunctionComponent = () => {
    const [ name, setName ] = useState<string>('')
    const [ success, setSuccess ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(true)

    const router = useRouter()

    const {
        query: { id }
    } = router

    useEffect(() => {
        if(!router.isReady) {
            return
        }

        api.get(`/tags/${id}`)
        .then(res => res.data)
        .then(tag => {
            setName(tag.name)

            setLoading(false)
        })
    }, [router.isReady])

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const sendTag = async () => {
        const data = {
            name,
        }

        try {
            await api.put(`/tags/${id}`, data)

            setSuccess(true)
        } catch(err) {
            setSuccess(false)
        }
    }

    return (
        <Container title='Editar tag'>
            { !loading ?
                <div className="animate-fade-in duration-300">
                    <form className='max-w-lg'>
                        <div>
                            <TextInput id='name' label='Nome' placeholder='Beleza...' onChange={ onChangeName } value={ name } />
                        </div>
                        <div className='flex flex-row justify-end space-x-2 mt-4'>
                            <Link href='/tags'>
                                <div>
                                    <Button secondary text='Voltar' left={ <ArrowLeftIcon className='h-4 w-4 text-white mr-1' /> }/>
                                </div>
                            </Link>
                            <Button onPress={ sendTag } text='Adicionar' left={ <PlusIcon className='h-4 w-4 text-white mr-1' /> }/>
                        </div>
                        { success &&
                            <EditSuccessAlert />
                        }
                    </form>
                </div> :
                <LoadingTagForm />
            }
        </Container>
    )
}

export { EditTag }