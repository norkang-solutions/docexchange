"use client";

import Button from "@/app/_components/button";
import Input from "@/app/_components/input";
import { FormEvent, FormHTMLAttributes, useId } from "react";
import ErrorP from "@/app/_components/error-p";
import useSignUp from "@/app/_hooks/use-sign-up";
import LoadingSpinner from "@/app/_components/loading-spinner";
import { useAuth } from "@/app/_contexts/auth-context";
import Checkbox from "@/app/_components/checkbox";
import Link from "next/link";
import { Dictionary } from "@/app/_dictionaries/type";
import { ROUTES } from "@/app/_constants/routes";

type SignUpFormProps = FormHTMLAttributes<HTMLFormElement> & {
    dict: Dictionary;
};

export default function SignUpForm({ dict, ...props }: SignUpFormProps) {
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
                error={errors?.email && dict[errors.email]}
            />
            <Input
                label="Username"
                type="text"
                id={`username-${id}`}
                name="username"
                error={errors?.username && dict[errors.username]}
            />
            <Input
                label="Password"
                type="password"
                id={`password-${id}`}
                name="password"
                error={errors?.password && dict[errors.password]}
            />
            <Input
                label="Confirm Password"
                type="password"
                id={`confirm-password-${id}`}
                name="confirmPassword"
                error={errors?.confirmPassword && dict[errors.confirmPassword]}
            />
            <Checkbox
                error={
                    errors?.termsAndConditions &&
                    dict[errors.termsAndConditions]
                }
                id={`terms-and-conditions-${id}`}
                name="termsAndConditions"
            >
                {dict.i_agree_to_the}{" "}
                <Link
                    href={ROUTES.TERMS_AND_CONDITIONS}
                    className="underline underline-offset-4 decoration-emerald-500"
                >
                    {dict.terms_and_conditions}
                </Link>{" "}
                {dict.and}{" "}
                <Link
                    href={ROUTES.PRIVACY_POLICY}
                    className="underline underline-offset-4 decoration-emerald-500"
                >
                    {dict.privacy_policy}
                </Link>
            </Checkbox>

            <Button type="submit" disabled={isLoading || !!user}>
                {isLoading ? <LoadingSpinner /> : "Sign Up"}
            </Button>
            {errors?.unknown && <ErrorP>{dict[errors.unknown]}</ErrorP>}

            <p className="text-center text-base font-medium text-slate-700">
                {dict.do_you_already_have_an_account}{" "}
                <Link
                    href={ROUTES.SIGN_IN}
                    className="underline underline-offset-4 decoration-emerald-500"
                >
                    {dict.sign_in}
                </Link>
            </p>
        </form>
    );
}
