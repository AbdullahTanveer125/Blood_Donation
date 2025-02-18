import React, { useEffect, useState } from 'react'
// import Our_Feedback_Testmonials from '../Our_Feedback_Testmonials/Our_Feedback_Testmonials';
import axios from 'axios';
import D_feedback_card from '../D_feedback_card/D_feedback_card';


import { useAuth } from "../../../context/auth";

function D_feedback() {

    
        const [auth] = useAuth(); // Access the auth state
    
    
        // if (!auth || !auth.user) {
        //     console.error("Auth or user is not available");
        //     return <div>Please log in to access this page.</div>;
        // }
    
        // if (auth.person != "recipient") {
        //     // console.error("Welcome");
        //     // return <div>Welcome</div>;
        //     console.error("You are not recipient! Please login as Recipient to access this page.");
        //     return <div>You are not recipient! Please login as "Recipient" to access this page.</div>;
        // }
    
        console.log("************D_Feedback*********************************")
        console.log(auth)
        // get user from auth
        const { user, donor } = auth;
        console.log("*************D_Feedback********************************")
        console.log("user from auth", user._id, user.name, donor.person, donor._id, user)
    

    const [array_of_feedback, setArray_of_feedback] = useState([]); // Store events from MongoDB

    // Fetch feedback from MongoDB
    useEffect(() => {
        const fetch_feedback = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/feedback/get-all-donor-feedbacks/${donor._id}`); // Your API route

                

                console.log("All our_feedback=", response)
                setArray_of_feedback(response.data.All_Feedbacks);
            } catch (error) {
                console.error("Error fetching All_our_feedbacks:", error);
            }
        };
        fetch_feedback();
    }, []);

    return (

        <div className=' w-[85%]'>

            <div className=" px-16 relative w-100% pt-16 overflow-hidden justify-center">

               


                <h1 className="text-4xl mb-6 font-bold text-center">
                    <span className="text-[#B01030]">Testimonials</span> / FeedBacks
                </h1>

                {/* Carousel Wrapper with Animation */}
                <div className=" pb-20 overflow-hidden max-w-full flex gap-5">


                    




                        {array_of_feedback.map((event, index) => (

                            <div key={event._id} className="">

                                <D_feedback_card event={event} />

                            </div>
                        ))} 

                    
                </div>


                
            </div>


        </div>

    )
}

export default D_feedback
