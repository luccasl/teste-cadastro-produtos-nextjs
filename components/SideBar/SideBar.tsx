import React from 'react'

const SideBar: React.FunctionComponent = ({ children }) => {
    return (
        <div className='sm:w-full sm:h-16 py-4 px-4 md:min-h-screen md:w-24 md:py-6 bg-gradient-to-b from-purple-500 to-blue-600 shadow-md flex flex-row-reverse md:flex-col items-center'>
            { children }
        </div>
    )
}

export { SideBar };