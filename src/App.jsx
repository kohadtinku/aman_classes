import React from "react";
import Home from './components/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MultiStepForm from "./pages/MultiStepForm";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<MultiStepForm />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;