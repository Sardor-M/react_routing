import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../atoms/Input/Input";
import { useInput } from "../../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../../utils/validation";
import axios from "axios";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginPageTitle = styled.h1`
  display: flex;
  font-size: 20px;
  margin-bottom: -10px;
`;

const StyledForm = styled.form`
  //position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 110px;
  padding-bottom: 255px;
  margin: 10px;
`;

const SignInButton = styled.button`
  width: 110%;
  padding: 12px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  background-color: #0f32fa;
  color: #ffffff;
  font-size: 18px;
  transition: all 0.5s ease;
  text-align: center;

  &:hover {
    color: #000000;
    background-color: #1ea7fd;
  }
`;
const SignUpLink = styled.p`
  color: #e17654;
  font-size: 14px;
  margin-top: 10px;
  margin-left: -20px;
  margin-right: 41px;
  overflow: auto;
`;

// accessing the Request object which is a native browser object
// we are extracting  a new URL from the request object
export async function loader({ request }: { request: Request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function LoginPage() {
  // set the input values for both email and password

  const [success, setSuccess] = useState<boolean>(false);

  const {
    values: inputValues,
    handleInputChange: handleBothInputChanges,
    handleInputBlur: handleBothInputBlur,
    hasAnError: hasError,
  } = useInput(
    {
      email: "",
      password: "",
    },
    (events) =>
      hasMinLength(events.password, 6) &&
      isNotEmpty(events.email) &&
      isEmail(events.email)
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        inputValues,
        { withCredentials: true }
      );
      setSuccess(true);
      console.log("User logged in", response.data);
    } catch (error) {
      console.error("Failed to login", error);
    }
  }
  return (
    <>
      {success ? (
        <section>
          <h1> Successfully logged in</h1>
          <p>
            <Link to="/mypage">Go to My Account Page</Link>
          </p>
        </section>
      ) : (
        <SectionContainer>
          <StyledForm onSubmit={handleSubmit}>
            <LoginPageTitle>Sign in to your account</LoginPageTitle>
            <Input
              value={inputValues.email}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onBlur={handleBothInputBlur}
              onChange={handleBothInputChanges}
              error={hasError ? "Please enter a valid email" : ""}
            />
            <Input
              value={inputValues.password}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handleBothInputBlur}
              onChange={handleBothInputChanges}
              error={hasError ? "Enter a valid password" : ""}
            />
            {/*// when working with forms, always use the type="button" to avoid the default behavior of the form*/}
            <SignInButton type="submit">Login</SignInButton>
            <SignUpLink>
              Not Registered yet ?{" "}
              <Link
                to={"/register"}
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Sign Up
              </Link>
            </SignUpLink>
          </StyledForm>
        </SectionContainer>
      )}
    </>
  );
}
