import { FC } from 'react';

interface Props{
  children  : JSX.Element | JSX.Element[];
  isOpen : boolean;
  toggleOpen : ()=> void;
  position : "center" | "top_left" | "top_right" | "bottom_left" | "bottom_right"; 
}

import styles from "../../styles/components/ui/Modal.module.css";

export const Modal : FC<Props> = ({children, isOpen ,toggleOpen ,position}) => {

  return (
    <div 
      onClick={()=>toggleOpen()} 
      className={[ styles.modal_container , isOpen ? styles.mostrar : styles.no_mostrar 
        ,position==="center" ? styles.center : position === "top_left" ? styles.top_left : position==="top_right" ? styles.top_right : position==="bottom_left" ? styles.bottom_left : styles.bottom_right].join(" ")}
    >

      <div onClick={(e)=>e.stopPropagation()} className={styles.modal_content}>
        { children }
      </div>
    </div>
  )
}
