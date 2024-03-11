import React, { useState } from "react";
import { useLoaderData } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

type RequestType = {
  url: React.ReactNode;
};

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  margin: 20px;
`;

const LoginInputData = styled.input`
  width: 180%;
  padding: 13px;
  margin: 15px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 62, 213, 0.1);
  outline: none;

  &:hover {
    box-shadow: 0 0 5px rgba(155, 0, 0, 0.3);
  }
`;

const LoginButton = styled.button`
  width: 180%;
  padding: 9px;
  margin: 15px;
  border: none;
  background-color: #f5a646;
  color: #000000;
  font-size: 18px;
`;
const SignUpLink = styled.p`
  color: #e17654;
  font-size: 14px;
  margin-top: 10px;
`;

// accessing the Request object which is a native browser object
// we are extracting  a new URL from the request object
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

  const handleSignUp = (e: React.FormEvent) => {
    const link = document.links[0];
    console.log(link);
  };

  return (
    <div className="container">
      <h1> Sign in to your account</h1>
      {messageData && <h3 className="login-text">{messageData} </h3>}
      <StyledForm onSubmit={handleSubmit}>
        <LoginInput>
          <LoginInputData
            type="email"
            name="email"
            placeholder="Email"
            required
            value={loginData?.email}
            onChange={handleChange}
          />
          <LoginInputData
            type="pasword"
            name="password"
            placeholder="Password"
            required
            value={loginData?.password}
            onChange={handleChange}
          />
          <LoginButton type="submit" onClick={handleSubmit}>
            Login
          </LoginButton>
          <SignUpLink onClick={handleSignUp}>
            Not Registered yet ?{" "}
            <Link
              to={"/signup"}
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Sign Up
            </Link>
          </SignUpLink>
        </LoginInput>
      </StyledForm>
    </div>
  );
}
