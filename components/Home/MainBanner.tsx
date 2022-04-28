import { FC } from 'react'

import Image from "next/image";

import styles from "../../styles/components/Home/MainBanner.module.css";

export const MainBanner : FC = () => {
  return (
    <div className={styles.main_banner_container}>
      <div className={styles.banner_container}>
        <h1 className={styles.title}>Discover my Amazing <br/> Art Space!</h1>
        <h2 className={styles.subtitle}>
          {`<`} <span className={styles.yellow}>code</span> {`>`} I build automation tools. {`<`} <span className={styles.yellow}>/code</span> {`>`} 
        </h2>
        <button className={styles.button}>Explore Now</button>
      </div>
      <div className={styles.image}>

        <Image src="/../public/miFotoSinFondo.png" width="100%" height="100%"/>
      </div>
    </div>
  )
}
