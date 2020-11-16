import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import LogoutButton from "../LogoutButton";
import MenuButton from '../MenuButton'
import Logo from '../../assets/apple.png';
import Search from '../Search'

import styles from './Header.module.pcss'
import { container } from "../Search/Search.module.pcss";
import { render } from "react-dom";


const Header = (): React.ReactElement => {
  const [contentType, setContentType] = useState(localStorage.getItem('logged'));
  const logout = () => {
    localStorage.setItem('logged','unlogged');
  }
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
          {contentType === 'logged' && <div className={styles.menu}>
                                      <LogoutButton className={styles.menuButton} onClick={logout} text="Logout"/>
                                      <MenuButton className={styles.menuButton} href="/id0" text="MyPage"/>
                                      </div>}
          {contentType === 'unlogged' &&  <div className={styles.menu}>
                                      <MenuButton className={styles.menuButton} href="/login" text="Login"/>
                                      <MenuButton className={styles.menuButton} href="/" text="Main"/>
                                      </div>}
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
