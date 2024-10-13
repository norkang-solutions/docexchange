"use client";

import { FormEvent, FormHTMLAttributes, useId } from "react";
import Input from "@/app/_components/input";
import Button from "@/app/_components/button";
import useSignIn from "@/app/_hooks/use-sign-in";
import ErrorP from "@/app/_components/error-p";
import LoadingSpinner from "@/app/_components/loading-spinner";
import { useAuth } from "@/app/_contexts/auth-context";
import { Dictionary } from "@/app/_dictionaries/type";
import Link from "next/link";
import { ROUTES } from "@/app/_constants/routes";

type SignInFormProps = FormHTMLAttributes<HTMLFormElement> & {
    dict: Dictionary;
};

export default function SignInForm({ dict, ...props }: SignInFormProps) {
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
                label={dict.email}
                type="email"
                id={`email-${id}`}
                name="email"
                error={errors && errors.email && dict[errors.email]}
            />
            <Input
                label={dict.password}
                type="password"
                id={`password-${id}`}
                name="password"
                error={errors?.password && dict[errors.password]}
            />

            <Button type="submit" disabled={isLoading || !!user}>
                {isLoading ? <LoadingSpinner /> : dict.sign_in}
            </Button>
            {errors?.unknown && <ErrorP>{dict[errors.unknown]}</ErrorP>}

            <p className="text-center text-base font-medium text-slate-700">
                {dict.do_you_not_have_an_account}{" "}
                <Link
                    href={ROUTES.SIGN_UP}
                    className="underline underline-offset-4 decoration-emerald-500"
                >
                    {dict.sign_up}
                </Link>
            </p>
        </form>
    );
}
