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
import All_Events from "./Components/All_Events.jsx";
import Add_Feedback from "./Components/Add_Feedback_Form.jsx";
import All_Feedbacks from "./Components/All_Feedbacks.jsx";
import Search_Blood_Request from "./Components/Search_Blood_Request.jsx";
import Chat from "./Pages/Chat/Chat.jsx";
import Donor_Login from "./Components/Donor_Login.jsx";
import Recipient_Login from "./Components/Recipient_Login.jsx";
import Home_Page_2 from "./Pages/Home_Page_2/Home_Page_2.jsx";
import Home_1 from "./Pages/Home_1/Home_1.jsx";
import Frequently_Ask_Questions from "./Components/Frequently_Ask_Questions/Frequently_Ask_Questions.jsx";
import Parent_of_Card from "./Components/Card1/Parent_of _Card.jsx";
import User_Navbar from "./Components/User_Navbar/User_Navbar.jsx";



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home_1 />} />
        <Route path="/user_navbar" element={<User_Navbar />} />
        <Route path="/home2" element={<Home_Page_2 />} />
        <Route path="/card" element={<Parent_of_Card />} />
        <Route path="/frequently_ask_questions" element={<Frequently_Ask_Questions />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/donor-login" element={<Donor_Login />} />
        <Route path="/recipient-login" element={<Recipient_Login />} />
        {/* <Route path="/add_blood_Request" element={<BloodRequest />} />
        <Route path="/all_blood_requests" element={<All_Blood_Requests />} />
        <Route path="/all_events" element={<All_Events />} />
        <Route path="/add_feedback" element={<Add_Feedback />} />
        <Route path="/all_feedbacks" element={<All_Feedbacks />} /> */}


        <Route path="/search_blood_Requests" element={<Search_Blood_Request />} />
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
