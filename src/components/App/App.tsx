import React from "react";
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";

import Header from "../Header"
import Footer from "../Footer";
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

  const isUserAuthorized = localStorage.getItem('logged');

  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header/>
        <Switch>
          {isUserAuthorized &&
            <Route
              exact={true}
              path={ROUTES.MAIN_PAGE}
              component={PersonPage}
            />
          }
          {isUserAuthorized &&
            <Route
              path={ROUTES.MY_PAGE}
              component={MyPage}
            />
          }
          {isUserAuthorized &&
            <Route
              path={ROUTES.MESSAGES_PAGE}
              component={MessagesPage}
            />
          }
          {isUserAuthorized &&
            <Route
              path={ROUTES.DIALOG_PAGE}
              component={DialogPage}
            />
          }
          {!isUserAuthorized &&
            <Route
              path={ROUTES.LOGIN_PAGE}
              component={LoginPage}
            />
          }
          {!isUserAuthorized &&
            <Route
              path={ROUTES.REGISTRATION_PAGE}
              component={RegistrationPage}
            />
          }
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
