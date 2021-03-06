import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ContentWarp from "./components/Warpper/ContentWarp";
import { HomePage, Detail } from "./page";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ContentWarp content={HomePage} />} />
        <Route path="/Detail" element={<ContentWarp content={Detail} />} />
      </Routes>
    </>
  );
}
