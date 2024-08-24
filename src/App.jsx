import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Admin from "./pages/admin/Admin";
import Layout from "./components/layout/Layout";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Single />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
