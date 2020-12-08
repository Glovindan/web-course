import React, { useState, useRef } from 'react';
import cn from "clsx"

import EditImage from '../../../../assets/edit.png'

import styles from './MyInfo.module.pcss';

type InfoProps = {
    subject: string;
    text: string
}

const Info = (props: InfoProps):React.ReactElement => {

    const { subject, text } = props;

    const [info, setInfo] = useState<String>(text);
    const [editMode, setEditMode] = useState<boolean>(false);

    const spanInfo = useRef<HTMLElement>(document.createElement('span'));

    const handleClickActionButton = () => {
        if (editMode) {
            spanInfo.current.removeAttribute('contentEditable');

        } else {
            spanInfo.current.focus();
            spanInfo.current.setAttribute('contentEditable', 'true');
        }
        setEditMode(!editMode);
    };

    return(
        <div className={styles.container}>
            <span className={styles.subject}>
                {subject}:
            </span>
            <span ref={spanInfo} className={styles.info}>
                {info}
            </span>
            <button className={cn(styles.editButton, editMode && styles.pressed)} onClick={()=>handleClickActionButton()} >
                <img className={styles.editImage} src={EditImage}></img>
            </button>
        </div>
    )
};

export default Info;
