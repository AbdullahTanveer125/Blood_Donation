import React from "react";

import Hero_Section11 from "../Components/Landing_page_components/Hero_Section11/Hero_Section11";
import Our_Score from "../Components/Our_Score/Our_Score";
import D_why_donate_blood from "../Components/Donor_components/D_why_donate_blood/D_why_donate_blood";
import Blood_donation_steps_1 from "../Components/Landing_page_components/Blood_donation_steps_1/Blood_donation_steps_1";
import Our_feedback from "../Components/Landing_page_components/Our_feedback/Our_feedback";
import Frequently_Ask_Questions from "../Components/Landing_page_components/Frequently_Ask_Questions/Frequently_Ask_Questions";
import Event_Section from "../Components/Event_Section/Event_Section";
import Footer1 from "../Components/Footer1";
import Footer2 from "../Components/Footer2";

const Landing_Page11 = () => {
    return (
        <div>
            <Hero_Section11 />
            <Our_Score />
            <D_why_donate_blood />
            <Blood_donation_steps_1 />
            {/* <Our_feedback /> */}
            <Frequently_Ask_Questions />
            <Event_Section />
            <Footer1 />
            <Footer2 />
        </div>
    );
};

export default Landing_Page11;
