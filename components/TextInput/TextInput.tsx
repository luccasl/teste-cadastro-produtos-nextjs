import React from 'react'

const TextInput: React.FunctionComponent<{
    id: string,
    label: string,
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    type?: string,
}> = ({ id, label, placeholder, onChange, value, type }) => {
    return (
        <div className='flex flex-col'>
            <label className='pb-2 font-bold text-gray-800' htmlFor={ `${id}` }>
                { label }
            </label>
            <input
                className='border border-gray-200 px-2 py-2 rounded-sm shadow-sm focus:outline-purple-500'
                maxLength={ 50 }
                type={ type || 'text' }
                placeholder={ placeholder }
                onChange={ onChange }
                id={ `${id}` }
                value={ value } />
        </div>
    )
}

export { TextInput }