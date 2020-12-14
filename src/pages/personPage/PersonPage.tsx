import React, { useState } from "react";

import Avatar from '../../components/Avatar'
import PersonAction from './components/PersonAction'
import Name from './components/Name'
import Info from './components/Info'
import MenuButton from '../../components/MenuButton'

import { users } from '../../mocks/users.json';

import styles from './PersonPage.module.pcss';

type ActionType = 'actions' | 'friends' | 'subscriptions';

const MAPPED_HEADERS_TYPE_TO_HEADERS: { [key: string]: string } = {
  city: 'Город',
  about: 'О себе',
  education: 'Образование',
};

const PersonPage = (): React.ReactElement => {

  const [contentType, setContentType] = useState<ActionType>('actions');

  const handleClickActionButton = (actionType: ActionType) => () => setContentType(actionType);
    
  const person = users[1];

  const data = [
    {
      name: 'first',
      text: 'Действия',
      onClick: handleClickActionButton('actions')
    },
    {
      name: 'second',
      text: 'Друзья',
      onClick: handleClickActionButton('friends')
    },
    {
      name: 'third',
      text: 'Подписки',
      onClick: handleClickActionButton('subscriptions')
    },
  ]

  return(
      <div className={styles.container}>
          <div className={styles.actions}>
              <div className={styles.actions__wrapper}>
                  <div className={styles.actions__avatar}>
                      <Avatar src={person.avatar} alt="avatar" />
                  </div>
                  <div className={styles.actions__menu} >
                      <ul className={styles.actions__ul}>
                        {data.map((el, idx) => (
                            <li className={styles.actions__li} key={idx}>
                                <MenuButton 
                                    name={el.name}
                                    text={el.text}
                                    onClick={el.onClick}
                                />
                            </li>
                        ))}
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
                      <Name 
                        firstName={person.firstName} 
                        secondName={person.secondName} 
                        status={person.status} />
                      <hr />
                  </div>
                  <div className={styles.about__info}>
                    {person.headers.map((header: { name: string; text: string; }) =>
                      <Info
                        subject={MAPPED_HEADERS_TYPE_TO_HEADERS[header.name]}
                        info={header.text}
                      />
                    )}
                  </div>
              </div>
          </div>
      </div>
  )
};

export default PersonPage;
