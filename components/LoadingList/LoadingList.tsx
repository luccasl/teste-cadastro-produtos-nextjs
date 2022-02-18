import React from 'react'

const LoadingList: React.FunctionComponent = () => {
    return (
        <div className='w-full flex-col animate-pulse space-y-2'>
            <div className='flex flex-row justify-end'>
                <div className='w-20 h-9 rounded-sm bg-gray-100 border-gray-100 shadow'>
                </div>    
            </div>
            <div className='flex-1 h-10 rounded-sm bg-gray-100 border-gray-100 shadow'>
            </div>
            <div className='flex-1 h-14 rounded-sm bg-gray-100 border-gray-100 shadow'>
            </div>
            <div className='flex-1 h-14 rounded-sm bg-gray-100 border-gray-100 shadow'>
            </div>
            <div className='flex-1 h-14 rounded-sm bg-gray-100 border-gray-100 shadow'>
            </div>
            <div className='flex-1 h-14 rounded-sm bg-gray-100 border-gray-100 shadow'>
            </div>
            <div className='flex-1 h-14 rounded-sm bg-gray-100 border-gray-100 shadow'>
            </div>
        </div>
    )
}

export { LoadingList }