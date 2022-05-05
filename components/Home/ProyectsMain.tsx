import React, { FC, useState } from 'react';
import Image from 'next/image';

import { IconType } from 'react-icons';

import { IoLogoJavascript } from "react-icons/io";

import { GoMarkGithub } from "react-icons/go";

import { BiLinkExternal } from "react-icons/bi";

import { Modal } from '../ui/Modal';
import { useModal } from '../../hooks/useModal';

import styles from "../../styles/components/Home/ProyectsMain.module.css";

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
  
  const { isOpen, toggleOpen } = useModal();
  
  const [currentImageModal, setCurrentImageModal] = useState(proyectos[0].image);
  const [currentWidth, setCurrentWidth] = useState(400);
  
  const openModalImage  = ( e : React.MouseEvent<HTMLDivElement, MouseEvent> , image : string) =>{
    setCurrentImageModal(image);
    setCurrentWidth(window.innerWidth)
    toggleOpen();
  }
  
  

  return (
    <div className={styles.proyects_main_container}>
      <Modal isOpen={isOpen} toggleOpen={toggleOpen} position="center"> 
        
        <Image src={currentImageModal} width={`${currentWidth > 760 ? currentWidth*0.6 : currentWidth*0.9}px`} height={`${currentWidth >760 ? currentWidth*0.4 : currentWidth * 0.8}px`} layout="fixed"/>

        
      </Modal>
      <h6 className={styles.title}>Proyects</h6>
      <div className={styles.content_container}>
        {
          proyectos.map(data=>(
            <div className={styles.content_item}>
              <div onClick={(e)=>openModalImage(e,data.image)} className={styles.image_container}>
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
