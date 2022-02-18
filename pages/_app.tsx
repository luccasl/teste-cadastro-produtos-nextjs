import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-gray-50 min-h-screen w-full flex flex-col md:flex-row'>
      <div className='flex-1 flex flex-row items-center'>
        <div className='flex-1 mx-auto max-w-md'>
          <div className='mb-4'>
            <h1 className='font-bold text-lg'>Login</h1>
          </div>
          <div className="bg-white shadow-md rounded-md">
            <form className='max-w-lg p-4 space-y-4'>
              <div>
                  <TextInput id='username' label='Usuário' onChange={ () => null } />
              </div>
              <div>
                  <TextInput id='password' label='Senha' onChange={ () => null } type='password' />
              </div>
              <div className='flex flex-row justify-end'>
                <Button text='Entrar' />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <SideBar>
        <SideButton icon={ <HomeIcon/> } title='Início' href='/' />
        <SideButton icon={ <CubeIcon/> } title='Produtos' href='/products' />
        <SideButton icon={ <TagIcon/> } title='Tags' href='/tags' />
      </SideBar>
      <div className='w-full py-4 min-h-full'>
        <Component {...pageProps} />
      </div> */}
    </div>
  )
}

export default MyApp
