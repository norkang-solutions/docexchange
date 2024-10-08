"use client";

import Button from "@/app/_components/button";
import Input from "@/app/_components/input";
import { FormEvent, FormHTMLAttributes, useId } from "react";
import ErrorP from "@/app/_components/error-p";
import useSignUp from "@/app/_hooks/use-sign-up";
import LoadingSpinner from "@/app/_components/loading-spinner";

type SignUpFormProps = FormHTMLAttributes<HTMLFormElement>;

export default function SignUpForm({ ...props }: SignUpFormProps) {
    const id = useId();

    const { signUp, isLoading, errors } = useSignUp();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        signUp(formData);
    };

    return (
        <form
            id="sign-up-form"
            className="flex flex-col gap-4 max-w-xs w-full"
            onSubmit={handleSubmit}
            {...props}
        >
            <Input
                label="Email"
                type="email"
                id={`email-${id}`}
                name="email"
                error={errors?.email}
            />
            <Input
                label="Username"
                type="text"
                id={`username-${id}`}
                name="username"
                error={errors?.username}
            />
            <Input
                label="Password"
                type="password"
                id={`password-${id}`}
                name="password"
                error={errors?.password}
            />
            <Input
                label="Confirm Password"
                type="password"
                id={`confirm-password-${id}`}
                name="confirmPassword"
                error={errors?.confirmPassword}
            />
            <Button type="submit" disabled={isLoading}>
                {isLoading ? <LoadingSpinner /> : "Sign Up"}
            </Button>
            {errors?.unknown && <ErrorP>{errors.unknown}</ErrorP>}
        </form>
    );
}
