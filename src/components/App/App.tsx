import React from "react";
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "../Header"
import Footer from "../Footer";
import {PersonPage} from "../../pages/"
import {LoginPage} from "../../pages";
import {ErrorPage} from "../../pages";

import {ROUTES} from "../../constants";

import styles from './App.module.pcss';

const App = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      
      <div className={styles.mainContainer}>
        <BrowserRouter>
          <Switch>
            <Route
              exact={true}
              path={ROUTES.MAIN_PAGE}
              component={PersonPage}
            />
            <Route path={ROUTES.LOGIN_PAGE} component={LoginPage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>

      <div className={styles.footerContainer}>
        <Footer/>
      </div>
    </div>
  );
};

export default hot(App);
