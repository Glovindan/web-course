import React from "react";

import styles from './ErrorPage.module.pcss';

import Hole from '../../assets/hole.png'
import Hole1 from '../../assets/hole1.png'
const ErrorPage = (): React.ReactElement => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={Hole} />
          404<br/>Page Not Found
          <img src={Hole1} />
        </div>
      </div>
  )
};

export default ErrorPage;
