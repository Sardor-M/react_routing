import React from 'react';
import styled from "styled-components";

// added the custom input component which can be used in the login page

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 8px;
`;

const StyledInput = styled.input`
    width: 140%;
    padding: 13px;
    margin: 15px 0;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 62, 213, 0.1);
    outline: none;

    &:hover {
        box-shadow: 0 0 5px rgba(247, 88, 204);
    }
`
const StyledErrorText = styled.p`
    display: block;
    color: red;
    font-size: 12px;
    margin: -20px;
    padding-bottom: 10px;
    text-align: left;
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    error: string | boolean;
}

export default function Input({id, error, ...props}: InputProps) {
    return (
        <>
            <StyledDiv>
                <StyledInput id={id} {...props}/>
                <StyledErrorText>{error && <p> {error}</p>} </StyledErrorText>
            </StyledDiv>
        </>
    );
}

