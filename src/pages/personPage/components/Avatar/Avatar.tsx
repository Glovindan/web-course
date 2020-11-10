import React from 'react';

import styles from './Avatar.module.pcss';

type AvatarProps = {
    src: string;
    alt: string;
}

const Avatar = (props: AvatarProps): React.ReactElement => {

    const {src, alt} = props;

    return(
        <img
            className={styles.avatar}
            src={src}
            alt={alt}
        />
    )
};

export default Avatar;
