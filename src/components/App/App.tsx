import React from "react";
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";

import Header from "../Header"
import Footer from "../Footer";
import CustomRoute from "../CustomRoute";
import {
  MyPage,
  PersonPage,
  LoginPage,
  ErrorPage,
  MessagesPage,
  DialogPage,
  RegistrationPage
} from "../../pages";

import {ROUTES} from "../../constants";

import styles from './App.module.pcss';

const App = (): React.ReactElement => {

  const isUserAuthorized = Boolean(localStorage.getItem('logged'));
  const myPageRoute = Number(localStorage.getItem('id'));

  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <CustomRoute
            isPublic={false}
            accessed={isUserAuthorized}
            path={"/id" + myPageRoute}
            component={MyPage}
          />
          <CustomRoute
            isPublic={false}
            accessed={isUserAuthorized}
            exact={true}
            path={ROUTES.MAIN_PAGE}
            component={PersonPage}
          />
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
