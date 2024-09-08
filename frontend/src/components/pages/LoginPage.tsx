import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../atoms/Input/Input";
import { useInput } from "../../hooks/useInput";
import { isEmail, isNotEmpty, hasMinLength } from "../../utils/validation";
import axios from "axios";
import Label from "../atoms/Label";

import kakaotalk from "../../assets/images/kakaotalk.png";
import github from "../../assets/images/github_1.png";
import google from "../../assets/images/search.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 40px; */
  padding-bottom: 40px;
  min-height: 100vh;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const FormWrapper = styled.div`
  width: 450px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
  text-align: center;
`;

const LogoImg = styled.img`
  width: 80px;
  margin-bottom: 20px;
`;

const FormTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #333;
`;

const StyledForm = styled.form`
  /* display: flex; */
  flex-direction: column;
  /* gap: 15px; */
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 5px;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
`;

const RememberMeCheckbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const ForgotPasswordLink = styled(Link)`
  margin-left: auto;
  font-size: 14px;
  color: #6200ee;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: rgb(34, 34, 255);
  }
`;

const StyledSection = styled.section`
  margin-bottom: 20px;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #6200ee;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #531ec2;
  }
`;

const SocialLoginContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const SocialButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 50px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  /* margin: 0 10px; */
`;

const SocialButtonIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const SignupLink = styled(Link)`
  width: 100%;
  padding: 12px;
  margin-top: 30px;
  font-size: 16px;
  color: #6200ee;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #6200ee;
  border-radius: 5px;
  padding: 10px 20px;

  &:hover {
    background-color: #d9bdff;
  }
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
    errors,
  } = useInput(
    {
      email: "",
      password: "",
    },
    (events) => ({
      email: isEmail(events.email) && isNotEmpty(events.email),
      password: hasMinLength(events.password, 6),
    })
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
        <Container>
          <FormTitle> Successfully logged in</FormTitle>
          <p>
            <Link to="/mypage">Go to My Account Page</Link>
          </p>
        </Container>
      ) : (
        <Container>
          <FormWrapper>
            <LogoImg src="/image" alt="logo"></LogoImg>
            <FormTitle>Sign in to your account</FormTitle>
            <StyledForm onSubmit={handleSubmit}>
              <StyledSection>
                <InputWrapper>
                  <LabelContainer>
                    <Label htmlFor="email">Email (ID): </Label>
                  </LabelContainer>
                  <Input
                    value={inputValues.email}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onBlur={handleBothInputBlur}
                    onChange={handleBothInputChanges}
                    error={errors.email ? "Please enter a valid email" : ""}
                  />
                </InputWrapper>
              </StyledSection>
              <StyledSection>
                <InputWrapper>
                  <LabelContainer>
                    <Label htmlFor="password">Password: </Label>
                  </LabelContainer>
                  <Input
                    value={inputValues.password}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onBlur={handleBothInputBlur}
                    onChange={handleBothInputChanges}
                    error={errors.password ? "Enter a valid password" : ""}
                  />
                </InputWrapper>
              </StyledSection>
              <CheckboxContainer>
                <RememberMeCheckbox>
                  <input type="checkbox" id="rememberMe" />
                  Keep me logged in
                </RememberMeCheckbox>
                <ForgotPasswordLink to="/forgotPassword">
                  Find password
                </ForgotPasswordLink>
                {/*// when working with forms, always use the type="button" to avoid the default behavior of the form*/}
              </CheckboxContainer>
              <SignInButton type="submit">Login</SignInButton>
            </StyledForm>
            <SocialLoginContainer>
              <p> Login with the following options: </p>
              <div>
                <SocialButtonWrapper>
                  <SocialButton>
                    <SocialButtonIcon src={google} alt="go0gle icon" />
                  </SocialButton>
                  <SocialButton>
                    <SocialButtonIcon src={github} alt="github icon" />
                  </SocialButton>
                  <SocialButton>
                    <SocialButtonIcon src={kakaotalk} alt="kakaotalk icon" />
                  </SocialButton>
                </SocialButtonWrapper>
              </div>
            </SocialLoginContainer>
            <StyledSection>
              <SignupLink to="/register">Sign Up</SignupLink>
            </StyledSection>
          </FormWrapper>
        </Container>
      )}
    </>
  );
}
