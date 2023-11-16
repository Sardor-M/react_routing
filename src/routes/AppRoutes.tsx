import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import App from "../App";
import MainPage from "../pages/MainPage";

export default function AppRoutes() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
};