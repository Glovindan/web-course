import React from 'react';

import styles from './ActionMenuButton.module.pcss';

type ActionMenuButtonProps = {
    name: string;
    text: string;
    onClick: () => void;
}

const ActionMenuButton = (props: ActionMenuButtonProps):React.ReactElement => {
    
    const {name, text, onClick} = props;

    return(
        <button
            className={styles.action__button} 
            type="button"
            name={name}
            onClick={onClick}
        >{text}</button>
    )
};

export default ActionMenuButton;