import React from "react";
import Home from './components/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MultiStepForm from "./pages/MultiStepForm";
import Register from "./pages/Register";
import Table from "./pages/Table";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<MultiStepForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fee-structure" element={<Table />} />


        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;