import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/solid"
import Link from "next/link"
import React, { useState } from "react"
import Button from "../../../components/Button"
import Container from "../../../components/Container"
import TextInput from "../../../components/TextInput"
import { api } from "../../../http/api"

const AddTag: React.FunctionComponent = () => {
    const [ name, setName ] = useState<string>('')

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const sendTag = async () => {
        const data = {
            name,
        }

        await api.post('/tags', data)

        setName('')
    }

    return (
        <Container title='Adicionar tag'>
            <div>
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
                </form>
            </div>
        </Container>
    )
}

export { AddTag }