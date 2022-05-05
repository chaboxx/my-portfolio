import { FC, useState  } from 'react';

import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import styles from "../../styles/components/Home/ContactMain.module.css";

import { useApi } from '../../hooks/useApi';
import { useForm } from '../../hooks/useForm';

export const ContactMain : FC = () => {

  const { parametros , handleChangeValue} = useForm("name_person","email_person","description_person")
  
  const [mensajeRespuesta, setMensajeRespuesta] = useState("");
  const [error, setError] = useState< boolean | null >(null);
  const [disabledInput, setDisabledInput] = useState(false);
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
  const { sendMessage } =  useApi("/send-message");

  const handleSendMessage = async ( e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setDisabledInput(true);
    if ( !parametros[0] || !parametros[1] || !parametros[2]){

      setMensajeRespuesta("Fill in the fields please...");
      
      setDisabledInput(false);
      return setError(true);
    }
    
    const { ok , msg } = await sendMessage({
      nombre : parametros[0],
      email :parametros[1],
      message: parametros[2],
    })
    
    
    setMensajeRespuesta(msg);
    if ( ok ){
      handleChangeValue("name_person","");
      handleChangeValue("email_person","");
      handleChangeValue("description_person","");
      setDisabledInput(false);
      
      return setError(false);
    }
    
    setDisabledInput(false);
    return setError(true);  
    
    
  }

  


  return (
    <div id="contact" className={styles.contact_container}>
        <h6 className={styles.title}>Get in touch</h6>
        <div className={styles.main_content}>
          <form id="form-enviar-mensaje" onSubmit={handleSendMessage}>
            <div className={styles.content_container}>
              
              <div className={styles.content_item}>
                <div className={styles.icon_container}><FaUser/></div>
                
                <input 
                  className={styles.input} 
                  type="text"
                  value={parametros[0]}
                  onChange={(e)=>handleChangeValue("name_person",e.target.value)}
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
                  value={parametros[1]}
                  onChange={(e)=>handleChangeValue("email_person",e.target.value)}

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
                  value={parametros[2]}
                  onChange={(e)=>handleChangeValue("description_person",e.target.value)}

                  onFocus={cambiarEstadoIconContainerFocus}
                  onBlur={cambiarEstadoIconContainerFocus}
                />
              </div>

            <p className={[ error ? styles.error_message : styles.success_message , error !==null ? styles.mostrar : "" ].join(" ")}>{mensajeRespuesta}</p>
            </div>
            <input disabled={ disabledInput } type="submit" className={[ styles.button, disabledInput ? styles.disabled : "" ].join(" ")} value="Send Message"/>
          </form>
        </div>
    </div>
  )
}
