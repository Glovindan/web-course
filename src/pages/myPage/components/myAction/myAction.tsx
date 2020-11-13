import React from 'react';

import PersonButton from '../PersonButton'

import styles from './myAction.module.pcss';

const data = [
  {
    name: 'changeAvatar',
    text: 'Поменять аватарку',
    onClick: () => console.log('clicked on button'),
  },
  {
    name: 'myMessage',
    text: 'Личные сообщения',
    onClick: () => console.log('clicked on button'),
  },
  {
    name: 'deletePage',
    text: 'Удалить страницу',
    onClick: () => console.log('clicked on button'),
  },
];

const myAction = ():React.ReactElement => {

    return (
        <ul className={styles.person__action}>
          {data.map((el, idx) => (
            <li key={idx}>
              <PersonButton 
                name={el.name} 
                text={el.text} 
                onClick={el.onClick} 
              />
            </li>
          ))}
        </ul>
    )
};

export default myAction;
