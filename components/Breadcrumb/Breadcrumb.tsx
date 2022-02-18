import React from 'react'

const Breadcrumb: React.FunctionComponent<{
    text: string,
    onPress?: () => void,
    left?: JSX.Element,
    className?: string,
}> = ({ text, onPress, left, className, }) => {
    return (
        <div
            className={`${className} bg-white border border-gray-200 px-2 mr-2 rounded-full flex flex-row items-center ${onPress && 'hover:cursor-pointer'}`}
            onClick={ onPress }>
            <div>
                { left }
            </div>
            <div>
                { text }
            </div>
        </div>
    )
}

export { Breadcrumb }