import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Runners from "../pages/Runners/Runners";
import RunnersDetail from "../pages/Runners/RunnersDetail";
import Layout from "../components/Layout";
import EventsPage from "../pages/Events/EventsPage";
import DashboardPage from "../pages/Events/DashboardPage";
import ReviewsPages from "../pages/Events/ReviewsPage";
// import HostLayout from "../components/EventLayout";
import Upcoming from "../pages/Events/Upcoming";
import UpcomingDetails from "../pages/Events/UpcomingDetails";
import EventLayout from "../components/EventLayout";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="runner">
            <Route index element={<Runners />} />
            <Route path=":id" element={<RunnersDetail />} />
          </Route>

          <Route path="events" element={<EventLayout />}>
            <Route index element={<EventsPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="upcoming/:id" element={<UpcomingDetails />} />
            <Route path="review" element={<ReviewsPages />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
