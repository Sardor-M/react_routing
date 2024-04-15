import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  width: 100%;
  padding: 13px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 62, 213, 0.1);
  outline: none;

  &:hover {
    box-shadow: 0 0 5px rgba(247, 88, 204);
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 9px;
  margin-top: 8px;
  border: none;
  border-radius: 5px;
  background-color: #f5a646;
  color: #000000;
  font-size: 18px;
  transition: all 0.5s ease;
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
  margin-right: 116px;
`;

const ControlError = styled.div`
  color: #115e59;
  font-size: 0.8rem;
  height: 2rem;
  padding: 0.5rem 0;

  p {
    margin: 0;
  }
`;
export default function SignUpPage() {
  const [inputValues, setInputValues] = useState<{
    input: string;
    pwd: string;
  }>({
    input: "string",
    pwd: "",
  });
  const [emailValue, setEmailValue] = useState<string>("");
  const [pwdValue, setPwdValue] = useState<string>("");

  const [pwdIsNotEqual, setPwdIsNotEqual] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // const checkBox = formData.getAll("nicknames");
    const data = Object.fromEntries(formData.entries());

    // data.nicknames = checkBox;

    if (data.password !== data["check-password"]) {
      setPwdIsNotEqual(true);
      console.log(pwdIsNotEqual);
      return;
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>Successfully Logged in ! </h1>
          <p>
            <Link to="/login">Back to Login page</Link>
          </p>
        </section>
      ) : (
        <SectionContainer>
          <FormContainer onSubmit={handleSubmit}>
            <FormTitleElement>Sign Up </FormTitleElement>
            <InputFieldElement
              type="username"
              id="username"
              placeholder="Username"
              aria-describedby="uidnote"
              // aria-invalid={validUser ? "false" : "true"}
              // ref={emailRef}
              value={emailValue}
              autoComplete="off"
              onChange={(e) => setEmailValue(e.target.value)}
              // onFocus={() => setUserFocus(true)}
              // onBlur={() => setValidUser(true)}
              required
            />
            <InputFieldElement
              type="password"
              id="password"
              placeholder="Password"
              value={pwdValue}
              // aria-invalid={validPwd ? " false" : "true"}
              onChange={(e) => setPwdValue(e.target.value)}
              // onFocus={() => setPwdFocus(true)}
              // onBlur={() => setPwdFocus(false)}
              required
            />
            <InputFieldElement
              type="password"
              id="check-password"
              placeholder="Re-enter your Password "
              // onChange={(e) => setMatchPwd(e.target.value)}
              // onFocus={() => setMatchFocus(true)}
              // onBlur={() => setMatchFocus(false)}
              required
            />
            <ControlError>
              {pwdIsNotEqual && (
                <p>Password entered does not match. Try again.</p>
              )}
            </ControlError>
            <SubmitButton>Sign up </SubmitButton>
            <SignInLink>
              {" "}
              Already have an account ?
              <Link
                to="/login"
                style={{
                  color: "inherit",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
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
