import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/loginForm";
import HomePage from "./pages/home/Home";
import CategoriesPage from "./pages/Categories";
import requireAuth from "./components/requireAuth";
const Router = () => {
  return (
    //"react-router-dom": "^6.4.2",
    <Routes>
      <Route path="/" element={requireAuth(HomePage)} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/login" element={<LoginForm />} />
      {/* TODO: add 404 page */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default Router;
