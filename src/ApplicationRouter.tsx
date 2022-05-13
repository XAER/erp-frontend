import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";

const ApplicationRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default ApplicationRouter;
