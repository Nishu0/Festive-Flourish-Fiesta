import Image from 'next/image'
import NotFound from '../components/NotFound'
import type { AppProps } from "next/app";
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Header from '../components/Header';

export default function Home({ Component, pageProps }: AppProps) {
  return (
   <>
   <Header />
   <Sidebar />
    
   
   </>
  )
}
