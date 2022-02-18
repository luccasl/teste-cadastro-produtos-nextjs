import React from 'react'
import LoadingContainer from '../../../../components/LoadingContainer'
import LoadingElement from '../../../../components/LoadingElement'

const LoadingTagForm: React.FunctionComponent = () => {
    return (
        <div className='max-w-lg'>
            <LoadingContainer>
                <LoadingElement className='w-20 h-7' />
                <LoadingElement className='w-full h-10' />
                <div className='flex flex-row justify-end space-x-2'>
                    <LoadingElement className="w-20 h-10" />
                    <LoadingElement className="w-24 h-10" />
                </div>
            </LoadingContainer>
        </div>
    )
}

export { LoadingTagForm }