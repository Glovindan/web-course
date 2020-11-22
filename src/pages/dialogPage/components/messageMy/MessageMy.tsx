import React from "react";

import styles from "./MessageMy.module.pcss";

type MessageMyProps = {
	text: string,
}

const MessageMy = (props: MessageMyProps):React.ReactElement => {

const {text} = props;

	return(
		<div className={styles.wrapper}>
			<div className={styles.container}>
			{text}
			</div>
		</div>
	)
};

export default MessageMy;