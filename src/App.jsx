import React from "react";
import Home from './components/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MultiStepForm from "./pages/MultiStepForm";
import Register from "./pages/Register";
import Table from "./pages/Table";
import Contact from "./pages/Contact";
import AdmissionEnquiry from "./pages/AdmissionEnquiry";
import About from "./pages/About";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/apply" element={<MultiStepForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fee-structure" element={<Table />} />
          <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;