import React, { FC, useEffect, useState } from 'react'

import Image from "next/image";

import styles from "../../styles/components/Home/MainBanner.module.css";


const textosBanner = ["Web Aplications.","RESTful APIs.","Microservices."]
export const MainBanner : FC = () => {  

  const [textoBanner, setTextoBanner] = useState(textosBanner[0]);
  const [indexTextosBanner, setIndexTextosBanner] = useState(0);
  useEffect(() => {
    setIndexTextosBanner(indexTextosBanner+1);
  }, [])
  
  const cambiarTextoBanner = (event : React.AnimationEvent<HTMLSpanElement>) => {

    if( indexTextosBanner === 2 ){
     
      setIndexTextosBanner(0);
      setTextoBanner(textosBanner[indexTextosBanner]);
    }else{
      setIndexTextosBanner(indexTextosBanner+1);
      setTextoBanner(textosBanner[indexTextosBanner]);
      
    }

  }


  return (
    <div className={styles.main_banner_container}>
      <div className={styles.banner_container}>
        <h1 className={styles.title}>Full Stack Developer at Day ,<br/> Geek At Night  :)</h1>
        <div className={styles.subtitle_container}>
          <p className={styles.subtitle}>
            <span>

            {"<"}<span className={styles.yellow}>code</span>{">"} I develop
            </span>
            <span className={styles.maquina_escribir} onAnimationIteration={cambiarTextoBanner}>{textoBanner}</span> 
            <span>
            {"<"}<span className={styles.yellow}>code</span>{"/>"}

            </span>
          </p>
        </div>
        <button onClick={()=>document.querySelector("#contact")?.scrollIntoView()} className={styles.button}>CONTACT ME</button>
      </div>
      <div className={styles.image}>

        <Image loading="eager" quality={100} src="/miFotoSinFondo.png" width="280px" height="390px"/>
      </div>
    </div>
  )
}