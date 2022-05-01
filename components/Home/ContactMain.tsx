import { FC } from 'react';

import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import styles from "../../styles/components/Home/ContactMain.module.css";

export const ContactMain : FC = () => {


  const cambiarEstadoIconContainerFocus = (e :React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) =>{
    //CLASS ICON CONATINER SELECTED
    const input = e.target.parentElement?.children[0];
    
    if( e.type ==="focus" ){
    
      input?.classList.remove(styles.icon_container)
      input?.classList.add(styles.icon_container_selected)

    }else{
      input?.classList.remove(styles.icon_container_selected)
      input?.classList.add(styles.icon_container)

    }

  }

  return (
    <div className={styles.contact_container}>
        <h6 className={styles.title}>Get in touch</h6>
        <div className={styles.main_content}>
          <div className={styles.content_container}>
            <div className={styles.content_item}>
              <div className={styles.icon_container}><FaUser/></div>
              <input 
                className={styles.input} 
                type="text" 
                name="name_person" 
                placeholder="Name"
                onFocus={cambiarEstadoIconContainerFocus}
                onBlur={cambiarEstadoIconContainerFocus}
              />
            </div>
            <div className={styles.content_item}>
              <div className={styles.icon_container}><MdOutlineAlternateEmail/></div>
              <input 
                className={styles.input} 
                type="email" 
                name="email_person" 
                placeholder="Email"
                onFocus={cambiarEstadoIconContainerFocus}
                onBlur={cambiarEstadoIconContainerFocus}
              />
            </div>
            <div className={styles.content_item_text_area}>
              <div className={styles.icon_container}><AiOutlineMail/></div>
              <textarea 
                className={styles.textarea} 
                name="description_person" 
                placeholder="Message"
                onFocus={cambiarEstadoIconContainerFocus}
                onBlur={cambiarEstadoIconContainerFocus}
              />
            </div>
          </div>

          <button className={styles.button}>Send Message</button>
        </div>
    </div>
  )
}
