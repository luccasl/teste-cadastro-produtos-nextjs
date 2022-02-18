import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ConfirmationModal from '../../components/ConfirmationModal'
import Container from '../../components/Container'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import LoadingList from '../../components/LoadingList'
import ModalContainer from '../../components/ModalContainer'
import { api } from '../../http/api'
import { Tag } from '../../interfaces/Tag'

const Tags: React.FunctionComponent = () => {
    const [ isRemoveModalEnabled, setIsRemoveModalEnabled ] = useState<boolean>(false)
    const [ removedTag, setRemovedTag ] = useState<Tag>()
    const [ tags, setTags ] = useState<Array<Tag>>([])
    const [ loading, setLoading ] = useState<boolean>(true)

    const router = useRouter()

    const fetchTags = async () => {
        setLoading(true)

        const { data } = await api.get('/tags')

        setTags(data)

        setLoading(false)
    }

    useEffect(() => {
        fetchTags()
    }, [])

    const renderItem = (item: Tag, key: number) =>
    <ListItem
        itemId={ key }
        title={ item.name }
        onPressEdit={ () => editTag(item) }
        onPressRemove={ () => showRemoveDialog(item) } />

    const editTag = (tag: Tag) => {
        router.push({
            pathname: '/tags/edit',
            query: {
                id: tag.id
            }
        })
    }

    const showRemoveDialog = (tag: Tag) => {
        if(!tag) {
            return
        }

        setRemovedTag(tag)

        enableRemoveModal()
    }

    const removeTag = async () => {
        if(!removedTag) {
            return
        }

        await api.delete(`/tags/${removedTag.id}`)

        disableRemoveModal()

        router.reload()
    }

    const enableRemoveModal = () => setIsRemoveModalEnabled(true)
    const disableRemoveModal = () => setIsRemoveModalEnabled(false)

    return (
        <Container title='Tags'>
            { !loading ?
                <List
                    renderItem={ renderItem }
                    data={ tags }
                    headers={[ 'Nome', ]}
                    addHref='/tags/add' /> :
                <LoadingList />
            }
            <ModalContainer enabled={ isRemoveModalEnabled }>
                <ConfirmationModal
                    text='Você tem certeza de que deseja excluir a tag?'
                    onCancel={ disableRemoveModal }
                    onConfirm={ removeTag } />
            </ModalContainer>
        </Container>
    )
}

export { Tags }