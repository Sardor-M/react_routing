import styled from "styled-components";
import React from "react";
import {ContactPageProps} from "../types";
import {getEvents} from "../api/api";


const ContactPageElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const NameInputField = styled.input`
    width: 90%;
    padding: 13px;
    margin: 15px 0;
    border: none;
    border-radius: 5px;
`
const EmailInputField = styled.input`
    width: 90%;
    padding: 13px;
    margin: 15px;
    border: none;
    border-radius: 5px;
`

const MessageInputField = styled.input`
    width: 90%;
    padding: 13px;
    margin: 15px;
    border: none;
    border-radius: 5px;
    color: #f5a646;
`

const CityInputField = styled.input`
    width: 90%;
    padding: 13px;
    margin: 15px;
    border: none;
    border-radius: 5px;
    color: #f5a646;
`

const SubmitButton = styled.button`
    width: 90%;
    padding: 13px;
    margin: 15px;
    border: none;
    border-radius: 5px;
    color: #f5a646;
    background-color: #f5a646;
    font-size: 18px;
`

export function loader() {
    return getEvents();
}

export default function ContactPage() {
    const [inputData, setInputData] = React.useState({name: "", email: "", city: "", message: ""});

    const handleChange = (name: string) => {
        return (e: React.ChangeEvent <HTMLInputElement>) => {
            setInputData({
                ...inputData,
                [name]: e.target.value
            })
        }
    }


    return (
        <>
            <h1>Contact Us</h1>
            <ContactPageElement>
                <NameInputField
                    type="input"
                    placeholder={"Example: Steve"}
                    value={inputData?.email}
                    onChange={handleChange("name")}
                >
                    Your Name
                </NameInputField>
                <EmailInputField>
                    Email address
                </EmailInputField>
                <CityInputField>
                    City Name
                </CityInputField>
                <MessageInputField>
                    Message
                </MessageInputField>
                <SubmitButton
                    type="submit"
                >
                    Submit
                </SubmitButton>
            </ContactPageElement>
        </>
    );
}
