import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero1 from './Components/Hero1/Hero1.jsx'
import Hero2 from './Components/Hero2/Hero2.jsx'
import Slider1 from './Components/Slider1.jsx'
import Footer1 from './Components/Footer1.jsx'
import Footer2 from './Components/Footer2.jsx'
import Card1 from './Components/Card1.jsx'
import Home from './Pages/Home.jsx'
import SignUp from './Components/SignUp.jsx'
import BloodRequest from './Components/BloodRequest.jsx'
import All_Blood_Requests from './Components/All_Blood_Requests.jsx'
import Event from "./Components/Event.jsx";
// import All_Events from "./Components/All_Events.jsx";
import Add_Feedback from "./Components/Add_Feedback_Form.jsx";
import All_Feedbacks from "./Components/All_Feedbacks.jsx";
import Search_Blood_Request from "./Components/Search_Blood_Request.jsx";

// import Recipient_Login from "./Components/Recipient_Login.jsx";
import Home_Page_2 from "./Pages/Home_Page_2/Home_Page_2.jsx";
import Home_1 from "./Pages/Home_1/Home_1.jsx";
import Frequently_Ask_Questions from "./Components/Landing_page_components/Frequently_Ask_Questions/Frequently_Ask_Questions.jsx";
import Parent_of_Card from "./Components/Card1/Parent_of _Card.jsx";
import User_Navbar from "./Components/User_Navbar/User_Navbar.jsx";
import Donor_SignUp from "./Components/Donor_components/D_SignUp/D_SignUp.jsx";
import Donor_Login from "./Components/Donor_components/D_Login/D_Login.jsx";
import Recipient_Signup from "./Components/Recipient_Signup/Recipient_Signup.jsx";
import Organization_Signup from "./Components/Organization_component/Organization_Signup/Organization_Signup.jsx";
import Organization_Login from "./Components/Organization_component/Organization_Login/Organization_Login.jsx";
import Add_New_Blood_Request from "./Components/Add_New_Blood_Request/Add_New_Blood_Request.jsx";
import Recipient_login from "./Components/Recipient_login/Recipient_login.jsx";
import Blood_Requests_of_recipient from "./Components/Blood_Requests_of_recipient/Blood_Requests_of_recipient.jsx";
import Add_New_Event from "./Components/Add_New_Event/Add_New_Event.jsx";
import Events_of_Organization from "./Components/Events_of_Organization/Events_of_Organization.jsx";
import Messanger from "./Pages/Messanger/Messanger.jsx";
import Landing_Navbar from "./Components/Landing_page_components/Landing_Navbar/Landing_Navbar.jsx";
import Landing from "./Pages/Landing.jsx";
import Event_card from "./Components/Event_card/Event_card.jsx";
import Testmonials_Feedbacks_of_us from "./Components/Landing_page_components/Our_Feedback_Testmonials/Our_Feedback_Testmonials.jsx";
import Donor_landing_page from "./Pages/Donor_landing_page.jsx";
import Login_as_a from "./Pages/Login_as_a/Login_as_a.jsx";
import Feedback_Review_2 from "./Components/Feedback_Review_2/Feedback_Review_2.jsx";
import Event_Card_2 from "./Components/Event_Card_2/Event_Card_2.jsx";
import Event_on_landing_2 from "./Components/Event_on_landing_2/Event_on_landing_2.jsx";
import D_profile_card from "./Components/Recipient_Components/D_profile_card/D_profile_card.jsx";
import D_all_donors from "./Components/Recipient_Components/D_all_donors/D_all_donors.jsx";
import O_profile from "./Components/Organization_component/O_profile/O_profile.jsx";
import Oraganization_Landing from "./Pages/Oraganization_Landing.jsx";

//#EE8A9E  (light color)
//#B01030  (dark color) #1
// #820000  (dark color) #2
// #04214c  (navy blue)

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/home1" element={<Home_1 />} />
        <Route path="/home2" element={<Home_Page_2 />} />
        <Route path="/user_navbar" element={<User_Navbar />} />
        <Route path="/donor_signup" element={<Donor_SignUp />} />
        <Route path="/recipient_signup" element={<Recipient_Signup />} />
        <Route path="/organization_signup" element={<Organization_Signup />} />
        <Route path="/card" element={<Parent_of_Card />} />
        <Route path="/frequently_ask_questions" element={<Frequently_Ask_Questions />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/donor_login" element={<Donor_Login />} />
        <Route path="/recipient_login" element={<Recipient_login />} />
        <Route path="/organization_login" element={<Organization_Login />} />
        <Route path="/add_new_blood_Request" element={<Add_New_Blood_Request />} />
        <Route path="/all_blood_requests" element={<Blood_Requests_of_recipient />} />

        
        <Route path="/add_new_event" element={<Add_New_Event />} />
        <Route path="/all_events" element={<Events_of_Organization />} />
        <Route path="/add_feedback" element={<Add_Feedback />} />
        <Route path="/all_feedbacks" element={<All_Feedbacks />} />
        <Route path="/event_card" element={<Event_card />} />
        
        <Route path="/our_feedback_card" element={<Testmonials_Feedbacks_of_us />} />

        
        <Route path="/messanger" element={<Messanger />} />


        <Route path="/search_blood_Requests" element={<Search_Blood_Request />} />




        <Route path="/donor" element={<Donor_landing_page />} />
        <Route path="/D_profile_card" element={<D_all_donors />} />
        
        <Route path="/login_as_a" element={<Login_as_a />} />
        <Route path="/Feedback_Review_2" element={<Feedback_Review_2 />} />

        
        <Route path="/Event_Card_2" element={<Event_Card_2 />} />
        
        <Route path="/Event_on_landing_2" element={<Event_on_landing_2 />} />


        <Route path="/organization" element={<Oraganization_Landing />} />



      </Routes>
      {/* <Navbar />
      <Hero1 />
      <Hero2 />
      <Slider1 />
      <Card1 />
      <Footer1 />
      <Footer2 /> */}

      {/* <Home /> */}

      {/* <SignUp /> */}
      {/* <BloodRequest /> */}
      {/* <All_Blood_Requests /> */}


    </>
  )
}

export default App
