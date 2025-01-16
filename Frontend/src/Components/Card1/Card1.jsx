import React from "react";

const Card1 = ({ name, bloodGroup, hospital, contact, urgency }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="p-5">
                {/* Blood Group */}
                <div className="flex justify-between items-center mb-10 gap-10">
                    <h2 className="text-xl font-semibold text-red-600">
                        {bloodGroup} Needed!
                    </h2>
                    <span
                        className={`${urgency === "High"
                            ? "badge badge-error"
                            : "badge badge-warning"
                            }`}
                    >
                        {urgency} Urgency
                        {/* <div className="badge badge-error gap-2">
                            {urgency} Urgency
                        </div> */}
                    </span>

                </div>

                {/* Patient Details */}
                <p className="text-gray-700 text-sm mb-3">
                    <span className="font-semibold">Patient Name:</span> {name}
                </p>

                {/* Hospital Information */}
                <p className="text-gray-700 text-sm mb-3">
                    <span className="font-semibold">Hospital:</span> {hospital}
                </p>

                {/* Contact Information */}
                <p className="text-gray-700 text-sm mb-3">
                    <span className="font-semibold">Contact:</span> {contact}
                </p>

                {/* Call to Action */}
                <button className="w-full bg-red-600 text-white font-semibold py-2 px-4 mt-3 rounded-lg hover:bg-red-700 transition duration-300">
                    Donate Now
                </button>
            </div>
        </div>
    );
};

export default Card1;
