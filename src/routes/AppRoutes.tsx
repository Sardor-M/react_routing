import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Runners from "../pages/Runners/Runners";
import RunnersDetail from "../pages/Runners/RunnersDetail";
import Layout from "../components/Layout";
import EventsPage from "../pages/Events/EventsPage";
import DashboardPage from "../pages/Events/DashboardPage";
import ReviewsPages from "../pages/Events/ReviewsPage";
import HostLayout from "../components/EventLayout";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/runner" element={<Runners />} />
          <Route path="/runner/:id" element={<RunnersDetail />} />

          <Route element={<HostLayout />}>
            <Route path="/event" element={<EventsPage />} />
            <Route path="/event/dashboard" element={<DashboardPage />} />
            <Route path="/event/review" element={<ReviewsPages />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
