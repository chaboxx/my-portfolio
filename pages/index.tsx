
import type { NextPage } from 'next';

import { Layout } from '../layouts/Layout';

import { MainBanner } from '../components/Home/MainBanner';
import { SkillsMain } from '../components/Home/SkillsMain';
import { HistoryMain } from '../components/Home/HistoryMain';
import { ProyectsMain } from '../components/Home/ProyectsMain';
import { ContactMain } from '../components/Home/ContactMain';
import { Footer } from '../components/ui/Footer';


import styles from "../styles/Home.module.css";



const Home: NextPage = () => {
  return (
    <Layout title="Rodrigo Cueva Pastor </>">
      <section className={styles.home_container}>
        
        <MainBanner/>
        <div className={styles.home_info_projects_container}>
          <div className={styles.info_project_container}>
            <p className={styles.info_project_value}>10 +</p>
            <p className={styles.info_project_label}>Years Experience</p>
          </div>
          
          <div className={styles.info_project_container}>
            <p className={styles.info_project_value}>143</p>
            <p className={styles.info_project_label}>Completed Projects</p>
          </div>
          
          <div className={styles.info_project_container}>
            <p className={styles.info_project_value}>114</p>
            <p className={styles.info_project_label}>Happy Customers</p>
          </div>
          
          <div className={styles.info_project_container}>
            <p className={styles.info_project_value}>20 +</p>
            <p className={styles.info_project_label}>Honors and Awards</p>
          </div>
        </div>
        <SkillsMain />
        <HistoryMain/>
        <ProyectsMain />
        <ContactMain />
        <Footer />
      </section>
    </Layout>
  )
}

export default Home;
