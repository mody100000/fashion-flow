import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./pages/loginForm";
import HomePage from "./pages/home/Home";
import CategoriesPage from "./pages/Categories";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      {/* TODO: create a component in folder views to represent the login page */}
      <Route path="/login" element={<LoginForm />} />
      {/* TODO: add 404 page */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default Router;
