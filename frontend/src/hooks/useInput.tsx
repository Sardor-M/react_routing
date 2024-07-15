import React, { useState } from "react";

export function useInput(
  defaultValue: { email: string; password: string },
  validationFcn: (inputValues: { email: string; password: string }) => boolean
) {
  const [inputValues, setInputValues] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState<boolean>(false);

  const valueIsValid = validationFcn(inputValues);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      if (!validationFcn(updatedValues)) {
        setDidEdit(false);
      }
      return updatedValues;
    });
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    values: inputValues,
    handleInputChange,
    handleInputBlur,
    hasAnError: didEdit && !valueIsValid,
  };
}
