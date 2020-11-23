import React, {useState} from 'react';

import FormField from "../FormField"

import styles from './Form.module.pcss';

const Form = (): React.ReactElement => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleChangeInput = (value: string, name: string) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'surname':
        setSurname(value);
          break;
      case 'login':
        setLogin(value);    
        break;
      case 'password':
        setPassword(value);
        break;          
      case 'repeatPassword':
        setRepeatPassword(value);
        break;
      default:
        break;
    }
    
  };

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    ev.stopPropagation();

    //Здесь должны быть запросы в бд
    if(!localStorage.getItem(login)) {
      if(login && name && surname && password) {
        if(password === repeatPassword) {
          localStorage.setItem(login, JSON.stringify({password, name, surname}));//Запись данных о пользователе в "бд"
          
          localStorage.setItem('logged', 'logged');
          localStorage.setItem('login', login);
          localStorage.setItem('password', password);
          window.location.href = '/';
        } else {
          alert('Пароли не совпадают!');
        }
      } else {
        alert('Введите все данные!');
      }
    } else {
      alert('Такой логин уже зарегистрирован')
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleSubmit}>
      <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          name="name"
          type="text"
          placeholder="Имя"
          value={name}
          onChange={handleChangeInput}
        />
        <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          name="surname"
          type="text"
          placeholder="Фамилия"
          value={surname}
          onChange={handleChangeInput}
        />
        <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          name="login"
          type="text"
          placeholder="Логин"
          value={login}
          onChange={handleChangeInput}
        />
        <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          name="password"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handleChangeInput}/>
        <FormField
          className={styles.form}
          inputClassName={styles.formInput}
          name="repeatPassword"
          type="password"
          placeholder="Повторите пароль"
          value={repeatPassword}
          onChange={handleChangeInput}/>
        <button className={styles.auth} type="submit">Зарегистрироваться</button>
      </form>
    </div>

  );
};

export default Form;
