import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/nav" element={<Nav/>} /> */}
    </Routes>
  )
} 

