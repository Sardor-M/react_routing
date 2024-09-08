import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../atoms/Input/Input";
import axios from "axios";
import { userSchema } from "../../schemas/userSchemas";
import Label from "../atoms/Label";

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
const FormTitleElement = styled.h1`
  display: flex;
  font-size: 20px;
  margin-bottom: -10px;
`;
const StyledForm = styled.form`
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 5px;
`;

const StyledSection = styled.section`
  margin-bottom: 20px;
`;

const FormTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #333;
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

const SiginTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  font-size: 14px;
`;

const SignInLink = styled(Link)`
  margin-left: auto;
  font-size: 14px;
  color: #6200ee;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: rgb(34, 34, 255);
  }
`;

const LinkLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

export default function RegisterPage() {
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
        <Container>
          <FormTitle>Successfully registered! </FormTitle>
          <p>
            <Link to="/login">Back to Login page</Link>
          </p>
        </Container>
      ) : (
        <Container>
          <FormWrapper>
            <LogoImg src="/image" alt="logo"></LogoImg>
            <StyledForm onSubmit={handleSubmit}>
              <FormTitle>Register a new accout: </FormTitle>
              <StyledSection>
                <InputWrapper>
                  <LabelContainer>
                    <Label htmlFor="email">Email (ID): </Label>
                  </LabelContainer>
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
                    // error={errors.email ? "Please enter a valid email" : ""}
                    required
                  />
                </InputWrapper>
              </StyledSection>
              <StyledSection>
                <InputWrapper>
                  <LabelContainer>
                    <Label htmlFor="username">Username: </Label>
                  </LabelContainer>
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
                    // error={errors.email ? "Please enter a valid email" : ""}
                    required
                  />
                </InputWrapper>
              </StyledSection>
              <StyledSection>
                <InputWrapper>
                  <LabelContainer>
                    <Label htmlFor="password">Password: </Label>
                  </LabelContainer>
                </InputWrapper>
                <Input
                  name="password"
                  error={pwdIsNotEqual}
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  // error={errors.email ? "Please enter a valid email" : ""}
                  required
                />
              </StyledSection>
              <StyledSection>
                <InputWrapper>
                  <LabelContainer>
                    <Label htmlFor="confirmPassword">Confirm Password: </Label>
                  </LabelContainer>
                </InputWrapper>
                <Input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  error={pwdIsNotEqual}
                  type="checkpassword"
                  id="check-password"
                  placeholder="Re-enter your Password "
                  onChange={handleChange}
                  // onBlur={(e) => handleConfirmPassword(e)}
                  // error={errors.email ? "Please enter a valid email" : ""}
                  required
                />
              </StyledSection>

              <SignInButton type="submit">Sign up </SignInButton>
              <SiginTextContainer>
                <LinkLabel>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </LinkLabel>
                <SignInLink to="/login">Sign in</SignInLink>
              </SiginTextContainer>
            </StyledForm>
          </FormWrapper>
        </Container>
      )}
    </>
  );
}
