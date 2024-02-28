import React, { useState } from "react";
// import { Events } from "../types";

export default function LoginPage() {
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
