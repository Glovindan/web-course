import React, {useState} from "react"

import AvatarImage from '../../assets/myAvatar.jpg'

import Avatar from '../../components/Avatar'
import MyAction from './components/MyAction'
import Name from './components/Name'
import MyInfo from './components/MyInfo'
import MenuButton from '../../components/MenuButton'

import styles from "./MyPage.module.pcss"

type ActionType = 'actions' | 'friends' | 'subscriptions';

const MyPage = (): React.ReactElement => {

  const [contentType, setContentType] = useState<ActionType>('actions');

  const handleClickActionButton = (actionType: ActionType) => () => setContentType(actionType);

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

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <div className={styles.actions__wrapper}>
          <div className={styles.actions__avatar}>
            <Avatar src={AvatarImage} alt="avatar"/>
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
            {contentType === 'friends' && <MyInfo subject={'test'}/>}
            {contentType === 'subscriptions' && <MyInfo subject={'test'}/>}
          </div>

        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.about__wrapper}>
          <div className={styles.about__name}>
            <Name firstName={'Sonic'} secondName={'The Hedgehog'}
                  status={'██▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓▓▓╬╬╬╬╬╬▓█ ███▓███████▓▓╬╬╬╬╬╬╬╬╬╬╬╬▓███▓▓▓▓█▓╬╬╬▓█ ███████▓█████▓▓╬╬╬╬╬╬╬╬▓███▓╬╬╬╬╬╬╬▓╬╬▓█ ████▓▓▓▓╬╬▓█████╬╬╬╬╬╬███▓╬╬╬╬╬╬╬╬╬╬╬╬╬█ ███▓▓▓▓╬╬╬╬╬╬▓██╬╬╬╬╬╬▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ ████▓▓▓╬╬╬╬╬╬╬▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ ███▓█▓███████▓▓███▓╬╬╬╬╬╬▓███████▓╬╬╬╬▓█ ████████████████▓█▓╬╬╬╬╬▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬█ ███▓▓▓▓▓▓▓╬╬▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ ████▓▓▓╬╬╬╬▓▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ ███▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ █████▓▓▓▓▓▓▓▓█▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ █████▓▓▓▓▓▓▓██▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ █████▓▓▓▓▓████▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ ████▓█▓▓▓▓██▓▓▓▓██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ ████▓▓███▓▓▓▓▓▓▓██▓╬╬╬╬╬╬╬╬╬╬╬╬█▓╬▓╬╬▓██ █████▓███▓▓▓▓▓▓▓▓████▓▓╬╬╬╬╬╬╬█▓╬╬╬╬╬▓██ █████▓▓█▓███▓▓▓████╬▓█▓▓╬╬╬▓▓█▓╬╬╬╬╬╬███ ██████▓██▓███████▓╬╬╬▓▓╬▓▓██▓╬╬╬╬╬╬╬▓███ ███████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬████ ███████▓▓██▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓████ ████████▓▓▓█████▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█████ █████████▓▓▓█▓▓▓▓▓███▓╬╬╬╬╬╬╬╬╬╬╬▓██████ ██████████▓▓▓█▓▓▓╬▓██╬╬╬╬╬╬╬╬╬╬╬▓███████ ███████████▓▓█▓▓▓▓███▓╬╬╬╬╬╬╬╬╬▓████████ ██████████████▓▓▓███▓▓╬╬╬╬╬╬╬╬██████████ ███████████████▓▓▓██▓▓╬╬╬╬╬╬▓███████████'}/>
            <hr/>
          </div>
          <div className={styles.about__info}>
            <MyInfo subject={'Город'}/>
            <MyInfo subject={'Образование'}/>
            <MyInfo subject={'О себе'}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MyPage;
