import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import image from "../../../public/image2.png"



export default function Conversation({ conversation, currentUser }) {

	const [user, setUser] = useState(null);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;//take URL from env folder


	useEffect(() => {
		const friendId = conversation.members.find((m) => m !== currentUser._id);
	
		const getUser = async () => {
		  try {
			const res = await axios("http://localhost:5000/get-recipient/" + friendId);
			setUser(res.data);
		  } catch (err) {
			console.log(err);
		  }
		};
		getUser();
	  }, [currentUser, conversation]);
	

	// useEffect(() => {
	// 	const friendId = conversation.members.find((m) => m !== currentUser._id);


	// 	const getUser = async () => {

	// 		if (currentUser.designation == 'donor') {
	// 			try {
	// 				const res = await axios("http://localhost:5000/get-recipient/" + friendId);
	// 				setUser(res.data.recipient);
	// 			} catch (err) {
	// 				console.log(err);
	// 			}

	// 		} else {

	// 			const getUser = async () => {
	// 				try {
	// 					const res = await axios("http://localhost:5000/get-donor/" + friendId);
	// 					setUser(res.data.donor);
	// 				} catch (err) {
	// 					console.log(err);
	// 				}
	// 			};
	// 			// getUser();

	// 		}
	// 	};
	// 	getUser();
			
	// 	// const getUser = async () => {
	// 	// 	try {
	// 	// 		const res = await axios("/users?userId=" + friendId);
	// 	// 		setUser(res.data);
	// 	// 	} catch (err) {
	// 	// 		console.log(err);
	// 	// 	}
	// 	// };
	// 	// getUser();
	// }, [currentUser, conversation]);

	return (
		<div className="conversation">AAAAA
			<img
				className="conversationImg"
				src={image
					// user?.profilePicture
					// 	? PF + user.profilePicture
					// 	: PF + "person/noAvatar.png"
				}
				alt="AAA"
			/>
			<span className="conversationName">{user?.username}</span>
		</div>
	);
}