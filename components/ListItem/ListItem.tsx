import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import React from 'react'

const ListItem: React.FunctionComponent<{
    itemId: number,
    title: string,
    right?: JSX.Element
    onPressEdit?: () => void
    onPressRemove?: () => void
}> = ({
    itemId,
    title,
    right,
    onPressEdit,
    onPressRemove
}) => {
    console.log(itemId)
    return (
        <tr className={`border-b border-gray-100 ${itemId % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
            <td className='text-sm font-sans px-3 py-2 flex flex-col'>
                <p>{ title }</p>
                { right }
            </td>
            <td>
                <div className='flex flex-row justify-end px-2 space-x-2'>
                    <div className='hover:cursor-pointer' onClick={ onPressEdit }>
                        <PencilIcon className='h-4 w-4' />  
                    </div>
                    <div className='hover:cursor-pointer' onClick={ onPressRemove }>
                        <TrashIcon className='h-4 w-4' />
                    </div>
                </div>
            </td>
        </tr>
    )
}

export { ListItem }