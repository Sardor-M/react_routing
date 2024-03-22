import {useCallback, useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {TextProps} from "../types";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormTitleElement = styled.h1`
  margin: 20px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 145px;
  margin: 10px;
`;

const InputFieldElement = styled.input`
  width: 150%;
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
const SubmitButton = styled.button`
  width: 150%;
  padding: 9px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  background-color: #f5a646;
  color: #000000;
  font-size: 18px;
  transition: all .5s ease;
  text-align: center;
  
  &:hover {
    color: #161616;
    background-color: #1ea7fd;
  }
`;

const SignInLink = styled.p`
  color: #e17654;
  font-size: 14px;
  margin-top: 10px;
`;

const Text = styled.p<TextProps>`
    color: ${(props) => props.color};
    position: ${(props) => props.position};
    font-size: 14px;
    margin-top: 10px;

`;

const REGISTER_URL = "http://localhost:4000/api/register";

const USER_REGEX = /^[a-zA-Z0-9]{3,20}$/;
const PWD_REGEX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*W)(?!.* ).{8,16}$/;

export default function SignUpPage() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    setValidUser(result);
  }, [user]);

  useEffect(() => {
    const result1 = PWD_REGEX.test(pwd);

    console.log(result1);
    setValidPwd(result1);

    // password matching
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrorMsg("");
  }, [pwd, user, matchPwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const result1 = USER_REGEX.test(user);
    const result2 = PWD_REGEX.test(pwd);

    if (!result1 || !result2) {
      setErrorMsg("Invalid Entry is detected");
      return;
    }

    try {
      const registerData = new FormData();
      registerData.append("user", user);
      registerData.append("pwd", pwd);
      console.log(registerData);

      const response = await fetch(REGISTER_URL, {
        method: "POST",
        body: JSON.stringify({ registerData }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
        setSuccess(true);
      } else {
        setErrorMsg("Failed to register.");
      }
    } catch (err) {
      setErrorMsg("Registration failed. Please try again.");
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Successfully Logged in ! </h1>
          <p>
            {errorMsg}
            <Link to="/login">Back to Login page</Link>
          </p>
        </section>
      ) : (
        <SectionContainer>
          <p
            ref={emailRef}
            className={errorMsg ? "errorMsg" : "assertive"}
            aria-live="assertive"
            // aria-atomic="false"
          ></p>

          <FormContainer onSubmit={handleSubmit}>
            <FormTitleElement>Sign Up  </FormTitleElement>
            <InputFieldElement
              type="username"
              id="username"
              placeholder="Username"
              aria-describedby="uidnote"
              aria-invalid={validUser ? "false" : "true"}
              ref={emailRef}
              value={user}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setValidUser(true)}
              required
            />
            <InputFieldElement
              type="password"
              id="password"
              placeholder="Password"
              // aria-invalid={validPwd ? " false" : "true"}
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              required
            />
            <InputFieldElement
              type="password"
              id="password"
              placeholder="Re-enter your Password "
              onChange={(e) => setMatchPwd(e.target.value)}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              required
            />
            {
              error && (
                <Text color="red" position="absolute">
                  {error}
                </Text>
                )
            }
            <SubmitButton>Sign up </SubmitButton>
            <SignInLink>
              {" "}
              Already have an account ?
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                {" "}
                Sign-in
              </Link>
            </SignInLink>
          </FormContainer>
        </SectionContainer>
      )}
    </>
  );
}
