import React, { useState } from "react";
import cn from 'clsx';

import Avatar from './components/Avatar'
import PersonAction from './components/PersonAction'
import Name from './components/Name'
import Info from './components/Info'
import MenuButton from './components/MenuButton'

import AvatarImage from '../../assets/avatar.jpg'

import styles from './PersonPage.module.pcss';

type ActionType = 'actions' | 'friends' | 'subscriptions';

const PersonPage = (): React.ReactElement => {

  const [contentType, setContentType] = useState<ActionType>('actions');
  // localStorage.setItem('login', 'vasya');
  // localStorage.setItem('password', '123456');
  const handleClickActionButton = (actionType: ActionType) => () => setContentType(actionType);

  return(
      <div className={styles.container}>
          <div className={styles.actions}>
              <div className={styles.actions__wrapper}>
                  <div className={styles.actions__avatar}>
                      <Avatar src={AvatarImage} alt="avatar" />
                  </div>
                  <div className={styles.actions__menu} >
                      <ul>
                          <li>
                              <MenuButton
                                  name={'first'}
                                  text={'Действия'}
                                  onClick={handleClickActionButton('actions')}
                              />
                          </li>
                          <li>
                              <MenuButton
                                  name={'second'}
                                  text={'Друзья'}
                                  onClick={handleClickActionButton('friends')}
                              />
                          </li>
                          <li>
                              <MenuButton
                                  name={'thrid'}
                                  text={'Подписки'}
                                  onClick={handleClickActionButton('subscriptions')}
                              />
                          </li>
                      </ul>
                  </div>

                  <div className={styles.actions__container}>
                    {contentType === 'actions' && <PersonAction />}
                    {contentType === 'friends' && <Info subject={'Город'} info={'Ижевск'} />}
                    {contentType === 'subscriptions' && <Info subject={'Город'} info={'Ижевск. Подписки'} />}
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
