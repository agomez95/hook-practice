import { Routes, Route, Link } from "react-router-dom"
import { UserProvider } from "./context/UserProvider";

import { Navbar } from "./components/Navbar";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />                
            <hr/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </UserProvider>
    )
}

