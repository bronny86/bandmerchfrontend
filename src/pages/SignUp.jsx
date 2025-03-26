import React from "react";
import { SignUpForm } from "../components/SignUpForm";
import { RedirectHomeButton } from "../components/RedirectHomeButton";

export function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUpForm />

            <RedirectHomeButton />
        </div>
    );
}