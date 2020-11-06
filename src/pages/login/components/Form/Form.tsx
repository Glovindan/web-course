import React, {useState} from 'react';

import styles from './Form.module.pcss';
import FormField from "../FormField"

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
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          placeholderClassName={styles.formPlaceholder}
          placeholderWrapperClassName={styles.formPlaceholderWrapper}
          name="login"
          type="text"
          placeholder="Логин"
          value={login}
          onChange={handleChangeLoginInput}
        />
        <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          placeholderClassName={styles.formPlaceholder}
          placeholderWrapperClassName={styles.formPlaceholderWrapper}
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
