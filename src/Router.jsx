import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/loginForm";
import HomePage from "./pages/home/Home";
import CategoriesPage from "./pages/Categories";
import requireAuth from "./components/requireAuth";
import ProductsPage from "./pages/Products";
import LandingPage from "./pages/Landing/index";
import CustomersPage from "./pages/Customers";
import ReceiptPage from "./pages/Receipt/index";
import Logout from "./pages/Logout/index";
import NotFound from "./components/notFound.jsx";
const Router = () => {
  return (
    //"react-router-dom": "^6.4.2",
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard" element={requireAuth(HomePage)} />
      <Route path="/categories" element={requireAuth(CategoriesPage)} />
      <Route path="/products" element={requireAuth(ProductsPage)} />
      <Route path="/customers" element={requireAuth(CustomersPage)} />
      <Route path="/receipts" element={requireAuth(ReceiptPage)} />
      <Route path="*" element={<NotFound />} />
      {/* TODO: add 404 page */}
      {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
    </Routes>
  );
};

export default Router;
