import styled from "styled-components";
import React from "react";
// import {ContactPageProps} from "../types";
import { getEvents } from "../api/api";

const ContactPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  margin: 10px;
`;
const InputField = styled.input`
  width: 50%;
  padding: 13px;
  margin: 15px 0;
  border: none;
  border-radius: 5px;
`;

const MessageField = styled.textarea`
  width: 50%;
  padding: 30px;
  margin: 15px 0;
  border: none;
  border-radius: 5px;
  height: 200px;
`;

const SubmitButton = styled.button`
  width: 50%;
  padding: 13px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  color: #0d0d0d;
  background-color: #f5a646;
  font-size: 18px;
`;

export function loader() {
  return getEvents();
}

export default function ContactPage() {
  const [inputData, setInputData] = React.useState({
    name: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (name: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputData({
        ...inputData,
        [name]: e.target.value,
      });
    };
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // submit the form data should be defined
  };
  return (
    <>
      <h1>Contact Us</h1>
      <ContactPageContainer>
        <InputField
          type="text"
          placeholder={"Your Name"}
          value={inputData?.email}
          onChange={handleChange("name")}
        />
        <InputField
          type="email"
          placeholder="Email address"
          value={inputData?.email}
          onChange={handleChange("email")}
        />
        <MessageField
          placeholder="Your Message"
          value={inputData?.message}
          onChange={handleSubmit("message")}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactPageContainer>
    </>
  );
}
