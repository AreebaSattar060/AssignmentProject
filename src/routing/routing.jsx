import React from 'react';
import SignUp from '../pages/signUp';
import AddButton from '../pages/addButton';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from '../pages/Calculator/Calculator';

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Button" element={<AddButton />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
