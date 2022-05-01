import { FC } from "react";
import Image from "next/image";

import styles from "../../styles/components/Home/SkillsMain.module.css";


const skills = [
  {
    skill: "Web Development",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/js.png",
  },
  {
    skill: "Web Development",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/js.png",
  },
  {
    skill: "Web Development",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/js.png",
  },
  {
    skill: "Web Development",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/js.png",
  },
  {
    skill: "Web Development",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/js.png",
  },
  {
    skill: "Web Development",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/js.png",
  }
];

export const SkillsMain : FC = () => {
  return (
    <div className={styles.skills_main_container}>
      <h3 className={styles.skills_title}>My Skills</h3>
      <div className={styles.skills_list}>
        
        {
          skills.map(data=>(
            <div className={styles.skill_item}>
              <Image className={styles.image} src={data.image} width="100%" height="100%"/>
              <h5 className={styles.skill_title}>{data.skill}</h5>
              <p className={styles.skill_description}>{data.description}</p>
            </div>

          ))
        }

      </div>
    </div>
  )
}
