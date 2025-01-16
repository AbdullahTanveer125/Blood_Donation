import React from "react";
import Card1 from "./Card1";

const Parent_of_Card = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <Card1
                name="John Doe"
                bloodGroup="O+"
                hospital="City Hospital, New York"
                contact="+1 123-456-7890"
                urgency="High"
            />

            <Card1
                name="John Doe"
                bloodGroup="O+"
                hospital="City Hospital, New York"
                contact="+1 123-456-7890"
                urgency="Low"
            />

            
        </div>
    );
};

export default Parent_of_Card;
