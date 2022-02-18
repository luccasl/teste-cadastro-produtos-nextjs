import Link from 'next/link'
import React from 'react'

const SideButton: React.FunctionComponent<{
    icon: React.SVGProps<SVGElement>,
    title: string,
    href: string,
}> = ({ icon, title, href }) => {
    return (
        <Link href={ href }>
            <div className='flex flex-col items-center mx-2 md:mb-4'>
                <div className='flex items-center justify-center rounded-full w-7 h-7 md:w-10 md:h-10 shadow-md hover:cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-purple-900'>
                    <div className='h-5 w-5 md:h-8 md:w-8 text-white'>
                        { icon }
                    </div>
                </div>
                <div className='flex items-center text-sm text-white'>
                    <p>{ title }</p>
                </div>
            </div>
        </Link>
    )
}

export { SideButton }