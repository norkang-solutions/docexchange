"use client";

import Button from "@/app/_components/button";
import Input from "@/app/_components/input";
import { FormEvent, FormHTMLAttributes, useId } from "react";
import ErrorP from "@/app/_components/error-p";
import useSignUp from "@/app/_hooks/use-sign-up";
import LoadingSpinner from "@/app/_components/loading-spinner";
import { useAuth } from "@/app/_contexts/auth-context";
import CheckmarkCheckbox from "@/app/_components/checkbox";
import Link from "next/link";

type SignUpFormProps = FormHTMLAttributes<HTMLFormElement>;

export default function SignUpForm({ ...props }: SignUpFormProps) {
    const id = useId();

    const { user, loading: isLoadingUser } = useAuth();
    const { signUp, isLoading, errors } = useSignUp();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        signUp(formData);
    };

    if (isLoadingUser) return <LoadingSpinner />;

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
            <CheckmarkCheckbox
                id={`terms-and-conditions-${id}`}
                name="termsAndConditions"
            >
                I agree to the{" "}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 decoration-emerald-600"
                >
                    terms and conditions
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 decoration-emerald-600"
                >
                    privacy policy
                </Link>
            </CheckmarkCheckbox>

            <Button type="submit" disabled={isLoading || !!user}>
                {isLoading ? <LoadingSpinner /> : "Sign Up"}
            </Button>
            {errors?.unknown && <ErrorP>{errors.unknown}</ErrorP>}
        </form>
    );
}
