import { useState, useEffect } from "react";
import axios from "axios";
import Event_card from "../../Event_card/Event_card";

function Donor_Event_Section() {

    const [events, setEvents] = useState([]); // Store events from MongoDB

    // Fetch events from MongoDB
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/event/get-all"); // Your API route

                console.log("All Events=", response)
                setEvents(response.data.All_Events);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchEvents();
    }, []);


    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
            <div className="grid grid-cols-2 gap-6">
                {events.map((event, index) => (

                    <div key={event._id} className="max-w-[80%] flex-shrink-0">

                        <div className="h-[]">
                            <Event_card event={event} />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );

    // return (
    //     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
    //         <div className="grid grid-cols-2 gap-6">
    //             {/* {cards.slice(0, 4).map((card) => ( */}
    //                 <div  className="bg-white p-6 rounded-lg shadow-md">
    //                     <h2 className="text-xl font-bold">Name</h2>
    //                     <p className="text-gray-600 mt-2">data</p>
    //                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    //                         More Details
    //                     </button>
    //                 </div>

    //                 <div  className="bg-white p-6 rounded-lg shadow-md">
    //                     <h2 className="text-xl font-bold">Name</h2>
    //                     <p className="text-gray-600 mt-2">data</p>
    //                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    //                         More Details
    //                     </button>
    //                 </div>

    //                 <div  className="bg-white p-6 rounded-lg shadow-md">
    //                     <h2 className="text-xl font-bold">Name</h2>
    //                     <p className="text-gray-600 mt-2">data</p>
    //                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    //                         More Details
    //                     </button>
    //                 </div>

    //                 <div  className="bg-white p-6 rounded-lg shadow-md">
    //                     <h2 className="text-xl font-bold">Name</h2>
    //                     <p className="text-gray-600 mt-2">data</p>
    //                     <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    //                         More Details
    //                     </button>
    //                 </div>
    //             {/* ))} */}
    //         </div>
    //     </div>
    // );

}

export default Donor_Event_Section
