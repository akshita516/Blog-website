// src/App.js
import React from "react";
import TopBar from "./components/topBar/TopBar";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import Write from "./components/write/Write";
import Setting from "./components/pages/settings/setting";
import Single from "./components/pages/single/Single.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  const user = true;

  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
        <Route path="/write" element={user ? <Write /> : <Navigate to="/login" />} />
        <Route path="/settings" element={user ? <Setting /> : <Navigate to="/login" />} />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
    </>
  );
}
