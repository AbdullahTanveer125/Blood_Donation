import React, { useEffect, useState } from 'react'

import { useAuth } from "../../../context/auth";

import axios from "axios";
import D_profile_card from '../D_profile_card/D_profile_card';


function D_all_donors() {

	const [auth] = useAuth(); // Access the auth state

	console.log("************AAAAAAAAAAAAAAAAA******************************")
	console.log(auth)
	// get user from auth
	const { user } = auth;
	const login_user_id = user._id;

	console.log("*************AAAAAAAAAAAA********************************")
	console.log("user=", user)

	const [all_donors, setAll_donors] = useState([]);


	//get all_donors
	useEffect(() => {
		const get_all_donors = async () => {
			try {
				const res = await axios.get("http://localhost:5000/donor/get-all-donor");
				setAll_donors(res.data.All_Donors);
				console.log("res=", res.data)
			} catch (err) {
				console.log(err);
			}
		};
		get_all_donors();
	}, []);


	console.log("All_Donors=", all_donors)








	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{all_donors.map((donor) => (
					<D_profile_card key={donor._id} donor={donor} login_user_id={login_user_id} />
				))}
			</div>


		</div>
	)
}

export default D_all_donors
