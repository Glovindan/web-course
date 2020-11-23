import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import HeaderMenuButton from '../HeaderMenuButton'

import Logo from '../../assets/apple.png';
import Search from '../Search'

import styles from './Header.module.pcss'


const Header = (): React.ReactElement => {
  const contentType = localStorage.getItem('logged');

  const logout = () => {
    localStorage.removeItem('logged');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    window.location.href = '/login'
  };

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

        <div>
          {(contentType === 'logged') && <div className={styles.menu}>
                                      <HeaderMenuButton className={styles.menuButton} href='#' onClick={logout} text="Logout"/>
                                      <HeaderMenuButton className={styles.menuButton} href="/id0" text="MyPage"/>
                                      </div>}
          {contentType === null &&  <div className={styles.menu}>
                                      <HeaderMenuButton className={styles.menuButton} href="/login" text="Login"/>
                                      <HeaderMenuButton className={styles.menuButton} href="/registration" text="Registration"/>
                                      <HeaderMenuButton className={styles.menuButton} href="/" text="Main"/>
                                      </div>}
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
