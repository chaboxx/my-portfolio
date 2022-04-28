
import type { NextPage } from 'next'
import { MainBanner } from '../components/Home/MainBanner';

import { Layout } from '../layouts/Layout';

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Rodrigo Cueva Pastor </>">
      <section className={styles.home_container}>
        <MainBanner/>
      </section>
    </Layout>
  )
}

export default Home;
