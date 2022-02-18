import { TrashIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import Breadcrumb from '../../../../components/Breadcrumb'
import { Tag } from '../../../../interfaces/Tag'
import { AddProductContext } from '../AddProductContext'
import { EditTagsActionType } from '../reducers'

const TagBreadcrumb: React.FunctionComponent<{ tag: Tag }> = ({ tag }) => {
    const { editTagsDispatch } = useContext(AddProductContext)
    
    const removeTag = () => {
        editTagsDispatch({
            type: EditTagsActionType.REMOVE_TAG,
            payload: tag,
        })
    }
    
    return (
        <Breadcrumb
            text={ tag.name }
            left={
                <TrashIcon className='h-4 w-4 mr-1' />
            }
            onPress={ removeTag }
            className='hover:border-red-500 hover:text-red-500 transition-colors duration-200' />
    )
}

export { TagBreadcrumb }