import React from "react";
import { NavLink } from "react-router-dom"

import MessageMy from "./components/messageMy";
import MessageUser from "./components/messageUser";
import Avatar from "../../components/Avatar"

import styles from "./DialogPage.module.pcss";

const text = [
	{
		text: "Dolor ipsum cupidatat elit Lorem. Lorem incididunt culpa pariatur eu cupidatat consequat non minim mollit voluptate. Laborum nisi cillum excepteur aute aute Lorem laborum consequat commodo anim Lorem sint. Esse pariatur commodo ex cillum. Consequat nisi sunt culpa eu dolor quis consequat reprehenderit. Mollit aliquip tempor dolor nulla. Ex esse exercitation velit reprehenderit nisi qui qui ex exercitation duis exercitation velit nulla.",
		me: false
	},
	{
		text: "Amet commodo culpa aliqua fugiat labore in.",
		me: false
	},
	{
		text: "Nostrud cupidatat elit sint magna fugiat nisi labore labore commodo deserunt ad veniam.",
		me: true
	},
	{
		text: "Excepteur ullamco sit non in eu eiusmod adipisicing ipsum enim ex non. Duis est ut aliquip consectetur ea cillum. Labore enim exercitation Lorem mollit. Reprehenderit dolore nisi exercitation incididunt id. Voluptate culpa cupidatat excepteur velit nulla et cupidatat.",
		me: false
	},
	{
		text: "Ullamco eiusmod Lorem fugiat dolor nisi sunt officia et adipisicing.",
		me: true
	},
	{
		text: "Eiusmod consequat nisi sint ullamco officia.",
		me: false
	},
	{
		text: "Nostrud pariatur cupidatat consequat proident ut exercitation et minim irure. Consectetur dolore quis reprehenderit cupidatat nostrud nostrud officia. Aliqua magna culpa ex aliqua. Fugiat tempor ea nulla ut consectetur sint ipsum. Aute nisi fugiat deserunt do ullamco proident veniam quis in laboris. Labore consequat proident velit duis culpa non esse Lorem.",
		me: false
	},
	{
		text: "Amet labore irure commodo tempor enim nisi quis incididunt reprehenderit do sit.",
		me: false
	},
	{
		text: "Quis nostrud cupidatat elit enim tempor sit consequat Lorem minim duis reprehenderit ut velit.",
		me: true
	},
	{
		text: "Aliqua excepteur mollit mollit magna id aute excepteur excepteur commodo incididunt ad aute commodo sint.",
		me: false
	},
	{
		text: "Aute quis do culpa occaecat laborum occaecat elit ut esse aliquip irure.",
		me: true
	},
	{
		text: "demasscult.fun",
		me: false
	},

]

type DialogPageProps = {
	userAvatarImage: string,
	userName: string,
	
}

const DialogPage = (props: DialogPageProps):React.ReactElement => {

	return(
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.leftSide}>
					<Avatar src={props.location.state.userAvatarImage} alt={"user avatar"} />
					<div className={styles.name}>
						{props.location.state.userName}
					</div>
					<NavLink to={"/messages"}>
						<button className={styles.backButton}>
							Go back to contacts!
						</button>
					</NavLink>
				</div>
				<hr className={styles.line}/>
				<div className={styles.rightSide}>
					<div className={styles.messagesField}>
						<ul className={styles.ul}>
							{text.map((el, idx) => (
								<li className={styles.li} key={idx}>
									{(el.me ? <MessageMy text={el.text}/> : <MessageUser text={el.text} />)}
								</li>
							))}
						</ul>
					</div>
					<input className={styles.inputMessage} type="text"></input>
				</div>
			</div>
		</div>
	)
};

export default DialogPage;