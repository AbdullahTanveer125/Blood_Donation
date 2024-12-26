import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero1 from './Components/Hero1.jsx'
import Hero2 from './Components/Hero2.jsx'
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



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/add_blood_Request" element={<BloodRequest />} />
        <Route path="/all_blood_requests" element={<All_Blood_Requests />} />
        <Route path="/all_events" element={<All_Events />} />
        <Route path="/add_feedback" element={<Add_Feedback />} />
        <Route path="/all_feedbacks" element={<All_Feedbacks />} />
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
