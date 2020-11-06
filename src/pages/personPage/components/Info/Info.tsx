import React from 'react';

import styles from './Info.module.pcss';

type InfoProps = {
    subject: string;
    info: string;
}

const Info = (props: InfoProps):React.ReactElement => {
    
    const {subject, info} = props;

    return(
        <div className={styles.container}>
            <span className={styles.subject}>
                {subject}:
            </span>
            <span className={styles.info}>
                {info}
            </span>
        </div>
    )
};

export default Info;