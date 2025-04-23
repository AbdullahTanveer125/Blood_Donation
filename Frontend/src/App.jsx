import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import { useAuth } from "./context/auth.jsx";


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
import Recipient_Signup from "./Components/Recipient_Components/Recipient_Signup/Recipient_Signup.jsx";
import Organization_Signup from "./Components/Organization_component/Organization_Signup/Organization_Signup.jsx";
import Organization_Login from "./Components/Organization_component/Organization_Login/Organization_Login.jsx";
import Add_New_Blood_Request from "./Components/Add_New_Blood_Request/Add_New_Blood_Request.jsx";
import Recipient_login from "./Components/Recipient_Components/Recipient_login/Recipient_login.jsx";
import Blood_Requests_of_recipient from "./Components/Recipient_Components/Its_all_Blood_Request/Its_all_Blood_Request.jsx";
import Add_New_Event from "./Components/Add_New_Event/Add_New_Event.jsx";
import Events_of_Organization from "./Components/Events_of_Organization/Events_of_Organization.jsx";
import Messanger from "./Pages/Messanger/Messanger.jsx";
import Landing_Navbar from "./Components/Landing_page_components/Landing_Navbar/Landing_Navbar.jsx";
import Landing from "./Pages/Landing.jsx";
// import Event_card from "./Components/Event_card__/Event_card.jsx";
import Testmonials_Feedbacks_of_us from "./Components/Landing_page_components/Our_Feedback_Card/Our_Feedback_Card.jsx";
import Donor_landing_page from "./Pages/Donor_landing_page.jsx";
import Login_as_a from "./Pages/Login_as_a/Login_as_a.jsx";
import Feedback_Review_2 from "./Components/Feedback_Review_2/Feedback_Review_2.jsx";
// import Event_Card_2 from "./Components/Event_Card/Event_Card.jsx";
import Event_on_landing_2 from "./Components/Event_Section/Event_Section.jsx";
import D_profile_card from "./Components/Recipient_Components/D_profile_card/D_profile_card.jsx";
import D_all_donors from "./Components/Recipient_Components/D_all_donors/D_all_donors.jsx";
import O_profile from "./Components/Organization_component/O_profile/O_profile.jsx";
import Oraganization_Landing from "./Pages/Oraganization_Landing.jsx";
import Parent_of_gym from "../Gym/Parent_of_gym.jsx";
import Final_todo from "../ToDo List/Final_todo.jsx";
import Unauthorized_user from "./Pages/Unuthorized_user.jsx";
import Specific_blood_request_on_donor from "./Components/Donor_components/D_Specific_blood_request/Specific_blood_request_on_donor.jsx";
import Recipient_landing_page from "./Pages/Recipient_landing_page.jsx";
import Blog_All from "./Components/Blog_All/Blog_All.jsx";
import Blog_Single from "./Components/Blog_Single/Blog_Single.jsx";
import About_Us from "./Components/About_Us/About_Us.jsx";
import Signup_as_a from "./Pages/Signup_as_a/Signup_as_a.jsx";
import Contact_Us from "./Components/Contact_Us/Contact_Us.jsx";
import Generate_Blood_Request from "./Components/Recipient_Components/Generate_Blood_Request/Generate_Blood_Request.jsx";
import Generate_Event from "./Components/Organization_component/Generate_Event/Generate_Event.jsx";
import All_Blood_Request from "./Components/All_Blood_Request/All_Blood_Request.jsx";
import All_Donors from "./Components/All_Donors/All_Donors.jsx";
import All_Event from "./Components/All_Event/All_Event.jsx";
import Specific_Recipient from "./Components/Specific_Recipient/Specific_Recipient.jsx";

//#EE8A9E  (light color)
//#B01030  (dark color) #1
// #820000  (dark color) #2
// #04214c  (navy blue)

function App() {

  const [auth] = useAuth();
  const userRole = auth?.user?.person; // Get user role

  return (
    <>
      {/* <Routes>
      
        <Route path="/gym" element={<Parent_of_gym />} />
        <Route path="/todo" element={<Final_todo />} />
        <Route path="/home1" element={<Home_1 />} />
        <Route path="/home2" element={<Home_Page_2 />} />
        <Route path="/user_navbar" element={<User_Navbar />} />
      
        <Route path="/card" element={<Parent_of_Card />} />
        <Route path="/frequently_ask_questions" element={<Frequently_Ask_Questions />} />
      
      
        <Route path="/all_blood_requests" element={<Blood_Requests_of_recipient />} />


        
        <Route path="/all_events" element={<Events_of_Organization />} />
        <Route path="/add_feedback" element={<Add_Feedback />} />
        <Route path="/all_feedbacks" element={<All_Feedbacks />} />
        <Route path="/event_card" element={<Event_card />} />

        <Route path="/our_feedback_card" element={<Testmonials_Feedbacks_of_us />} />


        <Route path="/messanger" element={<Messanger />} />


        <Route path="/search_blood_Requests" element={<Search_Blood_Request />} />




        
        <Route path="/D_profile_card" element={<D_all_donors />} />

        <Route path="/login_as_a" element={<Login_as_a />} />
        <Route path="/Feedback_Review_2" element={<Feedback_Review_2 />} />


        <Route path="/Event_Card_2" element={<Event_Card_2 />} />

        <Route path="/Event_on_landing_2" element={<Event_on_landing_2 />} />





      </Routes> */}
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










      <Routes>
        {/* Public Routes (Available to Everyone) */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup_as_a" element={<Signup_as_a />} />
        <Route path="/login_as_a" element={<Login_as_a />} />
        <Route path="/donor_signup" element={<Donor_SignUp />} />
        <Route path="/recipient_signup" element={<Recipient_Signup />} />
        <Route path="/organization_signup" element={<Organization_Signup />} />
        <Route path="/donor_login" element={<Donor_Login />} />
        <Route path="/recipient_login" element={<Recipient_login />} />
        <Route path="/organization_login" element={<Organization_Login />} />
        <Route path="/all_blogs" element={<Blog_All />} />
        <Route path="/single_blog" element={<Blog_Single />} />
        <Route path="/about_us" element={<About_Us />} />
        <Route path="/contact_us" element={<Contact_Us />} />




        {/* Role-Based Routes */}

        {userRole === "donor" && (
          <>
            <Route path="/donor" element={<Donor_landing_page />} />
            
            <Route path="/all_blood_request" element={<All_Blood_Request />} />
            
            <Route path="/specific_blood_request" element={<Specific_blood_request_on_donor />} />
            
            <Route path="/all_event" element={<All_Event />} />

            <Route path="/specific_recipient" element={<Specific_Recipient />} />


            {/* Redirect if accessing unauthorized routes */}
            <Route path="/*" element={<Unauthorized_user message="donor" />} />
          </>
        )}

        {userRole === "recipient" && (
          <>
            <Route path="/recipient" element={<Recipient_landing_page />} />
            <Route path="/add_new_blood_Request" element={<Add_New_Blood_Request />} />
            <Route path="/generate_blood_request" element={<Generate_Blood_Request />} />
            
            <Route path="/all_blood_requests" element={<Blood_Requests_of_recipient />} />

            
            <Route path="/all_donors" element={<All_Donors />} />




            {/* Redirect if accessing unauthorized routes */}
            <Route path="/*" element={<Unauthorized_user message="recipient" />} />
          </>
        )}

        {userRole === "organization" && (
          <>
            <Route path="/organization" element={<Oraganization_Landing />} />
            <Route path="/add_new_event" element={<Add_New_Event />} />
            <Route path="/generate_event" element={<Generate_Event />} />

            {/* Redirect if accessing unauthorized routes */}
            <Route path="/*" element={<Unauthorized_user message="organization" />} />
          </>
        )}

        {userRole === "admin" && (
          <>
            <Route path="/view_all_requests" element={<View_All_Requests />} />
            <Route path="/view_all_events" element={<View_All_Events />} />


            {/* Redirect if accessing unauthorized routes */}
            <Route path="/*" element={<Unauthorized_user message="admin" />} />
          </>
        )}

        {/* Unauthorized Route */}
        <Route path="/unauthorized" element={<Unauthorized_user />} />



      </Routes>








    </>
  )
}

export default App
