import 'react-toastify/dist/ReactToastify.css';

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
// import Blog_Single from "./Components/Blog_Single/Blog_Single.jsx";
import About_Us from "./Components/About_Us/About_Us.jsx";
import Signup_as_a from "./Pages/Signup_as_a/Signup_as_a.jsx";
import Contact_Us from "./Components/Contact_Us/Contact_Us.jsx";
import Generate_Blood_Request from "./Components/Recipient_Components/Generate_Blood_Request/Generate_Blood_Request.jsx";
import Generate_Event from "./Components/Organization_component/Generate_Event/Generate_Event.jsx";
import All_Blood_Request from "./Components/All_Blood_Request/All_Blood_Request.jsx";
import All_Donors from "./Components/All_Donors/All_Donors.jsx";
import Specific_Recipient from "./Components/Specific_Recipient/Specific_Recipient.jsx";
import Specific_Donor from "./Components/Specific_Donor/Specific_Donor.jsx";
import D_All_Event from "./Components/Donor_components/D_All_Event/D_All_Event.jsx";
import R_All_Event from "./Components/Recipient_Components/R_All_Event/R_All_Event.jsx";
import R_Blog from "./Components/Recipient_Components/R_Blog/R_Blog.jsx";
import D_Blog from "./Components/Donor_components/D_Blog/D_Blog.jsx";
import O_All_Donors from "./Components/Organization_component/O_All_Donors/O_All_Donors.jsx";
import O_Blog from "./Components/Organization_component/O_Blog/O_Blog.jsx";
import O_About_us from "./Components/Organization_component/O_About_us/O_About_us.jsx";
import R_About_us from "./Components/Recipient_Components/R_About_us/R_About_us.jsx";
import D_About_us from "./Components/Donor_components/D_About_us/D_About_us.jsx";
import O_Your_Event from "./Components/Organization_component/O_Your_Event/O_Your_Event.jsx";
import D_History from "./Components/Donor_components/D_History/D_History.jsx";
import D_Specific_Organization from "./Components/Donor_components/D_Specific_Organization/D_Specific_Organization.jsx";
import R_Specific_Organization from "./Components/Recipient_Components/R_Specific_Organization/R_Specific_Organization.jsx";
import Landing_Page11 from "./Pages/Landing_Page11.jsx";
import D_Messanger from "./Components/Donor_components/D_Messanger.jsx";
import R_Messanger from "./Components/Recipient_Components/R_Messanger.jsx";
import O_Specific_Donor from "./Components/Organization_component/O_Specific_Donor/O_Specific_Donor.jsx";
import D_New_Chat_Messanger from "./Components/Donor_components/D_New_Chat_Messanger/D_New_Chat_Messanger.jsx";
import R_new_chat_messanger from "./Components/Recipient_Components/R_new_chat_messanger/R_new_chat_messanger.jsx";
import Landing_Events from "./Pages/Landing_Events.jsx";

import { ToastContainer } from 'react-toastify';
import Blog_1 from './Components/Blog_Single/Blog_1.jsx';
import Blog_2 from './Components/Blog_Single/Blog_2.jsx';
import Blog_3 from './Components/Blog_Single/Blog_3.jsx';
import Blog_4 from './Components/Blog_Single/Blog_4.jsx';
import Blog_5 from './Components/Blog_Single/Blog_5.jsx';
import Hooks_Practice from './Pages/Hooks_Practice.jsx';
// import Blog_5 from './Components/Blog_Single/Blog_5.jsx';

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
        <Route path="/" element={<Landing_Page11 />} />
        <Route path="/signup_as_a" element={<Signup_as_a />} />
        <Route path="/login_as_a" element={<Login_as_a />} />
        <Route path="/donor_signup" element={<Donor_SignUp />} />
        <Route path="/recipient_signup" element={<Recipient_Signup />} />
        <Route path="/organization_signup" element={<Organization_Signup />} />
        <Route path="/donor_login" element={<Donor_Login />} />
        <Route path="/recipient_login" element={<Recipient_login />} />
        <Route path="/organization_login" element={<Organization_Login />} />
        <Route path="/all_blogs" element={<Blog_All />} />
        <Route path="/blog_1" element={<Blog_1 />} />
        <Route path="/blog_2" element={<Blog_2 />} />
        <Route path="/blog_3" element={<Blog_3 />} />
        <Route path="/blog_4" element={<Blog_4 />} />
        <Route path="/blog_5" element={<Blog_5 />} />
        <Route path="/about_us" element={<About_Us />} />
        <Route path="/contact_us" element={<Contact_Us />} />
        <Route path="/all_events" element={<Landing_Events />} />
        <Route path="/hooks" element={<Hooks_Practice />} />

        {/* Redirect if accessing unauthorized routes */}
        <Route path="/*" element={<Unauthorized_user message="Page Not Found" url="" />} />



        {/* Role-Based Routes */}

        {userRole === "donor" && (
          <>
            <Route path="/donor" element={<Donor_landing_page />} />

            <Route path="/all_blood_request" element={<All_Blood_Request />} />

            <Route path="/specific_blood_request" element={<Specific_blood_request_on_donor />} />

            <Route path="/donor_all_event" element={<D_All_Event />} />

            <Route path="/specific_recipient" element={<Specific_Recipient />} />

            <Route path="/specific_organization" element={<D_Specific_Organization />} />

            <Route path="/donor_blog" element={<D_Blog />} />

            <Route path="/donor_about_us" element={<D_About_us />} />

            <Route path="/donor_history" element={<D_History />} />

            <Route path="/new_chat_messanger" element={<D_New_Chat_Messanger />} />
            <Route path="/messanger" element={<D_Messanger />} />

            {/* Redirect if accessing unauthorized routes */}
            <Route path="/*" element={<Unauthorized_user message="Page Not Found" url="" />} />

          </>
        )}

        {userRole === "recipient" && (
          <>
            <Route path="/recipient" element={<Recipient_landing_page />} />
            <Route path="/add_new_blood_Request" element={<Add_New_Blood_Request />} />
            <Route path="/generate_blood_request" element={<Generate_Blood_Request />} />

            <Route path="/all_blood_requests" element={<Blood_Requests_of_recipient />} />


            <Route path="/all_donors" element={<All_Donors />} />
            <Route path="/specific_donor" element={<Specific_Donor />} />

            <Route path="/recipient_specific_organization" element={<R_Specific_Organization />} />

            <Route path="/recipient_all_event" element={<R_All_Event />} />
            <Route path="/recipient_blog" element={<R_Blog />} />

            <Route path="/recipient_about_us" element={<R_About_us />} />

            <Route path="/new_chat_messanger_with_donor" element={<R_new_chat_messanger />} />
            <Route path="/messanger" element={<R_Messanger />} />

            {/* Redirect if accessing unauthorized routes */}
            <Route path="/*" element={<Unauthorized_user message="Page Not Found" url="" />} />

          </>
        )}

        {userRole === "organization" && (
          <>
            <Route path="/organization" element={<Oraganization_Landing />} />
            <Route path="/add_new_event" element={<Add_New_Event />} />
            <Route path="/generate_event" element={<Generate_Event />} />

            <Route path="/organization_all_donors" element={<O_All_Donors />} />

            <Route path="/specific_donor" element={<O_Specific_Donor />} />

            <Route path="/organization_blog" element={<O_Blog />} />

            <Route path="/organization_about_us" element={<O_About_us />} />

            <Route path="/organization_your_event" element={<O_Your_Event />} />

            {/* Redirect if accessing unauthorized routes */}
            <Route path="/*" element={<Unauthorized_user message="Page Not Found" url="" />} />

          </>
        )}

        {/* {userRole === "admin" && (
          <>
            <Route path="/view_all_requests" element={<View_All_Requests />} />
            <Route path="/view_all_events" element={<View_All_Events />} />


            Redirect if accessing unauthorized routes
            <Route path="/*" element={<Unauthorized_user message="ha g ki haal hai" url="" />} />

          </>
        )} */}

        {/* Unauthorized Route */}
        <Route path="/unauthorized" element={<Unauthorized_user />} />



      </Routes>



      <ToastContainer />




    </>
  )
}

export default App
