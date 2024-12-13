import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/ReqAuth";
import Blog from "./Blog";
import Bookings from "./Bookings";
import Checkout from "./Checkout";
import About from "./About";
import Privacy from "./privacy";
import TOS from "./Tos.jsx";
import Help from "./help.jsx";


import Home from "./Home";
import LandingPage from "./LandingPage";
import ServicePage from "./ServicePage";
import Summary from "./Summary";
import ContactUs from '../Components/form.js'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bookingroute" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/privacy" element={<Privacy />} /> 
        <Route path="/TOS" element={<TOS />} />       
         <Route path="/help" element={<Help />} /> 



        <Route path="/:city" element={<Home />} />
        <Route path="/:city/:id/services" element={<ServicePage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookingroute" element={<ContactUs />} />
        <Route path="/appliances" element={<h1> yo </h1>} />
        <Route path="/:city/summary" element={<Summary />} />
        <Route
          path="/:city/summary/checkout"
          element={
            <ReqAuth>
              <Checkout />
            </ReqAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
