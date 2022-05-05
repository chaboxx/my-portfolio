import React, { FC , useState } from 'react';

import Image from "next/image";

import { nanoid } from "nanoid";

import { BsCheckLg } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { AiFillLinkedin ,AiOutlineGithub ,AiOutlineTwitter} from "react-icons/ai";

import styles from "../../styles/components/ui/SideNavBar.module.css";


interface Props {
  isOpen : boolean;

}

const lenguajes = [
  {
    id : nanoid(8),
    nombre: "English",
    value : 0.750,
  },
  {
    id : nanoid(8),
    nombre: "Spanish",
    value : 1,
  },

]
  
const coding = [
  {
    id : nanoid(8),
    nombre: "JS",
    value : 0.95, 
  },
  {
    id : nanoid(8),
    nombre: "HTML",
    value : 0.95, 
  },
  {
    id : nanoid(8),
    nombre: "CSS",
    value : 0.90, 
  },
  {
    id : nanoid(8),
    nombre: "NODEJS",
    value : 0.90, 
  },
  {
    id : nanoid(8),
    nombre: "REACT",
    value : 0.90, 
  },
  {
    id : nanoid(8),
    nombre: "NEXTJS",
    value : 0.80, 
  },
  {
    id : nanoid(8),
    nombre: "GIT",
    value : 0.80, 
  },
  
  
]

export const SideNavBar : FC<Props> = ({isOpen}) => {

  // const circleSkillsPoints : React.LegacyRef<SVGCircleElement> = useRef(null);
  const [languageRefs, setLanguageRefs] = useState<SVGCircleElement[]>([]);
  const [codingSkillsRef , setcodingSkillsRef ] = useState<HTMLDivElement[]>([]);
  // useEffect(() => {
  //   console.log(circleSkillsPoints);
  //   // confia que te enviare todo lo de atras y pa adelante (!) 
  //   // despues no es necesario porque puede ser undefined

  //   // circleSkillsPoints.current!.style.strokeDasharray = "100";
    
    
  // }, [])

  const captureLanguageRefs = ( ref : SVGCircleElement | null , value : number) =>{
    //TENER EN CUENTA EL VALOR DEL RADIO DEL ELEMENTO CIRCLE PARA HACER ESTE DIBUJO 
    // DIAMETRO CIRCLE = 138px
    
    if( !languageRefs.includes( ref! ) && ref ){

      setLanguageRefs([...languageRefs ,ref!])
      
      ref.style.strokeDasharray = `${138 - 138 * (1- value) }px 138px`
      
    }
    
  }

  const captureCodingRefs = ( ref : HTMLDivElement | null , value : number) =>{
    //TENER EN CUENTA EL VALOR DEL RADIO DEL ELEMENTO CIRCLE PARA HACER ESTE DIBUJO 
    // DIAMETRO CIRCLE = 138px
    
    if( !codingSkillsRef.includes( ref! ) && ref ){

      setcodingSkillsRef([...codingSkillsRef ,ref!])
      const childs : HTMLCollection = ref.children;
      const child : any  = childs[1];
      child.style.width = `${value*100}%`;
      
    }
    
  }
  
  const onMouseHandleHoverDownloadDiv = ( e : React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
   
    const target  = e.currentTarget;
    //--------------------
    const label =  target.children[0] as HTMLElement;
    const icon   = target.children[1] as HTMLElement;

    if (e.type ==="mouseenter"){
      label!.style.color = "white";
      icon!.style.color = "white";

    }else{
      label!.style.color = "#8c8c8e";
      icon!.style.color = "#8c8c8e";
    }

  }

  return (
    <aside className={[styles.side_navbar_container , isOpen ? styles.mostrar : styles.no_mostrar].join(" ")}>
      <div className={styles.content_container}>

        <div className={styles.main_foto_container}>
          <div className={styles.image}>
            <Image src="/../public/miFoto1_1.jpg" width="90px" height="90px"/>
            
          </div>
          <h3 className={styles.name}>Rodrigo Cueva Pastor</h3>
          <p className={styles.title}>Full Stack Software Developer</p>
          <p className={styles.subtitle}>Learning all the time</p>
        </div>

        
        <div className={styles.information_container}>
          <div className={styles.general_info_container}>
            <ul className={styles.general_info_list}>
              <li className={styles.list_general_info_item}>
                <p className={styles.label_info}>Residence:</p>
                <p className={styles.value_info}>Perú</p>
              </li>
              <li className={styles.list_general_info_item}>
                <p className={styles.label_info}>Email:</p>
                <p className={styles.value_info}>chaboxx159@gmail.com</p>
              </li>
              <li className={styles.list_general_info_item}>
                <p className={styles.label_info}>Tel:</p>
                <p className={styles.value_info}>+51 921497426</p>
              </li>
            </ul>
              
          </div>

          <div className={styles.languages_container}>
            <h6 className={styles.languages_title}>Languages</h6>
            <div className={styles.languages_description}>
              
              {
                lenguajes.map((lenguaje,index)=>(
                  <div key={lenguaje.id} className={styles.language}>
                    <div className={styles.canva_language}>
                      <svg className={styles.svg_circle} xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px">
                        <defs>
                            <linearGradient id="GradientColor">
                              <stop offset="0%" stopColor="ffc107" />
                              <stop offset="100%" stopColor="ffc107" />
                              
                            </linearGradient>
                        </defs>
                        <circle ref={(ref)=>captureLanguageRefs(ref,lenguaje.value)} className={styles.circle_points} cx="50%" cy="50%" r="22px" strokeLinecap="round" />
                      </svg>
                      <p>{`${(lenguaje.value*100)}%`}</p>
                    </div>
                    <h6 className={styles.canva_label}>{lenguaje.nombre}</h6>
                  </div>

                ))
              }
              
            </div>
          </div>

          <div className={styles.coding_container}>
            <h6 className={styles.coding_title}>Coding</h6>
            <div className={styles.skills_container}>
              <ul className={styles.skills_list}>
                {
                  coding.map(skill=>(
                    <li key={skill.id} className={styles.skill_list_item}>
                      <div className={styles.skill}>
                        <p className={styles.skill_label}>{skill.nombre}</p>
                        <p className={styles.skill_value}>{`${skill.value*100} %`}</p>
                      </div>
                      <div ref={(ref)=>captureCodingRefs(ref,skill.value)} className={styles.skill_bar}>
                        <div className={styles.bar_before}></div>
                        <div className={styles.bar_after}></div>
                      </div>
                    </li>

                  ))
                }
                

              </ul>
            </div>
          </div>

          <div className={styles.knowledge_container}>
            <h6 className={styles.knowledge_title}>Knowledge</h6>
            <ul className={styles.knowledge_list}>
              <li className={styles.knowledge_item}>
                <BsCheckLg className={styles.check_icon}/>
                <p className={styles.knowledge_value}>JWT, HOOKS , STATES</p>
              </li>
              <li className={styles.knowledge_item}>
                <BsCheckLg className={styles.check_icon}/>
                <p className={styles.knowledge_value}>CSS, BOOTSTRAP , SCSS</p>
              </li>
              <li className={styles.knowledge_item}>
                <BsCheckLg className={styles.check_icon}/>
                <p className={styles.knowledge_value}>WEBPACK , VITE</p>
              </li>

              <li className={styles.knowledge_item}>
                <BsCheckLg className={styles.check_icon}/>
                <p className={styles.knowledge_value}>GIT , GITHUB</p>
              </li>
            </ul>
          </div>

          <div className={styles.download_cv_container} onMouseLeave={onMouseHandleHoverDownloadDiv} onMouseEnter={onMouseHandleHoverDownloadDiv} onClick={(e)=>window.open(`${process.env.NEXT_PUBLIC_URL}/rodrigocp_cv.pdf`)}>
            <h6 className={styles.download_label}>DOWNLOAD CV </h6>
            <FaDownload className={styles.download_icon}/>
          </div>
        </div>
        <div className={styles.footer}>
          <ul>
            <li onClick={()=>window.open("https://www.linkedin.com/in/rodrigocuevapastor/")}>
              <AiFillLinkedin className={styles.footer_icon}/>
            </li>
            <li onClick={()=>window.open("https://github.com/chaboxx")}>
              <AiOutlineGithub className={styles.footer_icon}/>
            </li>
            <li onClick={()=>window.open("https://twitter.com/chaboxxSama")}>
              <AiOutlineTwitter className={styles.footer_icon}/>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
