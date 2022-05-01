import React, { FC, useState } from 'react'
import Head from 'next/head';
import { MenuMovilMain } from '../components/ui/MenuMovilMain';
import { SideNavBar } from '../components/ui/SideNavBar';

import { Modal } from '../components/ui/Modal';

import styles from "../styles/layouts/Layout.module.css";

import { useModal } from '../hooks/useModal';


interface Props {
  children : JSX.Element | JSX.Element[];
  title : string;
  description? : string;
}


export const Layout :FC<Props> = ({children , title , description}) => {
 
  const { isOpen,toggleOpen } = useModal();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Rodrigo Cueva Pastor @chaboxxsama' />
        <meta name='description' content={description || "Portfolio Rodrigo Cueva Pastor Full Stack Developer"} />
      </Head>

      <div onClick={()=>toggleOpen()} className={styles.layout_container}>

        <div className={styles.content_container}>
          <SideNavBar isOpen={isOpen}/>
          <MenuMovilMain mostrarSideBarMovil={toggleOpen} />
          <Modal isOpen={isOpen} toggleOpen={toggleOpen}>

            <SideNavBar isOpen={isOpen}/>
          </Modal>
          <main className={styles.main_container}>
            { children }
          </main>
        
        </div>
      </div>
    </>
  )
}
