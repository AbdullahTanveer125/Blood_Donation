import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";

function All_Events() {


    const [array_of_all_events, setArray_of_all_events] = useState([]);



    async function fetch_all_events() {
        try {
            // console.log("** Before Hit API **")
            // console.log("res=", res)
            const res = await axios.get(`http://localhost:5000/get-all-event`);
            console.log("** After Hit API **")
            console.log("res=", res.data.All_Events)

            setArray_of_all_events(res.data.All_Events)
            console.log(array_of_all_events)
            // const array_of_users = res.data.data
            // console.log("array=", array_of_users)

        } catch (error) {
            // setError(error);
            console.log("*** Error ***\n")
            console.log(error)
            console.log("\n*** Error ***")
            // setLoading(false);
        }
    }

    useEffect(function () {
        fetch_all_events()
    }, [])


    const delete_Event = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete event?");
        if (!confirmDelete) return;

        try {
            const res = await axios.delete(`http://localhost:5000/delete-event/${id}`);
            if (res.data.success) {
                // Filter out the deleted request from the state
                setArray_of_all_events((prev) =>
                    prev.filter((request) => request._id !== id)
                );
                // alert("Event deleted successfully.");
                console.log(array_of_all_events)
            } else {
                alert("Failed to delete the Event.");
            }
        } catch (error) {
            console.error("Error deleting Event:", error);
            alert("An error occurred while deleting the Event.");
        }
    };



    const handleDeleteAll = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete all events?");
        if (!confirmDelete) return;

        try {
            // Send DELETE request to the backend
            const response = await axios.delete("http://localhost:5000/delete-all-events");

            if (response.data.success) {
                setArray_of_all_events([])
                toast.success(response.data.message); // Show success message
                console.log("Deleted count:", response.data.deletedCount);
            } else {
                toast.error("Failed to delete events.");
            }
        } catch (error) {
            console.error("Error deleting all events:", error);
            toast.error("An error occurred while deleting all events.");
        }
    };








    return (
        <div>
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


























            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                {array_of_all_events.map((event, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold text-red-500 mb-2">{event.name}</h3>
                        <p className="text-sm text-gray-700">
                            <strong>Email:</strong> {event.email}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Phone:</strong> {event.phone}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Organization Name:</strong> {event.organization_name}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Location:</strong> {event.location}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>City:</strong> {event.city}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Time:</strong> {event.time}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Date:</strong>{" "}
                            {new Date(event.date).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Description:</strong> {event.description}
                        </p>

                        <button
                            className="btn btn-danger mt-4"
                            onClick={() => delete_Event(event._id)}
                        >
                            Delete Event
                        </button>

                    </div>
                ))}
            </div>







            <button
                onClick={handleDeleteAll}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200"
            >
                Delete All Events
            </button>










        </div>
    )
}

export default All_Events
