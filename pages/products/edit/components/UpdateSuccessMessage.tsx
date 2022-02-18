import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

const UpdateSuccessMessage: React.FunctionComponent = () => {
    return (
        <div className="flex flex-row items-center space-x-1 mt-2">
            <CheckIcon className="h-4 w-4 text-green-600" />
            <p className="text-green-600">
                Suas alterações foram salvas!
            </p>
        </div>
    )
}

export { UpdateSuccessMessage }