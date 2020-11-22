import { flowRight } from "lodash";
import React from "react";
import { Link } from "react-router-dom"

import messageAvatar from "../../assets/messageAvatar.png"

import DialogList from "./components/dialogList"

import styles from "./Messages.module.pcss"

const dialogues = [
  {
    avatarPicture: messageAvatar,
    personName: 'Garfield',
    lastMessage: 'Привет, друг ! ! !'
  },
  {
    avatarPicture: messageAvatar,
    personName: '[Object object]',
    lastMessage: '[Object object]'
  },
  {
    avatarPicture: messageAvatar,
    personName: 'Sonic',
    lastMessage: 'So fa$t'
  },
]

const Messages = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {dialogues.map((el, idx) => (
            <li className={styles.li} key={idx}>
              <Link to={{
                  pathname: "/dialog",
                  state: {userAvatarImage: el.avatarPicture,
                          userName: el.personName,
                  }
                }}
              >
                <DialogList
                  avatarPicture={el.avatarPicture}
                  personName={el.personName}
                  lastMessage={el.lastMessage}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Messages;
