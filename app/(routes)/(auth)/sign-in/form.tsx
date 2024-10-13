"use client";

import { FormEvent, FormHTMLAttributes, useId } from "react";
import Input from "@/app/_components/input";
import Button from "@/app/_components/button";
import useSignIn from "@/app/_hooks/use-sign-in";
import ErrorP from "@/app/_components/error-p";
import LoadingSpinner from "@/app/_components/loading-spinner";
import { useAuth } from "@/app/_contexts/auth-context";

type SignInFormProps = FormHTMLAttributes<HTMLFormElement>;

export default function SignInForm({ ...props }: SignInFormProps) {
    const id = useId();
    const { user, loading: isLoadingUser } = useAuth();

    const { signIn, isLoading, errors } = useSignIn();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        signIn(formData);
    };

    if (isLoadingUser) return <LoadingSpinner />;

    return (
        <form
            id="sign-in-form"
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
                label="Password"
                type="password"
                id={`password-${id}`}
                name="password"
                error={errors?.password}
            />

            <Button type="submit" disabled={isLoading || !!user}>
                {isLoading ? <LoadingSpinner /> : "Sign In"}
            </Button>
            {errors?.unknown && <ErrorP>{errors.unknown}</ErrorP>}
        </form>
    );
}
