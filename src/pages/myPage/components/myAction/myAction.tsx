import React from 'react';

import ActionButton from '../../../../components/ActionButton'

import styles from './MyAction.module.pcss';
import LinkAsButton from "../../../../components/LinkAsButton";
import {ROUTES} from "../../../../constants";

const data = [
  {
    text: 'Поменять аватарку',
    href: '#',
  },
  {
    text: 'Личные сообщения',
    href: ROUTES.MESSAGES_PAGE,
  },
  {
    text: 'Удалить страницу',
    href: '#',
  },
];

const myAction = ():React.ReactElement => {

    return (
        <ul className={styles.person__action}>
          {data.map((el, idx) => (
            <li className={styles.actionButton} key={idx}>
              <LinkAsButton to={el.href} className={styles.action__button}>
                {el.text}
              </LinkAsButton>
            </li>
          ))}
        </ul>
    )
};

export default myAction;
