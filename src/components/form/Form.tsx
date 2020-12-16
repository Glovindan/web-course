import React, {useState} from 'react';

import styles from './Main.module.pcss';
import FormField from "../FormField"

type FormProps = {
  onChangeMessage: (message: string) => void;
}

const Form = (props: FormProps): React.ReactElement => {
  const { onChangeMessage } = props;

  const [login, setLogin] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleChangeLoginInput = (value: string) => {
    setLogin(value);
  };

  const handleChangePasswordInput = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (login !== '' && password !== '') {
      onChangeMessage('Авторизовался!');
      return;
    }
    onChangeMessage('Ошибка авторизации!');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit} >
        <FormField className={styles.login} inputClassName={styles.inputLogin} name="login" label="Логин" type="text" placeholder="Введите логин" value={login} onChange={handleChangeLoginInput} />
        <FormField className={styles.password} inputClassName={styles.inputPassword} name="inputForm" label="Пароль" type="password" placeholder="Введите пароль" value={password} onChange={handleChangePasswordInput} />
        <button className={styles.auth} type="submit" >Авторизоваться</button>
      </form>
    </div>
    
  );
};

export default Form;
