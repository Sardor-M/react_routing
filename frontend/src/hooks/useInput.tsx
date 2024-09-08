import React, { useState } from "react";

export function useInput<T>(
  defaultValue: T, // changed to T to acceot any type of object
  validationFcn: (inputValues: T) => { [K in keyof T]?: boolean } //
) {
  const [inputValues, setInputValues] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState<{ [K in keyof T]?: boolean }>({});
  const [errors, setErrors] = useState<{ [K in keyof T]?: boolean }>({});

  const valueIsValid = validationFcn(inputValues);

  function handleInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    })); // spread the prev value and update the changed field

    setErrors((prevErrors) => {
      const newErrors = {
        ...prevErrors,
        [name]: !valueIsValid[name as keyof T],
      };
      if (valueIsValid[name as keyof T]) {
        delete newErrors[name as keyof T];
      }
      return newErrors;
    });
  }

  function handleInputBlur(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name } = event.target;
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [name]: true,
    }));
  }

  return {
    values: inputValues,
    handleInputChange,
    handleInputBlur,
    errors: Object.keys(didEdit).reduce((acc, key) => {
      if (didEdit[key as keyof T]) {
        acc[key as keyof T] = errors[key as keyof T];
      }
      return acc;
    }, {} as { [K in keyof T]?: boolean }), // returns the only fields that have been edited
  };
}
