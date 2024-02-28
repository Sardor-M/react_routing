import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Runners, {
  loader as runnersEventLoader,
} from "../pages/Runners/Runners";
import RunnersDetail from "../pages/Runners/RunnersDetail";
import Layout from "../components/Layout";
import EventsPage from "../pages/Events/EventsPage";
import DashboardPage from "../pages/Events/DashboardPage";
import ReviewsPages from "../pages/Events/ReviewsPage";
import Upcoming from "../pages/Events/Upcoming";
import UpcomingDetails from "../pages/Events/UpcomingDetails";
import EventLayout from "../components/EventLayout";
import UpcomingEventDetailsPhotos from "../pages/Events/UpcomingEventPhotos";
import UpcomingEventDetails from "../pages/Events/UpcomingEventDetails";
import NotFound from "../components/NotFound";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "../components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />

      <Route path="runner">
        <Route
          index
          element={<Runners />}
          loader={runnersEventLoader}
          errorElement={<Error />}
        />
        <Route path=":id" element={<RunnersDetail />} />
      </Route>

      {/* difference  */}

      {/* <Route
        path="runner"
        element={<Runners />}
        loader={runnersEventLoader}
        errorElement={<Error />}
      />
      <Route path=":id" element={<RunnersDetail />} /> */}

      <Route path="events" element={<EventLayout />}>
        <Route index element={<EventsPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="review" element={<ReviewsPages />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="upcoming/:id" element={<UpcomingDetails />}>
          <Route index element={<UpcomingEventDetails />} />
          <Route path="photos" element={<UpcomingEventDetailsPhotos />} />
        </Route>
      </Route>
    </Route>
  )
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
