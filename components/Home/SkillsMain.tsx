import { FC } from "react";
import Image from "next/image";

import { nanoid } from "nanoid";

import styles from "../../styles/components/Home/SkillsMain.module.css";


const skills = [
  {
    id: nanoid(8),
    skill: "Web Development",
    description : "I am an expert in the development of modern web technologies, design patterns and enterprise level applications.",
    image:"/../public/web.png",
    tecnology_link: "",
  },
  {
    id: nanoid(8),
    skill: "JAVASCRIPT",
    description : "I have been working with javascript since 2020 and have knowledge of the DOM , the single-threaded nature of javascript , and the event loop.",
    image:"/../public/js.png",
    tecnology_link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",

  },
  {
    id: nanoid(8),
    skill: "REACT",
    description : "I have been working with react since the end of 2020, I have experience in contexts, effects, lazy loading, memorization and performance.",
    image:"/../public/react.png",
    tecnology_link: "https://reactjs.org/",

  },
  {
    id: nanoid(8),
    skill: "NODE JS",
    description : "I have experience in design patterns, http servers, performance and concurrency.",
    image:"/../public/nodejs.png",
    tecnology_link: "https://nodejs.org/",

  },
  {
    id: nanoid(8),
    skill: "Mongo DB",
    description : "Working with Mongo since 2020.",
    image:"/../public/mongodb.png",
    tecnology_link: "https://www.mongodb.com/",

  },
  {
    id: nanoid(8),
    skill: "NEXT JS",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/nextjs.png",
    tecnology_link: "https://nextjs.org/",

  }
  ,
  {
    id: nanoid(8),
    skill: "TYPESCRIPT",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/typescript.png",
    tecnology_link: "https://www.typescriptlang.org/d",

  }
  ,
  {
    id: nanoid(8),
    skill: "DOCKER",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/docker.png",
    tecnology_link: "https://www.docker.com/sq",

  }
  ,
  {
    id: nanoid(8),
    skill: "SQL",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/sql.png",
    tecnology_link: "https://www.google.com/search?q=sql",

  }
  ,
  {
    id: nanoid(8),
    skill: "K8S",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/k8s.png",
    tecnology_link: "https://kubernetes.io/",

  }
  ,
  {
    id: nanoid(8),
    skill: "MICROSERVICES",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/microservices.png",
    tecnology_link: "https://www.google.com/search?q=MICROSERVICES",

  }
  ,
  {
    id: nanoid(8),
    skill: "Express",
    description : `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Delectus esse commodi deserunt vitae, 
    vero quasi! Veniam quaerat tenetur pariatur doloribus.`,
    image:"/../public/express.png",
    tecnology_link: "https://expressjs.com/",

  }
];

export const SkillsMain : FC = () => {



  return (
    <div className={styles.skills_main_container}>
      <h3 className={styles.skills_title}>My Skills</h3>
      <div className={styles.skills_list}>
        
        {
          skills.map(data=>(
            <div key={data.id} className={styles.skill_item}>
              <Image onClick={()=>window.open(data.tecnology_link)} className={styles.image} src={data.image} width="100%" height="100%"/>
              <h5 className={styles.skill_title}>{data.skill}</h5>
              <p className={styles.skill_description}>{data.description}</p>
            </div>

          ))
        }

      </div>
    </div>
  )
}
