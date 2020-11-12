import React from "react"

import MenuButton from '../MenuButton'
import Logo from '../../assets/apple.png';
import Search from '../Search'

import styles from './Header.module.pcss'

const Header = (): React.ReactElement => {

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo}/>
        </div>
        <Search />
        <div className={styles.menu}>
          <MenuButton className={styles.menuButton} href="/" text="Main"/>
          <MenuButton className={styles.menuButton} href="/login" text="Login"/>
          <MenuButton className={styles.menuButton} href="/dsads" text="Bruh"/>
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
