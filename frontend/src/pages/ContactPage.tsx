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

// const Label = styled.label`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   width: 50%;
//   font-size: 16px;
//   margin -right: 5px;
// `;

const InputField = styled.input`
  required;
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
      <h1>Contact Us</h1>
      <ContactPageContainer onSubmit={handleSubmit}>
        <InputField
          name="name"
          type="text"
          placeholder={"Your Name"}
          value={name}
          onChange={handleChange}
        />
        <InputField
          name="email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={handleChange}
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
