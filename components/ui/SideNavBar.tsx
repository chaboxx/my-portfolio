import { FC } from 'react';

import Image from "next/image";

import { BsCheckLg } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { AiFillLinkedin ,AiOutlineGithub ,AiOutlineTwitter} from "react-icons/ai";

import styles from "../../styles/components/ui/SideNavBar.module.css";

export const SideNavBar : FC = () => {
  return (
    <aside className={styles.side_navbar_container}>
      <div className={styles.main_foto_container}>
        <div className={styles.image}>
          <Image src="/../public/miFoto1_1.jpg" width="90px" height="90px"/>
          
        </div>
        <h3 className={styles.name}>Rodrigo Cueva Pastor</h3>
        <p className={styles.title}>Full Stack Software Developer</p>
        <p className={styles.subtitle}>Learning all the time</p>
      </div>

      
      <div className={styles.information_container}>
        <div className={styles.general_info_container}>
          <ul className={styles.general_info_list}>
            <li className={styles.list_general_info_item}>
              <p className={styles.label_info}>Residence:</p>
              <p className={styles.value_info}>Perú</p>
            </li>
            <li className={styles.list_general_info_item}>
              <p className={styles.label_info}>City:</p>
              <p className={styles.value_info}>Lima</p>
            </li>
            <li className={styles.list_general_info_item}>
              <p className={styles.label_info}>Age:</p>
              <p className={styles.value_info}>23</p>
            </li>
          </ul>
            
        </div>

        <div className={styles.languages_container}>
          <h6 className={styles.languages_title}>Languages</h6>
          <div className={styles.languages_description}>
            <div className={styles.language}>
              <div className={styles.canva_language}>
                <p>100%</p>
              </div>
              <h6 className={styles.canva_label}>French</h6>
            </div>
            <div className={styles.language}>
              <div className={styles.canva_language}>
                <p>90%</p>
              </div>
              <h6 className={styles.canva_label}>English</h6>
            </div>
            <div className={styles.language}>
              <div className={styles.canva_language}>
                <p>70%</p>
              </div>
              <h6 className={styles.canva_label}>Spanish</h6>
            </div>
          </div>
        </div>

        <div className={styles.coding_container}>
          <h6 className={styles.coding_title}>Coding</h6>
          <div className={styles.skills_container}>
            <ul className={styles.skills_list}>
              <li className={styles.skill_list_item}>
                <div className={styles.skill}>
                  <p className={styles.skill_label}>html</p>
                  <p className={styles.skill_value}>90 %</p>
                </div>
                <div className={styles.skill_bar}></div>
              </li>
              
              <li className={styles.skill_list_item}>
                <div className={styles.skill}>
                  <p className={styles.skill_label}>CSS</p>
                  <p className={styles.skill_value}>95 %</p>
                </div>
                <div className={styles.skill_bar}></div>
              </li>
              
              <li className={styles.skill_list_item}>
                <div className={styles.skill}>
                  <p className={styles.skill_label}>JS</p>
                  <p className={styles.skill_value}>75 %</p>
                </div>
                <div className={styles.skill_bar}></div>
              </li>
              
              <li className={styles.skill_list_item}>
                <div className={styles.skill}>
                  <p className={styles.skill_label}>PHP</p>
                  <p className={styles.skill_value}>65 %</p>
                </div>
                <div className={styles.skill_bar}></div>
              </li>
              
              <li className={styles.skill_list_item}>
                <div className={styles.skill}>
                  <p className={styles.skill_label}>WordPress</p>
                  <p className={styles.skill_value}>85 %</p>
                </div>
                <div className={styles.skill_bar}></div>
              </li>

            </ul>
          </div>
        </div>

        <div className={styles.knowledge_container}>
          <h6 className={styles.knowledge_title}>Knowledge</h6>
          <ul className={styles.knowledge_list}>
            <li className={styles.knowledge_item}>
              <BsCheckLg className={styles.check_icon}/>
              <p className={styles.knowledge_value}>Bootstrap, Materialize</p>
            </li>
            <li className={styles.knowledge_item}>
              <BsCheckLg className={styles.check_icon}/>
              <p className={styles.knowledge_value}>Stylus, Sass, Less</p>
            </li>
            <li className={styles.knowledge_item}>
              <BsCheckLg className={styles.check_icon}/>
              <p className={styles.knowledge_value}>Gulp, Webpack, Grunt</p>
            </li>

            <li className={styles.knowledge_item}>
              <BsCheckLg className={styles.check_icon}/>
              <p className={styles.knowledge_value}>GIT knowledge</p>
            </li>
          </ul>
        </div>

        <div className={styles.download_cv_container}>
          <h6>DOWNLOAD CV </h6>
          <FaDownload/>
        </div>
      </div>
      <div className={styles.footer}>
        <ul>
          <li>
            <AiFillLinkedin className={styles.footer_icon}/>
          </li>
          <li>
            <AiOutlineGithub className={styles.footer_icon}/>
          </li>
          <li>
            <AiOutlineTwitter className={styles.footer_icon}/>
          </li>
        </ul>
      </div>
    </aside>
  )
}
