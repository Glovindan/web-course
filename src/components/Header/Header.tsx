import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import HeaderMenuButton from '../HeaderMenuButton'

import Logo from '../../assets/apple.png';
import Search from '../Search'

import styles from './Header.module.pcss'
import {ROUTES} from "../../constants";

type HeaderProps = {
  user?: {
    id: string | null;
  };
}

const Header = (props: HeaderProps): React.ReactElement => {
  const { user } = props;

  const isLoggedIn = Boolean(user);

  const logout = () => {
    localStorage.removeItem('user');

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
          {isLoggedIn && (
            <div className={styles.menu}>
              <HeaderMenuButton className={styles.menuButton} href='#' onClick={logout} text="Logout"/>
              {user && <HeaderMenuButton className={styles.menuButton} href={"/id" + user.id} text="MyPage"/>}
            </div>
          )}
          {!isLoggedIn &&  (
            <div className={styles.menu}>
              <HeaderMenuButton className={styles.menuButton} href={ROUTES.LOGIN_PAGE} text="Login"/>
              <HeaderMenuButton className={styles.menuButton} href={ROUTES.REGISTRATION_PAGE} text="Registration"/>
              <HeaderMenuButton className={styles.menuButton} href={ROUTES.MAIN_PAGE} text="Main"/>
            </div>
          )}
        </div>
      </div>
      <hr/>
    </header>
  );
};

export default Header;
