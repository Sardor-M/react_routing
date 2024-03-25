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
  width: 30%;
  padding: 13px;
  margin: 15px 0;
  border: none;
  border-radius: 5px;
`;

const MessageField = styled.textarea`
  width: 30%;
  padding: 30px;
  margin: 15px 0;
  border: none;
  border-radius: 5px;
  height: 200px;
`;

const SubmitButton = styled.button`
  width: 30%;
  padding: 13px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  color: #0d0d0d;
  background-color: #f5a646;
  font-size: 18px;
  transition: all .5s ease;
  text-align: center;

  &:hover {
    color: #161616;
    background-color: #1ea7fd;
  }
`;

type FormProps = {
  onSubmit: (form: { name: string; email: string; message: string }) => void;
};

export function loader() {
  return getEvents();
}

export default function ContactPage({ onSubmit }: FormProps) {
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

  const { name, email, message } = inputData;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(inputData);
    setInputData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  return (
    <>
      {/*<h1>Contact Us</h1>*/}
      <ContactPageContainer onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <InputField
          name="name"
          type="text"
          placeholder={"Your Name"}
          value={name}
          onChange={handleChange}
          required
        />
        <InputField
          name="email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={handleChange}
          required
        />
        <MessageField
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={handleChange}
        />
        <SubmitButton title="Message" type="submit">
          Submit
        </SubmitButton>
      </ContactPageContainer>
    </>
  );
}
