import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { GetStarted } from "./pages/GetStarted"; // Use named import

import Home from "./pages";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/GetStarted"
                    element={<GetStarted />}
              
                />
                <Route
                    path="/login"
                    element={<LogIn />}
                />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}

export default App;