import { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LOGIN_URL = "/auth";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 165px;
  margin: 10px;
`;

const InputField = styled.input`
  width: 140%;
  padding: 13px;
  margin: 15px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 62, 213, 0.1);
  outline: none;

  &:hover {
    box-shadow: 0 0 5px rgba(247, 88, 204);
  }
`;

const SignInButton = styled.button`
  width: 140%;
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
  const errRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const messageData = useLoaderData() as string | "";

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("pwd", pwd);

      const response = await fetch(LOGIN_URL, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to log in.");
      }

      const data = await response.json();
      console.log("Response data:", data);
      setSuccess(true);
    } catch (err) {
      console.log("Login is failed", err);
      setErrMsg("Login Failed, Try again.");
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  return (
    <>
      {/* <h1> Sign in to your account</h1> */}
      {messageData && <h3 className="login-text">{messageData} </h3>}
      <SectionContainer>
      <StyledForm onSubmit={handleSubmit}>
        <LoginPageTitle>Sign in to your account</LoginPageTitle>
          <InputField
            id="email"
            type="text"
            ref={emailRef}
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="password"
            type="password"
            placeholder="Password"
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <SignInButton type="submit">Login</SignInButton>
          <SignUpLink>
            Not Registered yet ?{" "}
            <Link
              to={"/signup"}
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Sign Up
            </Link>
          </SignUpLink>
      </StyledForm>
      </SectionContainer>
    </>
  );
}
