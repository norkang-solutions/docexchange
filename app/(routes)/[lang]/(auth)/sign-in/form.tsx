"use client";

import Button from "@/app/_components/button";
import ErrorP from "@/app/_components/error-p";
import Input from "@/app/_components/input";
import LoadingSpinner from "@/app/_components/loading-spinner";
import { ROUTES } from "@/app/_constants/routes";
import { useAuth } from "@/app/_contexts/auth-context";
import { Dictionary } from "@/app/_dictionaries/type";
import useSignIn from "@/app/_hooks/use-sign-in";
import useSignInWithGoogle from "@/app/_hooks/use-sign-in-with-google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, FormHTMLAttributes, useId } from "react";
import GoogleButton from "../google-button";

type SignInFormProps = FormHTMLAttributes<HTMLFormElement> & {
    dict: Dictionary;
};

export default function SignInForm({ dict, ...props }: SignInFormProps) {
    const id = useId();
    const router = useRouter();

    const { user, loading: isLoadingUser } = useAuth();

    const { signIn, isLoading, errors } = useSignIn();
    const { signInWithGoogle, error: errorSigningInWithGoogle } =
        useSignInWithGoogle();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        signIn(formData);
    };

    if (user) {
        router.push(ROUTES.DASHBOARD);
        return null;
    }

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
            <GoogleButton onClick={signInWithGoogle}>
                {dict.sign_in_with_google}
            </GoogleButton>
            {errors?.unknown && <ErrorP>{dict[errors.unknown]}</ErrorP>}
            {errorSigningInWithGoogle && <ErrorP>google error</ErrorP>}

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
