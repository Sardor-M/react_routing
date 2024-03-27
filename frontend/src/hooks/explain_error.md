The error "TS2345: Argument of type 'string' is not assignable to parameter of type '{ email: string; password: string; }'" is occurring because you're trying to pass a string to the `validationFcn` function, which expects an object with `email` and `password` properties.

this is the error: 

```typescript
 function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setInputValues((prevValues) => ({
        ...prevValues,
        [name]: value
    }))
    if(!validationFcn(value)){
        setDidEdit(false);
    }
```

In the `handleInputChange` function, you're calling `validationFcn` with `value` as the argument, which is a string. However, `validationFcn` expects an object of type `{ email: string; password: string; }`.

To fix this error, you should pass the updated `inputValues` object to the `validationFcn` function instead of the `value` string. Here's the corrected `handleInputChange` function:

```typescript
function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputValues(prevValues => {
        const updatedValues = { ...prevValues, [name]: value };
        if (!validationFcn(updatedValues)) {
            setDidEdit(false);
        }
        return updatedValues;
    });
}
```

In this corrected function, the `setInputValues` function is called with a function that takes the previous state (`prevValues`), creates an updated state where the field specified by `name` is updated with the new `value`, checks the validation function with the updated values, and then returns the updated values. This will correctly update the `inputValues` state with the new value of the input element and validate it correctly.