import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

import Admin from "./components/Admin";
import Register from "./components/Register";
import Admindashboard from "./components/Admindashboard";
import Addtreatment from "./components/Addtreatment";
import Deletetreatment from "./components/Deletetreatment";
import Edittreatment from "./components/Edittreatment";
import Treatments from "./components/Treatments";
import Bookappointment from "./components/Bookappointment";
import Viewtreatments from "./components/Viewtreatments";
import Viewappointments from "./components/Viewappointments";
import Askexpert from "./components/Askexpert";
import Viewquestions from "./components/Viewquestions";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id" element={<ResetPassword />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/bookappointment" element={<Bookappointment />} />
        <Route path="/askexpert" element={<Askexpert />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/admindashboard" element={<Admindashboard />}>
          <Route path="addtreatment" element={<Addtreatment />} />
          <Route path="deletetreatment" element={<Deletetreatment />} />
          <Route path="edittreatment" element={<Edittreatment />} />
          <Route path="viewtreatments" element={<Viewtreatments />} />
          <Route path="viewappointments" element={<Viewappointments />} />
          <Route path="viewquestions" element={<Viewquestions />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
