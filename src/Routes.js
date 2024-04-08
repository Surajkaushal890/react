import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageMain from "./pages/home/HomePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
