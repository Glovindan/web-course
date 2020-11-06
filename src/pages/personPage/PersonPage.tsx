import React, { useState } from "react";

import styles from './PersonPage.module.pcss';

import AvatarImage from '../../assets/avatar.jpg'

import Avatar from './components/Avatar'
import PersonAction from './components/PersonAction'
import Name from './components/Name'
import Info from './components/Info'
import MenuButton from './components/MenuButton'

const PersonPage = ():React.ReactElement => {

    const [container, setContainer] = useState(<PersonAction />);

    return(
        <div className={styles.container}>
            <div className={styles.actions}>
                <div className={styles.actions__wrapper}>
                    <div className={styles.actions__avatar}>
                        <Avatar src={AvatarImage} alt="avatar" />
                    </div>
                    <div className={styles.actions__menu}>
                        <ul>
                            <li>
                                <MenuButton 
                                    name={'first'} 
                                    text={'Действия'} 
                                    onClick={() => setContainer(<PersonAction />)} 
                                />
                            </li>
                            <li>
                                <MenuButton 
                                    name={'second'} 
                                    text={'Друзья'} 
                                    onClick={() => setContainer(<Info subject={'Город'} info={'Ижевск'}/>)} 
                                />
                            </li>
                            <li>
                                <MenuButton 
                                    name={'thrid'} 
                                    text={'Подписки'} 
                                    onClick={() => setContainer(<Info subject={'Город'} info={'Ижевск'}/>)} 
                                />
                            </li>
                        </ul>
                    </div>

                    <div className={styles.actions__container}>
                        {container}
                    </div>

                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.about__wrapper}>
                    <div className={styles.about__name}>
                        <Name firstName={'Garfield'} secondName={'The Cat'} status={'Hate mondays'} />
                    </div>
                    <div className={styles.about__info}>
                        <Info subject={'Город'} info={'Ижевск'}/>
                        <Info subject={'О себе'} info={'Простой рыжий кот 🐈'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PersonPage;