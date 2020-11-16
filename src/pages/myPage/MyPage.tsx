import React, { useState } from "react"

import Avatar from './components/Avatar'
import MyAction from './components/myAction'
import Name from './components/Name'
import Info from './components/Info'
import MenuButton from './components/MenuButton'

import AvatarImage from '../../assets/myAvatar.jpg'

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

    return(
        <div className={styles.container}>
            <div className={styles.actions}>
                <div className={styles.actions__wrapper}>
                    <div className={styles.actions__avatar}>
                        <Avatar src={AvatarImage} alt="avatar" />
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
                        {contentType === 'actions' && <MyAction />}
                        {contentType === 'friends' && <Info subject={'Город'} />}
                        {contentType === 'subscriptions' && <Info subject={'Город'} />}
                    </div>
  
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.about__wrapper}>
                    <div className={styles.about__name}>
                        <Name firstName={'Sonic'} secondName={'The Hedgehog'} status={'██▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓▓▓╬╬╬╬╬╬▓█ ███▓███████▓▓╬╬╬╬╬╬╬╬╬╬╬╬▓███▓▓▓▓█▓╬╬╬▓█ ███████▓█████▓▓╬╬╬╬╬╬╬╬▓███▓╬╬╬╬╬╬╬▓╬╬▓█ ████▓▓▓▓╬╬▓█████╬╬╬╬╬╬███▓╬╬╬╬╬╬╬╬╬╬╬╬╬█ ███▓▓▓▓╬╬╬╬╬╬▓██╬╬╬╬╬╬▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ ████▓▓▓╬╬╬╬╬╬╬▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ ███▓█▓███████▓▓███▓╬╬╬╬╬╬▓███████▓╬╬╬╬▓█ ████████████████▓█▓╬╬╬╬╬▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬█ ███▓▓▓▓▓▓▓╬╬▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ ████▓▓▓╬╬╬╬▓▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ ███▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ █████▓▓▓▓▓▓▓▓█▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ █████▓▓▓▓▓▓▓██▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ █████▓▓▓▓▓████▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ ████▓█▓▓▓▓██▓▓▓▓██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ ████▓▓███▓▓▓▓▓▓▓██▓╬╬╬╬╬╬╬╬╬╬╬╬█▓╬▓╬╬▓██ █████▓███▓▓▓▓▓▓▓▓████▓▓╬╬╬╬╬╬╬█▓╬╬╬╬╬▓██ █████▓▓█▓███▓▓▓████╬▓█▓▓╬╬╬▓▓█▓╬╬╬╬╬╬███ ██████▓██▓███████▓╬╬╬▓▓╬▓▓██▓╬╬╬╬╬╬╬▓███ ███████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬████ ███████▓▓██▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓████ ████████▓▓▓█████▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█████ █████████▓▓▓█▓▓▓▓▓███▓╬╬╬╬╬╬╬╬╬╬╬▓██████ ██████████▓▓▓█▓▓▓╬▓██╬╬╬╬╬╬╬╬╬╬╬▓███████ ███████████▓▓█▓▓▓▓███▓╬╬╬╬╬╬╬╬╬▓████████ ██████████████▓▓▓███▓▓╬╬╬╬╬╬╬╬██████████ ███████████████▓▓▓██▓▓╬╬╬╬╬╬▓███████████'} />
                        <hr />
                    </div>
                    <div className={styles.about__info}>
                        <Info subject={'Город'} />
                        <Info subject={'Образование'}/>
                        <Info subject={'О себе'} />
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default MyPage;