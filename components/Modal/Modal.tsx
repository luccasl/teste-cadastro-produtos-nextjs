import React from 'react'

const Modal: React.FunctionComponent = ({ children }) => {
    return (
        <div className='fixed top-0 left-0 h-full w-full bg-transparent bg-opacity-60 bg-gray-200 flex items-center'>
            <div className='max-w-md mx-auto p-6 bg-white rounded-sm shadow-md flex flex-1 flex-col'>
                { children }
            </div>
        </div>
    )
}

export { Modal }