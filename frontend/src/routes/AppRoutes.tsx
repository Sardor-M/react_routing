import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import ContactPage, {
  loader as contactUsPageLoader,
} from "../components/pages/ContactPage";
import Runners from "../components/pages/Past_Events/PastEvents";
import RunnersDetail from "../components/pages/Past_Events/PastEventDetails";
import Layout from "../components/Layout";
import DashboardPage, {
  loader as dashboardLoader,
} from "../components/pages/Events/DashboardPage";
import ReviewsPages, {
  loader as reviewsLoader,
} from "../components/pages/Events/ReviewsPage";
import UpcomingEventsList from "../components/pages/Events/UpcomingEventsList";
import UpcomingDetails from "../components/pages/Events/UpcomingEventsCard";
import EventLayout from "../components/EventLayout";
import UpcomingEventDetailsPhotos from "../components/pages/Events/UpcomingEventsPhotos";
import UpcomingEventDetails from "../components/pages/Events/UpcomingEventsDetails";
import NotFound from "../components/NotFound";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "../components/atoms/Error/RouterError/ErrorRouter";
import LoginPage, {
  loader as loginPageLoader,
} from "../components/pages/LoginPage";
import SignUpPage from "../components/pages/SignUpPage";
import EventSearchPage from "../components/pages/Events/EventSearchPage";
import { FilterProvider } from "../hooks/FilterContext";
import { AuthProvider } from "../context/AuthContext";

const onSubmit = (form: { name: string; email: string; message: string }) => {
  console.log(form);
  return form;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="homepage" element={<HomePage images={[]} />} />
      {/*  */}
      <Route
        path="contact"
        element={<ContactPage onSubmit={onSubmit} />}
        loader={contactUsPageLoader}
      />
      <Route path="/login" element={<LoginPage />} loader={loginPageLoader} />
      <Route
        path="/register"
        element={<SignUpPage />}
        errorElement={<Error />}
      />

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
          element={<EventSearchPage />}
          // element={<EventsPage />}
          //  loader={async () => {
          //     return requireAuth();
          // }}
        />

        <Route
          path="dashboard"
          element={<DashboardPage />}
          // loader={dashboardLoader}
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
  return (
    <>
      {/* <ThemeProvider theme={{}}> */}
      <AuthProvider>
        <FilterProvider>
          <RouterProvider router={router} />
        </FilterProvider>
      </AuthProvider>
      {/* </ThemeProvider> */}
    </>
  );
}
