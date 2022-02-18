import { TrashIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import { EditProductContext } from '../EditProductContext'
import { TagBreadcrumb } from './TagBreadcrumb'

const TagBreadcrumbList: React.FunctionComponent = () => {
    const {
        editProductState: { tags }
    } = useContext(EditProductContext)

    return (
        <div className='flex flex-wrap'>
            { tags.map((tag, index) =>
                <div key={ index } className='mt-2 mr-2'>
                    <TagBreadcrumb tag={ tag } />
                </div>
            )}
        </div>)
}

export { TagBreadcrumbList }