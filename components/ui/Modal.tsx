import { FC } from 'react';

interface Props{
  children  : JSX.Element | JSX.Element[];
  isOpen : boolean;
  toggleOpen : ()=> void;
}

import styles from "../../styles/components/ui/Modal.module.css";

export const Modal : FC<Props> = ({children, isOpen ,toggleOpen }) => {

  return (
    <div onClick={()=>toggleOpen()} className={[ styles.modal_container , isOpen ? styles.mostrar : styles.no_mostrar].join(" ")}>
      <div onClick={(e)=>e.stopPropagation()} className={styles.modal_content}>
        { children }
      </div>
    </div>
  )
}
