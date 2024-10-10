import React from 'react';
import Link from 'next/link';
import styles from './css/nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Início</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="../" className={styles.navLink}>Sobre</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/fotos" className={styles.navLink}>Fotos</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/sobre" className={styles.navLink}>Preços</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/servicos" className={styles.navLink}>Serviços</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contato" className={styles.navLink}>Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
