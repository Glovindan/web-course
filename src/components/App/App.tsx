import React from "react";
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "../Header"
import Footer from "../Footer";
import {LoginPage} from "../../pages";
import {ErrorPage} from "../../pages";

import {ROUTES} from "../../constants";

import styles from './App.module.pcss';

const App = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path={ROUTES.MAIN_PAGE}
            component={() => <div>MainPage</div>}
          />
          <Route path={ROUTES.LOGIN_PAGE} component={LoginPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default hot(App);
