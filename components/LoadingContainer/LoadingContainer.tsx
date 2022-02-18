import React from 'react'

const LoadingContainer: React.FunctionComponent = ({ children }) => {
    return (
        <div className='w-full flex-col animate-pulse space-y-2'>
            { children }
        </div>
    )
}

export { LoadingContainer }