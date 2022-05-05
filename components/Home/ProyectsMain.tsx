import React, { FC, useState } from 'react';
import Image from 'next/image';

import { nanoid } from 'nanoid';

import { IconType } from 'react-icons';
import { GoMarkGithub } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";


import { FaReact } from "react-icons/fa";
import { DiNodejsSmall , DiMongodb} from "react-icons/di";
import { SiExpress ,SiNextdotjs ,SiSocketdotio , SiPostgresql ,SiJavascript, SiTypescript} from "react-icons/si";
import { GrDocker } from "react-icons/gr";

import { Modal } from '../ui/Modal';
import { useModal } from '../../hooks/useModal';

import styles from "../../styles/components/Home/ProyectsMain.module.css";

const proyectos = [
  {
    id: nanoid(8),
    title:"HI BABY ECOMMERCE",
    image: "/HI-BABY.jpg",
    description: "With only me in the development team was my firts experience , this webpage was created in the MERN stack.",
    githubLink : "https://github.com/chaboxx/hibabyServidor",
    link : "https://hi-baby-store.com",
    tecnologies : [FaReact,DiNodejsSmall,DiMongodb,SiExpress],
  },
  {
    id: nanoid(8),
    title:"Rappidin",
    image: "/rappidin.jpg",
    description: "Working in this project... Food App , PWA , Delivery and Maps.",
    githubLink : "https://github.com/chaboxx/Rappidin",
    link : "",
    tecnologies : [SiNextdotjs,SiSocketdotio,SiPostgresql,GrDocker],
  },
  {
    id: nanoid(8),
    title:"Clean-Data TIC",
    image: "/tic_clean_data.jpg",
    description: "App for clean a archive .csv.",
    githubLink : "https://github.com/chaboxx/T1C-CLEAN-DATA",
    link : "https://t1c-ticx-clean-data.herokuapp.com/",
    tecnologies : [SiJavascript,DiNodejsSmall,SiExpress],
  },
  {
    id: nanoid(8),
    title:"My Portfolio",
    image: "/my-portfolio.jpg",
    description: "My portfolio :).",
    githubLink : "https://github.com/chaboxx/my-portfolio",
    link : "",
    tecnologies : [SiNextdotjs,FaReact ,SiTypescript],
  },
]


const renderElement = (render: IconType[] ,styles: React.CSSProperties) => {
  
  
  return render.map(data=>React.createElement(data,{
    style:{
      ...styles
    },
    key: nanoid(8),
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
            <div key={data.id} className={styles.content_item}>
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
                      width:"45px",
                      height:"45px",
                    }).map(element=>(
                      <div key={element.key} className={styles.tecnologie_item}>
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
