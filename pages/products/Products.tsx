import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import ConfirmationModal from '../../components/ConfirmationModal'
import Container from '../../components/Container'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import LoadingList from '../../components/LoadingList'
import ModalContainer from '../../components/ModalContainer'
import { api } from '../../http/api'
import { Product } from '../../interfaces/Product'

const Products: React.FunctionComponent = () => {
    const [ isRemoveModalEnabled, setIsRemoveModalEnabled ] = useState<boolean>(false)
    const [ removedProduct, setRemovedProduct ] = useState<Product>()
    const [ products, setProducts ] = useState<Array<Product>>([])

    const disableRemoveModal = () => setIsRemoveModalEnabled(false)
    const enableRemoveModal = () => setIsRemoveModalEnabled(true)

    const fetchProducts = async () => {
        const { data } = await api.get('/products')

        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const renderItem = (item: Product, index: number) =>
        <ListItem
            itemId={ index }
            title={ item.name }
            right={
                <div className='flex flex-wrap mt-1'>
                    { item.tags.map(tag =>
                        <div className='bg-white border border-gray-200 px-2 mr-2 rounded-full'>
                            { tag.tag.name }
                        </div>
                    )}
                </div>
            }
            onPressRemove={ () => showRemoveDialog(item) }
            onPressEdit={ () => editProduct(item) } />

    const showRemoveDialog = (product: Product) => {
        if(!product) {
            return
        }

        setRemovedProduct(product)

        enableRemoveModal()
    }

    const removeProduct = async() => {
        if(!removedProduct) {
            return
        }

        await api.delete(`/products/${removedProduct.id}`)

        disableRemoveModal()

        await fetchProducts()
    }

    const editProduct = (item: Product) => {
        Router.push({
            pathname: '/products/edit',
            query: {
                id: item.id
            }
        })
    }

    return (
        <Container title='Produtos'>
            { products.length > 0 ?
                <List
                    renderItem={ renderItem }
                    data={ products }
                    headers={[ 'Nome', ]}
                    addHref='/products/add' /> :
                <LoadingList />
            }
            <ModalContainer enabled={ isRemoveModalEnabled }>
                <ConfirmationModal
                    text='Você tem certeza de que deseja excluir o produto?'
                    onConfirm={ removeProduct }
                    onCancel={ disableRemoveModal } />
            </ModalContainer>
        </Container>
    )
}

export { Products }