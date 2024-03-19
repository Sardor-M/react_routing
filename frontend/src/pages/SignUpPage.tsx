import { useRef, useState } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: flex;
  align-items: center;
`;
const FormTitleElement = styled.h1`
  display: flex;
  font-size: 18px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const InputFieldElement = styled.input`
  width: 90%;
  padding: 13px;
  margin: 15px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 62, 213, 0.1);
  outline: none;

  &:hover {
    box-shadow: 0 0 5px rgba(155, 0, 0, 0.3);
  }
`;
const SubmitButton = styled.button`
  width: 90%;
  padding: 13px;
  display: flex;
  foxt-size: ;
`;

export default function SignUpPage() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const registerData = new FormData();
    } catch (err) {
      setErrorMsg("Signing up is failed");
    }
  };

  return (
    <>
      <SectionContainer>
        <FormTitleElement>Sign Up </FormTitleElement>
        <FormContainer onSubmit={handleSubmit}>
          <InputFieldElement
            type="username"
            id="username"
            // ref={useRef}
            value={user}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setValidUser(true)}
          />
          <InputFieldElement
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            required
          />
          <SubmitButton>Sing up </SubmitButton>
        </FormContainer>
      </SectionContainer>
    </>
  );
}
