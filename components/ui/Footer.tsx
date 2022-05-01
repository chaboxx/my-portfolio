import{ FC } from 'react';

import styles from "../../styles/components/ui/Footer.module.css";
export const Footer : FC= () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.year}>2022 .Si llegaste aqui , que tengas un buen dia {":)"}</p>
      <p className={styles.email}>Email: chaboxx159@gmail.com</p>
    </footer>
  )
}
