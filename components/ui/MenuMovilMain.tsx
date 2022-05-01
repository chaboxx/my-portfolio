import { FC } from 'react';

import { AiOutlineMenuFold } from "react-icons/ai";

import styles from "../../styles/components/ui/MenuMovilMain.module.css";

interface Props {
  mostrarSideBarMovil : () =>void;
}

export const MenuMovilMain : FC<Props> = ({mostrarSideBarMovil}) => {
  return (
    <nav className={styles.menu_movil_main_container}>
      <div onClick={()=>mostrarSideBarMovil()} className={styles.icon_container}>
        <AiOutlineMenuFold/>
      </div>
    </nav>
  )
}
