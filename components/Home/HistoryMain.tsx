import { FC } from 'react';


import styles from "../../styles/components/Home/HistoryMain.module.css";

const experiencias = [
  {
    title :"Ticx",
    posicion:"Full Stack Developer",
    description : "Created Professional WordPress Themes & Templates for Personal and Creative Websites.",
    fechas : {
      inicio:"",
      fin : "",
      actualmenta: false,
    }
  },
  {
    title :"ABC Studio",
    posicion:"Front-End Developer",
    description : "Collaborate with creative and development teams on the execution of ideas.",
    fechas : {
      inicio:"",
      fin : "",
      actualmenta: false,
    }
  },
  {
    title :"Digital Web Studio",
    posicion:"Senior Developer",
    description : "Optimize your website and apps performance using latest technology.",
    fechas : {
      inicio:"",
      fin : "",
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
            <div className={styles.list_item}>

              <div className={styles.experience_container}>
                <div className={styles.title_experience}>
                  <p className={styles.title}>{data.title}</p>
                  <p className={styles.experience_date}>jan 2018 - may 2020</p>
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
