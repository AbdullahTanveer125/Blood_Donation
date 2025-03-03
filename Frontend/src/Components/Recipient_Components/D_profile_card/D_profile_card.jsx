import React from 'react'

import { useNavigate } from "react-router-dom";
import axios from "axios";

function D_profile_card({ donor, login_user_id }) {

    const navigate = useNavigate();

    console.log("donor._id=", donor._id)
    console.log("login_user_id=", login_user_id)

    async function handleChatClick() {

        console.log("AAA")
        //add user in friends array and following or follow array
        try {
            const respons_of_add_friend = await axios.put(`http://localhost:5000/user/${login_user_id}/${donor._id}/follow`);


            const respons_of_conversation = await axios.post(`http://localhost:5000/conversation`, {
                senderId: login_user_id,
                receiverId: donor._id
            });

            // setConversations(res.data);
            console.log("respons_of_add_friend=", respons_of_add_friend)

            console.log("respons_of_conversation=", respons_of_conversation)
        } catch (err) {
            console.log(err);
        }

        console.log("cccccccccccccccccccccccccccc")
        navigate(`/messanger`);


    }




    return (
        <div>


            <div className='border-2 border-gray-200 rounded-lg p-6 h-[500px] flex flex-col justify-between'>

                <div className='flex flex-col gap-6'>
                    <div className=' flex flex-row justify-between'>
                        <div className=' flex flex-row gap-5'>
                            <img
                                src={donor.profile_photo ? donor.profile_photo : "user.jpg"}
                                alt="donor Profile"
                                className="w-16 h-16 border-2 border-black rounded-full"
                            />
                            <div className='h-24'>
                                <p> {donor.username} </p>
                                <p className='text-sm text-gray-500 font-nunito italic'> {donor.email} </p>
                                <p className='text-sm text-gray-500 font-nunito italic'> {donor.phone} </p>
                                <p className=''>
                                    <span className='text-sm bg-[#820000] text-white rounded-lg px-2 font-nunito italic'> {donor.donorDetails.gender} </span>
                                </p>
                            </div>

                        </div>

                        <div>
                            <img src="./gold.png" alt=""
                                className='w-6' />
                        </div>
                    </div>

                    <div className=' p-3 flex flex-row gap-5'>
                        <div className=' text-gray-500 font-bold font-nunito'>
                            <p>Name</p>
                            <p>Blood Group</p>
                            <p>Age</p>
                            <p>Weight</p>
                            <p>Nearest Hospital</p>
                            <p>Address</p>
                        </div>

                        <div className=' font-nunito italic'>
                            <p> {donor.name} </p>
                            <p> {donor.donorDetails.blood_group} </p>
                            <p> {donor.donorDetails.age} </p>
                            <p> {donor.donorDetails.weight} </p>
                            <p> {donor.donorDetails.nearest_hospital} </p>
                            <p> {donor.donorDetails.address} </p>
                        </div>
                    </div>
                </div>


                <div className='flex flex-row justify-center gap-5 pt-10'>
                    <button className='border-2 border-[#820000] text-[#820000] px-10 py-2 rounded-lg'>Donation History</button>
                    <button
                        className='bg-[#820000] text-white px-10 py-2 rounded-lg'
                        onClick={handleChatClick}
                    >Chat</button>

                </div>

            </div>

        </div>
    )
}

export default D_profile_card
