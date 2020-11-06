import React from 'react';

import styles from './PersonAction.module.pcss';

import PersonButton from '../PersonButton'


const PersonAction = ():React.ReactElement => {

    return(
        <ul className={styles.person__action}>
            <li>
                <PersonButton name={'sendMessage'} text={'Написать сообщение'} />
            </li>
            <li>
                <PersonButton name={'like'} text={'Поставить лайк'} />
            </li>
            <li>
                <PersonButton name={'addToFriends'} text={'Добавить в друзья'} />
            </li>
            <li>
                <PersonButton name={'ban'} text={'Заблокировать пользователя'} />
            </li>
        </ul>
    )
};

export default PersonAction;