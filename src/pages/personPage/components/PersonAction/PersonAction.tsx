import React from 'react';

import ActionButton from '../../../../components/ActionButton'

import styles from './PersonAction.module.pcss';

const data = [
  {
    name: 'sendMessage',
    text: 'Написать сообщение',
    onClick: () => console.log('clicked on button'),
  },
  {
    name: 'like',
    text: 'Поставить лайк',
    onClick: () => console.log('clicked on button'),
  },
  {
    name: 'addToFriends',
    text: 'Добавить в друзья',
    onClick: () => console.log('clicked on button'),
  },
  {
    name: 'ban',
    text: 'Заблокировать пользователя',
    onClick: () => console.log('clicked on button'),
  },
];

const PersonAction = ():React.ReactElement => {

    return (
        <ul className={styles.person__action}>
          {data.map((el, idx) => (
            <li key={idx}>
              <ActionButton 
                name={el.name} 
                text={el.text} 
                onClick={el.onClick} 
              />
            </li>
          ))}
        </ul>
    )
};

export default PersonAction;
