import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom"; 

import { Home } from "./pages/Home"; // Use the imported Home component
import { Cart } from "./pages/Cart";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/Login";
import { GetStarted } from "./pages/GetStarted";

function AppContent() {
    const location = useLocation();

    return (
        <div 
            id="root"
            className={location.pathname === "/signup" ? "signup" : ""}
        >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/GetStarted" element={<GetStarted />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;