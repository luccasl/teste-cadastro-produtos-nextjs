import React from 'react'
import { EditTagsAction } from './reducers'
import { AddProductState } from './AddProductState'

const initialAddProductState: AddProductState = {
    tags: []
}

const AddProductContext = React.createContext<{
    addProductState: AddProductState,
    editTagsDispatch: React.Dispatch<EditTagsAction>,
}>({
    addProductState: initialAddProductState,
    editTagsDispatch: () => null,
})

export { AddProductContext, initialAddProductState }