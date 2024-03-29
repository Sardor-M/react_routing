import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Input from "../components/UI/Input";
import {useLoaderData} from "react-router-dom";
import {useInput} from "../hooks/useInput";
import {isEmail, isNotEmpty, hasMinLength} from "../utils/validation";

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const LoginPageTitle = styled.h1`
    display: flex;
    font-size: 22px;
    margin-bottom: -10px;
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
    width: 109%;
    padding: 9px;
    margin-top: 20px;
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
    margin-left: -20px;
    margin-right: 60px;
    overflow: auto;

`;


// accessing the Request object which is a native browser object
// we are extracting  a new URL from the request object
export async function loader({request}: { request: Request }) {
    return new URL(request.url).searchParams.get("message");
}

export default function LoginPage() {
    const messageData = useLoaderData() as string | "";

    // const [inputValues, setInputValues] = useState<{ email: string, password: string }>({email: "", password: ""});
    // const [didEdit, setDidEdit] = useState<{ email: boolean, password: boolean }>({email: false, password: false});

    // const emailIsValid = didEdit.email && !inputValues.email.includes("@");
    // const pwdIsValid = didEdit.password && inputValues.password.trim().length < 8;

    const {
        values: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasAnError: emailHasAnError,
    } = useInput("", (values) => isEmail(values.email) && isNotEmpty(values.email))

    const {
        values: pwdValue,
        handleInputChange: handlePwdChange,
        handleInputBlur: handlePwdBlur,
        hasAnError: pwdHasAnError,
    } = useInput("", (values) => hasMinLength(values.password, 8));


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // console.log(inputValues);
    }
    return (
        <>
            {/* <h1> Sign in to your account</h1> */}
            {/*{messageData && <h3 className="login-text">{messageData} </h3>}*/}
            <SectionContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <LoginPageTitle>Sign in to your account</LoginPageTitle>

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onBlur={handleEmailBlur}
                        onChange={handleEmailChange}
                        error={emailHasAnError ? "Please enter a valid email" : ""}
                    />
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onBlur={handlePwdBlur}
                        onChange={handlePwdChange}
                        error={pwdHasAnError ? "Enter a valid password" : ""}
                    />
                    {/*// when working with forms, always use the type="button" to avoid the default behavior of the form*/}
                    <SignInButton type="submit">Login</SignInButton>
                    <SignUpLink>
                        Not Registered yet ?{" "}
                        <Link
                            to={"/signup"}
                            style={{color: "inherit", textDecoration: "underline",}}
                        >
                            Sign Up
                        </Link>
                    </SignUpLink>
                </StyledForm>
            </SectionContainer>
        </>
    );
}
