import React, {useState} from "react"

import Avatar from '../../components/Avatar'
import MyAction from './components/MyAction'
import Name from './components/Name'
import MyInfo from './components/MyInfo'
import MenuButton from '../../components/MenuButton'

import { users } from '../../mocks/users.json';

import styles from "./MyPage.module.pcss"

type ActionType = 'actions' | 'friends' | 'subscriptions';

type MyPageProps = {
  avatar: string;
  firstName: string;
  secondName: string;
  status: string;
  headers: {
    name: string;
    text: string;
  }[]
};

const MAPPED_HEADERS_TYPE_TO_HEADERS: { [key: string]: string } = {
  city: 'Город',
  about: 'О себе',
  education: 'Образование',
};

const MyPage = (props: MyPageProps): React.ReactElement | null => {
  const { avatar, firstName, headers, secondName, status } = props;

  const [contentType, setContentType] = useState<ActionType>('actions');

  const handleClickActionButton = (actionType: ActionType) =>
    () => setContentType(actionType);

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
  ];

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <div className={styles.actions__wrapper}>
          <div className={styles.actions__avatar}>
            <Avatar src={avatar} alt="avatar"/>
          </div>
          <div className={styles.actions__menu}>
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
            {contentType === 'actions' && <MyAction/>}
            {contentType === 'friends' && <MyInfo subject={'test'} text={'text'}/>}
            {contentType === 'subscriptions' && <MyInfo subject={'test'} text={'text'}/>}
          </div>

        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.about__wrapper}>
          <div className={styles.about__name}>
            <Name
              firstName={firstName}
              secondName={secondName}
              status={status}
            />
            <hr/>
          </div>
          <div className={styles.about__info}>
            {headers.map((header: { name: string; text: string; }) =>
              <MyInfo
                subject={MAPPED_HEADERS_TYPE_TO_HEADERS[header.name]}
                text={header.text}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default MyPage;
