import React from 'react'

const Container: React.FunctionComponent<{
    className?: string,
    title?: string,
}> = ({ children, className, title }) => {
    return (
        <div className='container h-full flex flex-col mx-10 mt-4 w-auto'>
            <p className='font-bold text-lg mb-2'>{ title }</p>
            <div className={ `container min-w-full h-full my-4 py-10 px-10 shadow-md bg-white rounded-sm ${className}` }>
                { children }
            </div>
        </div>
    )
}

export { Container }