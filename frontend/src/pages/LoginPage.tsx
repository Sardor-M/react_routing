import React, { useState } from "react";
import { useLoaderData } from "react-router";

type RequestType = {
  url: React.ReactNode;
};

// acessing the Request object which is a native browser object
// and we are extracting  a new URL from the request object
export async function loader({ request }: { request: Request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function LoginPage() {
  const messageData = useLoaderData() as string | "";

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h1> Sign in to your account</h1>
      {messageData && <h3 className="login-text">{messageData} </h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={loginData?.email}
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="pasword"
          name="password"
          placeholder="password"
          required
          value={loginData?.password}
          onChange={handleChange}
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
