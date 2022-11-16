import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Order from "./pages/Order"

import Layout from "./components/Layout/Layouts/Layout";
import Register from "./pages/Register";
import Home from "./pages/Home";

function Router() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/Order"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        />

        <Route
          path="/Register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />

       
      </Routes>
    </div>
  );
}

export default Router;
