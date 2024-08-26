import { redirect } from "react-router-dom";

export default function requireAuth() {
  const isLogged = true;
  if (!isLogged) {
    throw redirect("/login?message=Please login in first ");
  }
  return null; // return null if the user is logged in
}
