import React from 'react';

import styles from './Name.module.pcss';

type NameProps = {
    firstName: string;
    secondName: string;
    status: string;
}

const Name = (props: NameProps):React.ReactElement => {
    
    const {firstName, secondName, status} = props;
    const fullName = firstName + " " + secondName;

    return(
        <div className={styles.container}>
            <h1 className={styles.name}>
                {fullName}
            </h1>
            <span className={styles.status}>
                {status}
            </span>
        </div>
    )
};

export default Name;