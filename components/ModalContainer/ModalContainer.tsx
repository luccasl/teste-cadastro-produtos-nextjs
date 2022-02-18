import React from 'react'

const ModalContainer: React.FunctionComponent<{
    enabled?: boolean,
}> = ({ children, enabled }) => {
    return (
        <div>
            { enabled && children }
        </div>
    )
}

export { ModalContainer }