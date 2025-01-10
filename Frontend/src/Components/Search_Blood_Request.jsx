import React, { useState } from 'react';
import axios from 'axios';
import { FaRegAddressBook } from "react-icons/fa6";




const Search_Blood_Request = () => {
    const [blood_type, setBlood_type] = useState('');
    const [address, setAddress] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:5000/search-blood-requests', {
                blood_type: blood_type,
                address: address,
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching blood requests:', error);
        }
    };

    return (
        <div style={{ backgroundColor:'red', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
            <h2>Search Blood Requests</h2>


            <div className="flex flex-col gap-1">
                <label htmlFor="bloodtype" className="text-sm font-medium text-gray-700">Blood type</label>
                <select
                    className="select select-bordered w-full max-w-xs"
                    value={blood_type}
                    onChange={(e) => setBlood_type(e.target.value)}
                >
                    <option disabled selected></option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>

                </select>
            </div>




            <div className="flex flex-col gap-1">
                <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                <div className="input input-bordered flex items-center gap-2">
                    <div className="">
                        <FaRegAddressBook size={20} />
                    </div>
                    <input
                        type="text"
                        value={address}
                        onChange={function (e) { setAddress(e.target.value) }}
                        id="address"
                        className="grow"
                        placeholder="Enter address"
                    />
                </div>
            </div>




            
            <button
                onClick={handleSearch}
                style={{
                    marginTop: '50px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Search
            </button>

            <div style={{ marginTop: '20px' }}>
                <h3>Results:</h3>
                {results.length > 0 ? (
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>
                                <strong>Blood Type:</strong> {result.blood_type}, <strong>Address:</strong>{' '}
                                {result.address}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search_Blood_Request;
