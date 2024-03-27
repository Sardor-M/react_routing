import React, {useState} from 'react';

export function useInput(
    defaultValue: string,
    validationFcn: ({}: {
        email: string;
        password: string;
    }) => boolean) {
    const [inputValues, setInputValues] = useState<{ email: string, password: string }>({
        email: "",
        password: ""
    })
    const [didEdit, setDidEdit] = useState<boolean>(false);

    const valueIsValid = validationFcn(inputValues);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        // const {name, value} = event.target;
        // setInputValues((prevValues) => ({
        //     ...prevValues,
        //     [name]: value
        // }))
        // if(!validationFcn(value)){
        //     setDidEdit(false);
        // }
        const {name, value} = event.target;
        setInputValues(prevValues => {
            const updatedValues = {...prevValues, [name]: value};
            if (!validationFcn(updatedValues)) {
                setDidEdit(false);
            }
            return updatedValues;
        });
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


