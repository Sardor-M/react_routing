import { redirect } from "react-router-dom";

export default function requireAuth() {
  const isLoggedin = localStorage.getItem("token");

  if (!isLoggedin) {
    throw redirect("/login?message=Please login in first ");
  }
}
