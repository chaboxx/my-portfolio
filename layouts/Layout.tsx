import Head from 'next/head';
import React, { FC } from 'react'
import { SideNavBar } from '../components/ui/SideNavBar';

interface Props {
  children : JSX.Element | JSX.Element[];
  title : string;
  description? : string;
}

export const Layout :FC<Props> = ({children , title , description}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Rodrigo Cueva Pastor @chaboxxsama' />
        <meta name='description' content={description || "Portfolio Rodrigo Cueva Pastor Full Stack Developer"} />
      </Head>

      
      <div style={{
        width:"100%",
        padding:"0 4vw",
        backgroundColor:"#191923",
        display:"grid",
        gridTemplateColumns:"20% 1fr",
      }}>
        <SideNavBar/>

        <main>
          { children }
        </main>
      </div>  
      
    </>
  )
}
