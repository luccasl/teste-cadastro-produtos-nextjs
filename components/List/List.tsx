import { PlusIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'

const List: React.FunctionComponent<{
    renderItem: (item: any, key: number) => JSX.Element,
    data: Array<any>,
    headers: Array<string>,
    addHref: string
}> = ({
    renderItem,
    data,
    headers,
    addHref
}) => {
    return (
        <div className='animate-fade-in duration-300'>
            <div className='flex flex-row justify-end'>
                <Link href={ addHref }>
                    <div className='mb-2'>
                        <Button text='Novo' left={ <PlusIcon className='h-4 w-4 text-white' /> } />
                    </div>
                </Link>
            </div>
            <div className='overflow-auto rounded-sm shadow-sm'>
                <table className='w-full bg-white border-collapse border border-gray-100 table-auto'>
                    <thead className='shadow-sm bg-white'>
                        { headers.map(header =>
                            <tr className='border-b border-gray-100'>
                                <th className='text-sm text-left py-2 px-3'>
                                    { header }
                                </th>
                            </tr>
                        )}
                    </thead>
                    <tbody>
                        { data.map((item, index) => renderItem(item, index)) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { List }