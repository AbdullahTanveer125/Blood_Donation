import axios from 'axios';
import React, { useEffect, useState } from 'react'

function All_Blood_Requests() {


    const [array_of_all_blood_requests, setArray_of_all_blood_requests] = useState([]);



    async function fetch_all_blood_requests() {
        try {
            // console.log("** Before Hit API **")
            // console.log("res=", res)
            const res = await axios.get(`http://localhost:5000/bloodRequest/get-all-blood-request`);
            console.log("** After Hit API **")
            console.log("res=", res.data.All_Blood_Requests)

            setArray_of_all_blood_requests(res.data.All_Blood_Requests)
            console.log(array_of_all_blood_requests)
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
        fetch_all_blood_requests()
    }, [])


    const deleteRequest = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete Blood Request?");
        if (!confirmDelete) return;
    
        try {
            const res = await axios.delete(`http://localhost:5000/delete-blood-request/${id}`);
            if (res.data.success) {
                // Filter out the deleted request from the state
                setArray_of_all_blood_requests((prev) =>
                    prev.filter((request) => request._id !== id)
                );
                // alert("Request deleted successfully.");
                console.log(array_of_all_blood_requests)
            } else {
                alert("Failed to delete the request.");
            }
        } catch (error) {
            console.error("Error deleting request:", error);
            alert("An error occurred while deleting the request.");
        }
    };


    const handleDeleteAll = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete all blood requests?");
        if (!confirmDelete) return;
    
        try {
          // Send DELETE request to the backend
          const response = await axios.delete("http://localhost:5000/delete-all-blood-requests");
          
          if (response.data.success) {
            setArray_of_all_blood_requests([])
            toast.success(response.data.message); // Show success message
            console.log("Deleted count:", response.data.deletedCount);
          } else {
            toast.error("Failed to delete events.");
          }
        } catch (error) {
          console.error("Error deleting events:", error);
          toast.error("An error occurred while deleting events.");
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
                {array_of_all_blood_requests.map((request, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold text-red-500 mb-2">{request.name}</h3>
                        <p className="text-sm text-gray-700">
                            <strong>Email:</strong> {request.email}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Phone:</strong> {request.phone}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Blood Group:</strong> {request.blood_group}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Address:</strong> {request.address}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>City:</strong> {request.city}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Priority:</strong> {request.priority}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Need Date:</strong>{" "}
                            {new Date(request.blood_need_date).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Comment:</strong> {request.comment}
                        </p>

                        <button
                            className="btn btn-danger mt-4"
                            onClick={() => deleteRequest(request._id)}
                        >
                            Delete Request
                        </button>

                    </div>
                ))}
            </div>
















            <button
                onClick={handleDeleteAll}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200"
            >
                Delete All Blood Requests
            </button>


        </div>
    )
}

export default All_Blood_Requests
