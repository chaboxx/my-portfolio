import { FC, useEffect, useState } from 'react'

import Image from "next/image";

import styles from "../../styles/components/Home/MainBanner.module.css";


const textosBanner = ["web1","web","design"]
export const MainBanner : FC = () => {

  const [textoBanner, setTextoBanner] = useState(textosBanner[0]);
  const [indexTextosBanner, setIndexTextosBanner] = useState(0);
  useEffect(() => {
    setIndexTextosBanner(indexTextosBanner+1);
  }, [])
  
  const cambiarTextoBanner = (event :any) => {

    //poner duracion a la animacion
   
    if( indexTextosBanner === 2 ){
     
      setIndexTextosBanner(0);
      const widthSpan = textosBanner[indexTextosBanner].length+8;

      
      setTextoBanner(textosBanner[indexTextosBanner]);
      event.target.style.width = `${widthSpan}ch`;
      // event.target.style["-moz-animation-duration"] = `${Math.ceil(widthSpan/10)}s`;
      // event.target.style["-webkit-animation-duration"] = `${Math.ceil(widthSpan/10)}s`;
      
    }else{
      setIndexTextosBanner(indexTextosBanner+1);
      const widthSpan = textosBanner[indexTextosBanner].length+8;
      
      setTextoBanner(textosBanner[indexTextosBanner]);
     
      event.target.style.width = `${widthSpan}ch`;
      // event.target.style["-moz-animation-duration"] = `${Math.ceil(widthSpan/10)}s`;
      // event.target.style["-webkit-animation-duration"] = `${Math.ceil(widthSpan/10)}s`;
    
      
    }

  }
  


  return (
    <div className={styles.main_banner_container}>
      <div className={styles.banner_container}>
        <h1 className={styles.title}>Discover my Amazing <br/> Art Space!</h1>
        <div className={styles.subtitle_container}>
           <p className={styles.subtitle}>{"<"}<span className={styles.yellow}>code</span>{">"} I build  
            <span className={styles.maquina_escribir} onAnimationIteration={cambiarTextoBanner}>{textoBanner}</span> 
            {"<"}<span className={styles.yellow}>code</span>{"/>"}
           </p>
        </div>
        <button className={styles.button}>EXPLORE NOW</button>
      </div>
      <div className={styles.image}>

        <Image src="/../public/miFotoSinFondo.png" width="280px" height="390px"/>
      </div>
    </div>
  )
}