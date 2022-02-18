import Link from 'next/link'
import React from 'react'

const Button: React.FunctionComponent<{
    text?: string,
    onPress?: () => void,
    left?: JSX.Element,
    secondary?: boolean,
}> = ({
    text,
    onPress,
    left,
    secondary,
}) => {
    return(
        <div className={`flex flex-row ${secondary ? 'bg-gray-400 hover:bg-gray-600' : 'bg-gradient-to-tl from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-800'} py-2 px-3 rounded-sm shadow-sm hover:cursor-pointer hover:shadow-md transition-all`} onClick={ onPress }>
            <div className='flex items-center justify-center'>
                { left }
            </div>
            { text &&
                <span className='text-sm text-white'>
                    { text }
                </span>
            }
        </div>
    )
}

export { Button }