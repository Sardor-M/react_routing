// wirte me styled textarea custom atom componetn

import styled from "styled-components";

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string;
}

const TextAreaComponent = styled.textarea`
  width: 100%;
  padding: 20px 15px 20px 15px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  color: #333;
  resize: none;
  &:focus {
    outline: none;
    border: 1px solid #3966fb;
  }
`;

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  value,
  onChange,
  onBlur,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur(event);
  };

  return (
    <div>
      <TextAreaComponent
        id={id}
        name={name}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      ></TextAreaComponent>
    </div>
  );
};

export default TextArea;
