import React from 'react'

const ComboSelect: React.FunctionComponent<{
    defaultText: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    value?: string,
    data?: Array<any>,
    renderItem?: (item: any) => string
}> = ({
    defaultText,
    onChange,
    value,
    data,
    renderItem
}) => {
    return (
        <select
            className='border border-gray-200 rounded-sm shadow-sm px-1'
            onChange={ onChange }
            value={ value } >
            <option key={ 0 } value='-1'>
                { defaultText }
            </option>
            { data && data.map((item, index) =>
                <option key={ index+1 } value={ String(index) }>
                    { renderItem && renderItem(item) }
                </option>
            )}
        </select>
    )
}

export { ComboSelect }