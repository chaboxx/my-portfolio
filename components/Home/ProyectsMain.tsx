import React, { FC, useRef } from 'react';
import ReactDOM from "react-dom/client";
import Image from 'next/image';

import { IconType } from 'react-icons';

import { IoLogoJavascript } from "react-icons/io";

import { GoMarkGithub } from "react-icons/go";

import { BiLinkExternal } from "react-icons/bi";

import styles from "../../styles/components/Home/ProyectsMain.module.css";
import { useModal } from '../../hooks/useModal';
import { Modal } from '../ui/Modal';


const proyectos = [
  {
    title:"HI-BABY ECOMMERCE",
    image: "/../public/HI-BABY.PNG",
    description: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…",
    githubLink : "",
    link : "",
    tecnologies : [IoLogoJavascript,IoLogoJavascript,IoLogoJavascript,IoLogoJavascript],
  },
  {
    title:"HI-BABY ECOMMERCE",
    image: "/../public/HI-BABY.PNG",

    description: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…",
    githubLink : "",
    link : "",
    tecnologies : [IoLogoJavascript,IoLogoJavascript,IoLogoJavascript],
  },
  {
    title:"HI-BABY ECOMMERCE",
    image: "/../public/HI-BABY.PNG",

    description: "My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…",
    githubLink : "",
    link : "",
    tecnologies : [IoLogoJavascript,IoLogoJavascript],
  },
]


const renderElement = (render: IconType[] ,styles: React.CSSProperties) => {
  
  
  return render.map(data=>React.createElement(data,{
    style:{
      ...styles
    },
  }))
}



export const ProyectsMain : FC = () => {

  
  const containerRef = useRef<Iterable<React.ReactNode> | React.ReactChild>(null);
  const { isOpen, toggleOpen } = useModal();
  
  const showImageModal = ( e : React.MouseEvent<HTMLDivElement, MouseEvent> ) =>{
   
    if(typeof window !== "undefined"){

      const element = e.target as HTMLElement ;
      const containerModal = containerRef.current;
      //.CURRENT . TARGET => OBJETOS DE HTML ELEMENT /// REACT CHILD JSX , CLASSCOMPONENT ,FC
      //STRING , EJEMPLO IMG O FC O CLASE COMPONENT PARA CREAR ELEMENTO CREATE ELEMENT
      //DA UN (REACT.NODE == JSX) Y ESO REQUIERE EL RENDER PARA RENDERIZAR JSX
      // HTML ELEMENT , SVG ELEMENT TE DA EL REF DEL JSX SON UN TIPO DE JSX Y NO ES ASIGNABLE A CREATE ELEMENT NO ES ASIGNABLE A STRING O FC O COMPONENT
      
      // element === htmlElement , requiere STRING , FC , CLASS
      
      //jsx | react.node => resultado de react.createelement
      //PARA CREAR JSX
      //JSX REQUIERE  REACT CREATE ELEMENT PARA CREARLO QUE ESTE ES IGUAL A REACT.NODE 
      //E.TARGET
      // const repetir = React.createElement(element);

      const jsxElement = React.createElement("img",{
        src:"http://localhost:3000/js.png",
        width:"45px",
        height:"45px",
        alt:"NO ECONTRE",
        style:{
          backgroundColor:"red"
        }
      })
      
      const modal = React.createElement(Modal,{
        children: jsxElement,
        isOpen,
        toggleOpen,
      });

      //CREAR UN NODO PARA LA RENDERIZACION DE ELEMENTOS
      const div = ReactDOM.createRoot(document.getElementById("asdsad")!)
      //SOLO SE PUEDE CREAR UN ELEMENTO CREATEELEMENT
      div.render(containerModal!);

    
    }
 


    
  }

  return (
    <div className={styles.proyects_main_container}>
      <h6 className={styles.title}>Proyects</h6>
      <div id="asdsad"></div>
      <div ref={containerRef}><p>hola</p></div>
      <div className={styles.content_container}>
        {
          proyectos.map(data=>(
            <div className={styles.content_item}>
              <div onClick={showImageModal} className={styles.image_container}>
                <Image layout="responsive" src={data.image} width="100%" height="100%"/>
              </div>

              <div className={styles.data_container}>
                <h6 className={styles.data_title}>{data.title}</h6>
                <p className={styles.data_description}>{data.description}</p>
                <p className={styles.tecnologies_title}>Tecnologies Used</p>
                <div className={styles.tecnologies_list}>
                  {
                    renderElement(data.tecnologies,{
                      color:"white",
                      width:"55px",
                      height:"55px",
                    }).map(element=>(
                      <div className={styles.tecnologie_item}>
                        {element}
                      </div>
                    ))
                  }
                </div>
                <div className={styles.links_container}>
                  <div className={styles.link_item} onClick={()=>window.open(data.githubLink)}>
                    <GoMarkGithub className={styles.links_icon}/>
                    <p>Repository</p>
                  </div>
                  <div className={styles.link_item} onClick={()=>window.open(data.link)}>
                    <BiLinkExternal className={styles.links_icon}/>
                    <p>WebSite</p>
                  </div>
                </div>
              </div>
            </div>
          ))
          
        }
      
      </div>
    </div>
  )
}
