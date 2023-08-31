import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <RecoilRoot>
      <InitUser/>
      <Component {...pageProps} />
    </RecoilRoot>
  </div>
}

function InitUser(){
  
}