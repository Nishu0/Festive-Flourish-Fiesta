import Image from 'next/image'
import NotFound from '../components/NotFound'
import type { AppProps } from "next/app";
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Layout from '../components/layout'


export default function Home({ Component, pageProps }: AppProps) {
  return (
   <>
   <Header />
   <Sidebar />
   
    
   
   </>
  )
}
