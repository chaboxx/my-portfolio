// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from "nodemailer";

interface Data{
  ok: boolean;
  msg: string;
}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {

  
  try {
    
    const { nombre , email , message } = JSON.parse(req.body);
    

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
            user: "chaboxx159@gmail.com", 
            pass: process.env.GMAIL_PASSWORD_APLICATION, 
        },
    });    

    
    await transporter.sendMail({
        from: '"Rodrigo Cueva Pastor Contacto" <chaboxx159@gmail.com>', // sender address
        to: "chaboxx159@gmail.com", // list of receivers
        subject: "Contacto", // Subject line
        html: `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contacto</title>
            </head>
            <body>
                <h1>Hola te contacto una persona</h1>
                <div>
                    <p>
                        Nombre : ${nombre}
                    </p>
                    <p>
                        Email : ${email}
                    </p>
                    <p>
                        Mensaje : ${message}
                    </p>
                </div>
            </body>
        </html>
        `, 
    });
    

    return res.status(200).json({
        ok:true,
        msg :"Mensaje Enviado. Si no puedes esperar puedes llamarme :) => +51 921497426",
    })

} catch (error) {
    console.log(error);
    return res.status(500).json({
        ok: false,
        msg: "Ocurrio un error inesperado , intente de nuevo porfavor.", 
    })
}



}
