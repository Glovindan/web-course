import React from 'react';

import styles from './ActionButton.module.pcss';

type ActionButtonProps = {
    name: string;
    text: string;
}

const ActionButton = (props: ActionButtonProps):React.ReactElement => {
    
    const {name, text} = props;

    return(
        <button
            className={styles.action__button} 
            type="button"
            name={name}
        >{text}</button>
    )
};

export default ActionButton;