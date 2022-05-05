import { DataMessage, SendMessageResponse } from "../interfaces/send-message-resp";







// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const useApi = ( endpoint : string) =>{


  const sendMessage = async ( data : DataMessage  ) =>{
    
    const resp  = await fetch(`/api${endpoint}`,{
      method  : "POST",
      body: JSON.stringify(data),
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Accept" : "*/*",
      }
    })

  
    const res :any = await resp.json();
    
    if (res.ok){
      return res;
    }
    
    return res;


  }




  return {
    sendMessage,
  }
}