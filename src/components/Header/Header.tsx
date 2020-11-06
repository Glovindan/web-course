import React from "react"

import MenuButton from '../MenuButton'

import Logo from '../../assets/apple.png';

import styles from './Header.module.pcss'

const Header = (): React.ReactElement => {

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo}/>
        </div>
        <div className={styles.menu}>
          <MenuButton className={styles.menuButton} href="/ref" text="Кнопка1"/>
          <MenuButton className={styles.menuButton} href="/sad" text="Кнопка2"/>
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
