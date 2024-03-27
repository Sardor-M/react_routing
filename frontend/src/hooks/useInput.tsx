import React, {useState} from 'react';

export function useInput(
    defaultValue:
        { email: string, pwd: string },
    validationFcn:
        ({}) => boolean) {
    const [inputValues, setInputValues] = useState<{ email: string, pwd: string }>({
        email: "",
        pwd: ""
    })
    const [didEdit, setDidEdit] = useState<boolean>(false);

    const valueIsValid = validationFcn(inputValues);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        setInputValues(defaultValue);

        if (!validationFcn(newValue)) {
            setDidEdit(false);
        }
    }

    function handleInputBlur() {
        setDidEdit(true)
    }


    return {
        values: inputValues,
        handleInputChange,
        handleInputBlur,
        hasAnError: didEdit && !valueIsValid
    }
}
