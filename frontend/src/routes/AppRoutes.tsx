import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage, {
  loader as contactUsPageLoader,
} from "../pages/ContactPage";
import Runners from "../pages/Runners/Runners";
import RunnersDetail from "../pages/Runners/RunnersDetail";
import Layout from "../components/Layout";
import EventsPage from "../pages/Events/EventsPage";
import DashboardPage, {
  loader as dashboardLoader,
} from "../pages/Events/DashboardPage";
import ReviewsPages, {
  loader as reviewsLoader,
} from "../pages/Events/ReviewsPage";
import UpcomingEventsList from "../pages/Events/UpcomingEventsList";
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
import Error from "../components/atoms/Error/RouterError/ErrorRouter";
import LoginPage, { loader as loginPageLoader } from "../pages/LoginPage";
import requireAuth from "../utils/utils";
import SignUpPage from "../pages/SignUpPage";

const onSubmit = (form: { name: string; email: string; message: string }) => {
  console.log(form);
  return form;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage images={[]} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="about" element={<AboutPage />} />
      <Route
        path="contact"
        element={<ContactPage onSubmit={onSubmit} />}
        loader={contactUsPageLoader}
      />
      <Route path="login" element={<LoginPage />} loader={loginPageLoader} />
      <Route path="signup" element={<SignUpPage />} errorElement={<Error />} />

      <Route path="runner">
        <Route index element={<Runners />} errorElement={<Error />} />
        <Route
          path="/runner/:id"
          element={<RunnersDetail />}
          errorElement={<Error />}
        />
      </Route>

      <Route path="events" element={<EventLayout />}>
        <Route
          index
          element={<EventsPage />}
          //  loader={async () => {
          //     return requireAuth();
          // }}
        />
        <Route
          path="dashboard"
          element={<DashboardPage />}
          loader={dashboardLoader}
        />
        <Route
          path="review"
          element={<ReviewsPages />}
          loader={reviewsLoader}
        />
        <Route
          path="upcoming"
          element={<UpcomingEventsList />}
          // loader={upcomingEventLoader}
          // errorElement={<Error />}
        />
        <Route
          path="upcoming/:id"
          element={<UpcomingDetails />}

          // loader={async () => {
          //   return requireAuth();
          // }}
        >
          <Route
            index
            element={<UpcomingEventDetails />}
            // loader={async () => {
            //   return requireAuth();
            // }}
          />
          <Route
            path="photos"
            element={<UpcomingEventDetailsPhotos />}
            // loader={async () => {
            //   return requireAuth();
            // }}
          />
        </Route>
      </Route>
    </Route>
  )
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
