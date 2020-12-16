import { string } from 'prop-types';
import React, {useState} from 'react';

import FormField from "../../../../components/FormField"

import { users } from '../../../../mocks/users.json';

import styles from './Form.module.pcss';

const Form = (): React.ReactElement => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLoginInput = (value: string) => {
    setLogin(value);
  };

  const handleChangePasswordInput = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    ev.stopPropagation();

    //Здесь должны быть запросы в бд
    if(login && password) {
      const user = users.find((user: { login: string, id: number}) =>
        user.login === login
      );

      if (user) {
        if (user.password === password) {
          localStorage.setItem('user', JSON.stringify(user));

          window.location.href = `/id${user.id}`;
        }
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          name="login"
          type="text"
          placeholder="Логин"
          value={login}
          onChange={handleChangeLoginInput}
        />
        <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          name="inputForm"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handleChangePasswordInput}/>
        <button className={styles.auth} type="submit">Авторизоваться</button>
      </form>
    </div>

  );
};

export default Form;
