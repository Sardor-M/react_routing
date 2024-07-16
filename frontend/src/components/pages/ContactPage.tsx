import styled from "styled-components";
import React from "react";
import { getEvents } from "../../api/api";

const ContactPageContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  margin-bottom: 50px;
  color: #0d0d0d;
  width: 100%;
`;

const InputField = styled.input`
  /* color: #0d0d0d; */
  width: 30%;
  padding: 13px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  /* border-color: #494949; */
  /* &:hover {
    box-shadow: 0 0 5px rgba(247, 88, 204);
  } */
  border: 1px solid #b1bdc8;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const MessageField = styled.textarea`
  width: 30%;
  padding: 30px;
  margin: 15px 0;
  /* border: none; */
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 62, 213, 0.1);
  /* border-color: #494949; */
  /* width: 20%; */
  height: 200px;
  border: 1px solid #b1bdc8;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const SubmitButton = styled.button`
  width: 30%;
  padding: 13px;
  margin: 15px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #0f32fa;
  font-size: 18px;
  transition: all 0.5s ease;
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
