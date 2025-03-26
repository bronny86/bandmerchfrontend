import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Home } from "./pages/index"; // Use the imported Home component
import { Cart } from "./pages/Cart";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/Login";
import { GetStarted } from "./pages/GetStarted";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/index" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/GetStarted" element={<GetStarted />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;