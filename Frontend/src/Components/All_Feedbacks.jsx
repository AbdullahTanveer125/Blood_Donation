import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";

function All_Feedbacks() {


    const [array_of_all_feedbacks, setArray_of_all_feedbacks] = useState([]);



    async function fetch_all_feedbacks() {
        try {
            // console.log("** Before Hit API **")
            // console.log("res=", res)
            const res = await axios.get(`http://localhost:5000/get-all-feedback`);
            console.log("** After Hit API **")
            console.log("res=", res.data.All_Feedbacks)

            setArray_of_all_feedbacks(res.data.All_Feedbacks)
            console.log(array_of_all_feedbacks)
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
        fetch_all_feedbacks()
    }, [])


    const delete_feedback = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete feedback?");
        if (!confirmDelete) return;

        try {
            const res = await axios.delete(`http://localhost:5000/delete-feedback/${id}`);
            if (res.data.success) {
                // Filter out the deleted request from the state
                setArray_of_all_feedbacks((prev) =>
                    prev.filter((request) => request._id !== id)
                );
                // alert("feedback deleted successfully.");
                console.log(array_of_all_feedbacks)
            } else {
                alert("Failed to delete the feedback.");
            }
        } catch (error) {
            console.error("Error deleting feedback:", error);
            alert("An error occurred while deleting the feedback.");
        }
    };



    const handleDeleteAll = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete all feedbacks?");
        if (!confirmDelete) return;

        try {
            // Send DELETE request to the backend
            const response = await axios.delete("http://localhost:5000/delete-all-feedbacks");

            if (response.data.success) {
                setArray_of_all_feedbacks([])
                toast.success(response.data.message); // Show success message
                console.log("Deleted count:", response.data.deletedCount);
            } else {
                toast.error("Failed to delete all feedbacks.");
            }
        } catch (error) {
            console.error("Error deleting feedbacks:", error);
            toast.error("An error occurred while deleting all feedbacks.");
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
                {array_of_all_feedbacks.map((feedback, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold text-red-500 mb-2">{feedback.recipient_name}</h3>
                        <p className="text-sm text-gray-700">
                            <strong>comment:</strong> {feedback.comment}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>rating:</strong> {feedback.rating}
                        </p>

                        <button
                            className="btn btn-danger mt-4"
                            onClick={() => delete_feedback(feedback._id)}
                        >
                            Delete feedback
                        </button>

                    </div>
                ))}
            </div>







            <button
                onClick={handleDeleteAll}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200"
            >
                Delete All feedbacks
            </button>










        </div>
    )
}

export default All_Feedbacks
