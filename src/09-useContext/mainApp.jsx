import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { NavBar } from "./NavBar";
import { UseProvider } from "./context/UseProvider";

export const MainApp = () => {
    return (
        <UseProvider>
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </UseProvider>
        
    )
}
