import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginPageTitle = styled.h1`
  display: flex;
  font-size: 22px;
`;

const StyledForm = styled.form`
  //position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 165px;
  margin: 10px;
`;

const SignInButton = styled.button`
  width: 103%;
  padding: 9px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  background-color: #f5a646;
  color: #000000;
  font-size: 18px;
  transition: all .5s ease;
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
  //position: fixed;
  margin-right: 123px;
  //left: 537px;
  //top: 528px;
  text-align: left;
`;


// accessing the Request object which is a native browser object
// we are extracting  a new URL from the request object
export async function loader({ request }: { request: Request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function LoginPage() {

  const messageData = useLoaderData() as string | "";

  const [inputValues, setInputValues] = useState<{email: string, password: string}>({email: "", password: ""});
  const [didEdit, setDidEdit] = useState<{email: boolean, password: boolean}>({email: false, password: false});

  const emailIsValid = didEdit.email && !inputValues.email.includes("@");
  const pwdIsValid = didEdit.password && inputValues.password.trim().length < 8;


  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(inputValues);
  }
  function handleInputChange(identifier: string, event: React.ChangeEvent<HTMLInputElement>){
    setInputValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value
    }))

    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier: string){
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true
    }))
  }

  return (
    <>
      {/*{messageData && <h3 className="login-text">{messageData} </h3>}*/}
      <SectionContainer>
      <StyledForm onSubmit={handleSubmit}>
        <LoginPageTitle>Sign in to your account</LoginPageTitle>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event)}
            error = {emailIsValid ? "Please enter a valid email": ""}
          />
            <Input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onBlur={() => handleInputBlur("password")}
                onChange = {(event) => handleInputChange("password", event)}
                error={pwdIsValid ? "Enter a valid password": ""}
            />
          {/*// when working with forms, always use the type="button" to avoid the default behavior of the form*/}
          <SignInButton type="submit">Login</SignInButton>
          <SignUpLink>
            Not Registered yet ?{" "}
            <Link
              to={"/signup"}
              style={{ color: "inherit", textDecoration: "underline", marginLeft: "3px" }}
            >
              Sign Up
            </Link>
          </SignUpLink>
      </StyledForm>
      </SectionContainer>
    </>
  );
}
