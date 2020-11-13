import React from "react"
import { NavLink } from "react-router-dom"

import MenuButton from '../MenuButton'
import Logo from '../../assets/apple.png';
import Search from '../Search'

import styles from './Header.module.pcss'

const Header = (): React.ReactElement => {

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <div className={styles.logo}>
            <NavLink to={"/"}>
              <img src={Logo}/>
            </NavLink>
          </div>
          <Search />
        </div>
        <div className={styles.menu}>
          <MenuButton className={styles.menuButton} href="/login" text="Login"/>
          <MenuButton className={styles.menuButton} href="/dsads" text="Bruh"/>
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
