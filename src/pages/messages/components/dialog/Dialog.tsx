import React from "react";

import styles from "./Dialog.module.pcss";

type DialogProps = {
    avatarPicture: string;
    personName: string;
    lastMessage: string;
    onChange?: () => void;
}

const Dialog = (props: DialogProps):React.ReactElement => {
    
    const {avatarPicture, personName, lastMessage, onChange} = props;
    
    return(
        <div className={styles.container} onClick={onChange}>
            <div className={styles.avatar}>
                <img className={styles.image} src={avatarPicture} />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>
                    <span>
                        {personName}
                    </span>
                </div>
                <div className={styles.lastMessage}>
                    <span>
                        {lastMessage}
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Dialog;