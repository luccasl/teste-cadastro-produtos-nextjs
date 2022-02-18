import React from 'react'
import { EditTagsAction } from './reducers'
import { EditProductState } from './EditProductState'

const initialEditProductState: EditProductState = {
    tags: []
}

const EditProductContext = React.createContext<{
    editProductState: EditProductState,
    editTagsDispatch: React.Dispatch<EditTagsAction>,
}>({
    editProductState: initialEditProductState,
    editTagsDispatch: () => null,
})

export { EditProductContext, initialEditProductState }