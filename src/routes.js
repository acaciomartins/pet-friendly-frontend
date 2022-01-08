import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Logon from "./pages/Logon";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/logon" element={<Logon />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
