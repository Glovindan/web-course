import React from "react";
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";

import Header from "../Header"
import Footer from "../Footer";
import CustomRoute from "../CustomRoute";
import {
  LoginPage,
  ErrorPage,
  MessagesPage,
  DialogPage,
  RegistrationPage,
  CommonPage
} from "../../pages";

import {ROUTES} from "../../constants";

import styles from './App.module.pcss';

import '../../assets/avatar.jpg';
import '../../assets/myAvatar.jpg';

const App = (): React.ReactElement => {

  const user = localStorage.getItem('user');

  const isUserAuthorized = Boolean(user);

  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header user={isUserAuthorized ? JSON.parse(user || '{}') : undefined}/>
        <Switch>
          <CustomRoute
            isPublic={false}
            accessed={isUserAuthorized}
            path={ROUTES.MESSAGES_PAGE}
            component={MessagesPage}
          />
          <CustomRoute
            isPublic={false}
            accessed={isUserAuthorized}
            path={ROUTES.DIALOG_PAGE}
            component={DialogPage}
          />
          <CustomRoute
            isPublic={true}
            accessed={!isUserAuthorized}
            path={ROUTES.LOGIN_PAGE}
            component={LoginPage}
          />
          <CustomRoute
            isPublic={true}
            accessed={!isUserAuthorized}
            path={ROUTES.REGISTRATION_PAGE}
            component={RegistrationPage}
          />
          <CustomRoute
            isPublic={false}
            accessed={isUserAuthorized}
            path={ROUTES.USER_PAGE}
            component={CommonPage}
          />
          {!isUserAuthorized &&
            <Redirect
              to={ROUTES.LOGIN_PAGE}
              from={ROUTES.MAIN_PAGE}
            />
          }
          {!isUserAuthorized &&
            <Redirect
              to={ROUTES.LOGIN_PAGE}
              from={ROUTES.MY_PAGE}
            />
          }
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default hot(App);
