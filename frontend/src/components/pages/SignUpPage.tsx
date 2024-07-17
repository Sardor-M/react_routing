import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../atoms/Input/Input";
import axios from "axios";
import { userSchema } from "../../schemas/userSchemas";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormTitleElement = styled.h1`
  display: flex;
  font-size: 20px;
  margin-bottom: -10px;
`;
const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 110px;
  padding-bottom: 201px;
  max-width: 400px;
  /* margin: 10px; */
`;

const SubmitButton = styled.button`
  width: 62%;
  padding: 12px;
  margin-top: 8px;
  border: none;
  border-radius: 5px;
  background-color: #0f32fa;
  color: #ffffff;
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
  align-self: center;
  text-align: center;
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

interface FormInterfae {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  // const [userName, setUserName] = useState<string>("");
  // const [emailValue, setEmailValue] = useState<string>("");
  // const [pwdValue, setPwdValue] = useState<string>("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [pwdIsNotEqual, setPwdIsNotEqual] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string[]>([]);
  const [confirmPwdValue, setConfirmPwdValue] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = userSchema.safeParse(formData);
    console.log(result);

    // if (formData.password !== formData.confirmPassword) {
    //   setPwdIsNotEqual(true);
    //   return;
    // }
    if (!result.success) {
      setError(result.error.errors.map((error) => error.message));
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        result.data
      );
      console.log("response", response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to sign up", error);
    }
  }

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPwdValue(e.target.value);
    if (e.target.value !== formData.password) {
      setPwdIsNotEqual(true);
    } else {
      setPwdIsNotEqual(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Successfully registered! </h1>
          <p>
            <Link to="/login">Back to Login page</Link>
          </p>
        </section>
      ) : (
        <SectionContainer>
          <FormContainer onSubmit={handleSubmit}>
            <FormTitleElement>Sign Up - New Account </FormTitleElement>
            <Input
              name="email"
              // error={formData.email}
              type="email"
              id="email"
              placeholder="Email"
              aria-describedby="uidnote"
              value={formData.email}
              autoComplete="off"
              onChange={handleChange}
              required
            />
            <Input
              name="username"
              // error={pwdIsNotEqual}
              type="username"
              id="username"
              placeholder="Username"
              aria-describedby="uidnote"
              value={formData.username}
              autoComplete="off"
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              error={pwdIsNotEqual}
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Input
              name="confirmPassword"
              value={formData.confirmPassword}
              error={pwdIsNotEqual}
              type="password"
              id="check-password"
              placeholder="Re-enter your Password "
              onChange={handleChange}
              onBlur={(e) => handleConfirmPassword(e)}
              required
            />
            <ControlError>
              {pwdIsNotEqual && (
                <p>Password entered does not match. Try again.</p>
              )}
            </ControlError>
            <SubmitButton type="submit">Sign up </SubmitButton>
            <div>
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
            </div>
          </FormContainer>
        </SectionContainer>
      )}
    </>
  );
}
