import React from 'react'

function Card1() {
    return (
        <div>


            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Any Name!
                        <div className="badge badge-secondary">Donor / Recepient</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>

                    <div>
                        <button className="btn btn-success">More Details</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Card1
