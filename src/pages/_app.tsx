import { FC } from 'react';
import { TodoContextProvider } from '../components/context/todoContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    {/* 
      // @ts-ignore */}
      <TodoContextProvider>
        <Component {...pageProps} />
      </TodoContextProvider>
    </>
  )
}

export default MyApp