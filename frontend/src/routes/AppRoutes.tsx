import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Runners, {
  loader as runnersEventLoader,
} from "../pages/Runners/Runners";
import RunnersDetail, {
  loader as runnerEventDetailsLoader,
} from "../pages/Runners/RunnersDetail";
import Layout from "../components/Layout";
import EventsPage from "../pages/Events/EventsPage";
import DashboardPage from "../pages/Events/DashboardPage";
import ReviewsPages from "../pages/Events/ReviewsPage";
import UpcomingEventsList, {
  loader as upcomingEventsList,
} from "../pages/Events/UpcomingEventsList";
import UpcomingDetails from "../pages/Events/UpcomingEventsCard";
import EventLayout from "../components/EventLayout";
import UpcomingEventDetailsPhotos from "../pages/Events/UpcomingEventsPhotos";
import UpcomingEventDetails from "../pages/Events/UpcomingEventsDetails";
import NotFound from "../components/NotFound";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "../components/Error";
import LoginPage, { loader as loginElementLoader } from "../pages/LoginPage";
import requireAuth from "../utils/utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="login" element={<LoginPage />} loader={loginElementLoader} />

      <Route path="runner">
        <Route
          index
          element={<Runners />}
          loader={runnersEventLoader}
          errorElement={<Error />}
        />
        <Route
          path="runner/:id"
          element={<RunnersDetail />}
          loader={runnerEventDetailsLoader}
          errorElement={<Error />}
        />
      </Route>

      <Route path="events" element={<EventLayout />}>
        <Route
          index
          element={<EventsPage />}
          loader={async () => {
            return requireAuth();
          }}
        />
        <Route
          path="dashboard"
          element={<DashboardPage />}
          loader={async () => {
            requireAuth();
          }}
        />
        <Route
          path="review"
          element={<ReviewsPages />}
          loader={async () => {
            requireAuth();
          }}
        />
        <Route
          path="upcoming"
          element={<UpcomingEventsList />}
          loader={upcomingEventsList}
          errorElement={<Error />}
        />
        <Route
          path="upcoming/:id"
          element={<UpcomingDetails />}
          loader={async () => {
            return requireAuth();
          }}
        >
          <Route
            index
            element={<UpcomingEventDetails />}
            loader={async () => {
              return requireAuth();
            }}
          />
          <Route
            path="photos"
            element={<UpcomingEventDetailsPhotos />}
            loader={async () => {
              return requireAuth();
            }}
          />
        </Route>
      </Route>
    </Route>
  )
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
