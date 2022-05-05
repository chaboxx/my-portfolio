import { FC } from 'react';
import { nanoid } from 'nanoid';


import styles from "../../styles/components/Home/HistoryMain.module.css";

const experiencias = [
  {
    id: nanoid(8),
    title :"Ticx",
    posicion:"Software Developer",
    description : "Software Developer ,SCRUM medotology.",
    fechas : {
      inicio: "jan 2022",
      fin : "",
      actualmenta: true,
    }
  },
  {
    id: nanoid(8),
    title :"HI BABY",
    posicion:"Full Stack Developer",
    description : "Creation of a complete ecommerce , with payments and dashboard for the admin.",
    fechas : {
      inicio: "july 2020",
      fin :  "dec 2021",
      actualmenta: false,
    }
  }
]

export const HistoryMain : FC = () => {
  return (
    <div className={styles.history_main_container}>
      <h3 className={styles.history_title}>Experience</h3>
      
      <div className={styles.experience_list_container}>
        {
          experiencias.map(data=>(
            <div key={data.id} className={styles.list_item}>

              <div className={styles.experience_container}>
                <div className={styles.title_experience}>
                  <p className={styles.title}>{data.title}</p>
                  <p className={styles.experience_date}>{`${data.fechas.inicio} - ${ data.fechas.actualmenta ? "Current" : data.fechas.fin}`}</p>
                </div>
                <p className={styles.position}>{data.posicion}</p>
                <p className={styles.description}>{data.description}</p>
              </div>
              <div className={styles.road_canva}>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}
