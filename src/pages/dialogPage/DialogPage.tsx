import React from "react";

import MessageMy from "./components/messageMy";
import MessageUser from "./components/messageUser";

import styles from "./DialogPage.module.pcss";

type DialogPageProps = {

}

const DialogPage = (props: DialogPageProps):React.ReactElement => {

const {} = props;

	return(
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.userInfo}>

				</div>
				<hr/>
				<div className={styles.messagesField}>
					<MessageMy />
					<MessageUser />
					<MessageUser />
					<MessageMy />
					<MessageMy />
					<MessageUser />
					<MessageMy />
					<MessageUser />
					<MessageUser />
					<MessageMy />
					<MessageMy />
					<MessageUser />
					<MessageMy />
					<MessageUser />
					<MessageUser />
					<MessageMy />
					<MessageMy />
					<MessageUser />
					<MessageMy />	
				</div>
				<hr/>
				<input type="text"></input>
			</div>
		</div>
	)
};

export default DialogPage;