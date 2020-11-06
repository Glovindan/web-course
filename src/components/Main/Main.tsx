import React from "react";
import styles from './Main.module.pcss';

type MainProps = {
  message: string;
}

const Main = (props: MainProps): React.ReactElement => {
  const {message} = props;

  return <div className={styles.main}>{message}</div>;
};

export default Main;
