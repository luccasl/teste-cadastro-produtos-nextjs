import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SideBar from '../components/SideBar'
import SideButton from '../components/SideButton'
import { CubeIcon, HomeIcon, TagIcon } from '@heroicons/react/solid'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-gray-50 min-h-screen w-full flex flex-col md:flex-row'>
      <SideBar>
        <SideButton icon={ <HomeIcon/> } title='Início' href='/' />
        <SideButton icon={ <CubeIcon/> } title='Produtos' href='/products' />
        <SideButton icon={ <TagIcon/> } title='Tags' href='/tags' />
      </SideBar>
      <div className='w-full py-4 min-h-full'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
