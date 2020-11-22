import React from "react";

import styles from "./MessageUser.module.pcss";

type MessageUserProps = {
	text: string,
}

const MessageUser = (props: MessageUserProps):React.ReactElement => {

const {text} = props;

	return(
		<div className={styles.wrapper}>
			<div className={styles.container}>
				{text}
			</div>
		</div>
	)
};

export default MessageUser;