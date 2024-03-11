import React from 'react';
import {getEvents} from "../api/api";


export function loader () {
    // for the purpose of testing the loader
    // getEvents will be removed soon.
    return getEvents();
}
export default function SignUpPage() {
    return (
        <div></div>
    );
}

