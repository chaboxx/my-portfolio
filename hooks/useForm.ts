import { useState } from "react"


export const useForm = ( ...namesInput : string[]) => {
  
  const parametros = namesInput.map(name=>{
    
    const [value, setValue] = useState("");
    return {

        name,
        value,
        setValue,
      
    }
  })
  
  const handleChangeValue = (nameInput:string , newvalue : string) =>{

    parametros.map(parametro=>{
      if( parametro.name===nameInput ){
        parametro.setValue(newvalue);
      }
    })
  }
    
  return {
    parametros : parametros.map(parametro => parametro.value),
    handleChangeValue
  };
  

}

