import styled from "styled-components";
import React from "react";
import { getEvents } from "../api/api";

const ContactPageContainer = styled.form`
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
    message: "",
  });
  const [errors, setErrors] = React.useState({});

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLAreaElement>
  ) => {
    return () => {
      const target = event.target as HTMLInputElement;
      setInputData({
        ...inputData,
        [target.name]: target.value,
      });
    };
  };

  const handleMessageSubmit = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    setInputData({
      ...inputData,
      message: event.target.value,
    });
    return inputData;
    // submit the form data should be defined
  };

  const handleSubmitButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("SUbmitting the form data:", inputData);
    return inputData;
  };

  return (
    <>
      <h1>Contact Us</h1>
      <ContactPageContainer
      // onSubmit={handleSubmit}
      >
        <InputField
          title="Name"
          type="text"
          placeholder={"Your Name"}
          value={inputData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          placeholder="Email address"
          value={inputData.email}
          onChange={handleChange}
          required
        />
        <MessageField
          placeholder="Your Message"
          value={inputData.message}
          onChange={handleMessageSubmit}
          required
        />
        <SubmitButton
          title="Message"
          type="submit"
          onClick={handleSubmitButton}
        >
          Submit
        </SubmitButton>
      </ContactPageContainer>
    </>
  );
}
