import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthRoute } from "./helpers/AuthRoute";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { useState } from "react";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
