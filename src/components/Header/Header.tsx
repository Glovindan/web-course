import React from "react"
import { NavLink } from "react-router-dom"

import HeaderMenuButton from '../HeaderMenuButton'
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
          <HeaderMenuButton className={styles.menuButton} href="/login" text="Login"/>
          <HeaderMenuButton className={styles.menuButton} href="/id0" text="MyPage"/>
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
