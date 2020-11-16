import React from "react";
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "../Header"
import Footer from "../Footer";
import {PersonPage} from "../../pages/"
import {LoginPage} from "../../pages";
import {ErrorPage} from "../../pages";
import {MyPage} from "../../pages";

import {ROUTES} from "../../constants";

import styles from './App.module.pcss';

const App = (): React.ReactElement => {
  localStorage.setItem('login','vasya');
  localStorage.setItem('password','123');
  
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route
              exact={true}  
              path={ROUTES.MAIN_PAGE}
              component={PersonPage}
            />
            <Route path={ROUTES.LOGIN_PAGE} component={LoginPage} />
            <Route path={ROUTES.MY_PAGE} component={MyPage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default hot(App);
