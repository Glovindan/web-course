import React from 'react';

import styles from './ActionButton.module.pcss';

type ActionButtonProps = {
    name: string;
    text: string;
    onClick: () => void;
}

const ActionButton = (props: ActionButtonProps): React.ReactElement => {

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

export default ActionButton;
