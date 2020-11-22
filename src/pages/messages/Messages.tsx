import React from "react";
import { NavLink } from "react-router-dom"

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
        <ul className={styles.list}>
          {dialogues.map((el, idx) => (
            <li className={styles.dialog} key={idx}>
              <NavLink to={"/dialog"}>
                <DialogList
                  avatarPicture={el.avatarPicture}
                  personName={el.personName}
                  lastMessage={el.lastMessage}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Messages;
