import React from 'react'

const LoadingElement: React.FunctionComponent<{ className?: string }> = ({ className }) => {
    return (
        <div className={ `rounded-sm bg-gray-100 border-gray-100 shadow ${className}` }>
        </div>
    )
}

export { LoadingElement }