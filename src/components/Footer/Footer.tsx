import React from 'react'
import styles from './Footer.module.pcss'

const Footer = (): React.ReactElement => {
    return (
        <footer className={styles.wrapper}>
            <hr/>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.infoText}>"IT-courses"</div>
                    <div className={styles.infoText}>By UDSU</div>
                    <div className={styles.infoText}>2020</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;