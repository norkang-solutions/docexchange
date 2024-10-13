import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { FirebaseError } from "firebase/app";
import {
    signInSchema,
    SignInFormErrors,
} from "../_entities/models/auth/sign-in-form";
import useWait from "./use-wait";
import { Dictionary } from "../_dictionaries/type";

type SignInReturn = {
    signIn: (formData: FormData) => Promise<void>;
    isLoading: boolean;
    errors: SignInFormErrors;
};

export default function useSignIn(): SignInReturn {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<SignInFormErrors>({});

    const wait = useWait();

    const signIn = async (formData: FormData) => {
        setIsLoading(true);
        setErrors({});

        await wait(500);

        const data = Object.fromEntries(formData.entries());

        const { data: parsedData, error } = signInSchema.safeParse(data);

        if (error) {
            const fieldErrors = Object.fromEntries(
                error.errors.map(({ path, message }) => [
                    path[0],
                    message as keyof Dictionary,
                ])
            );
            setErrors(fieldErrors);
            setIsLoading(false);
            return;
        }

        const { email, password } = parsedData;

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            if (err instanceof FirebaseError) {
                const { code } = err;
                if (
                    code === "auth/invalid-login-credentials" ||
                    code === "auth/wrong-password"
                ) {
                    setErrors({
                        email: "invalid_email_or_password",
                        password: "invalid_email_or_password",
                    });
                } else if (code === "auth/user-not-found") {
                    setErrors({
                        email: "user_not_found",
                    });
                } else {
                    setErrors({
                        unknown:
                            "unknown_error_while_signing_in_please_contact_support",
                    });
                }
            } else {
                setErrors({
                    unknown:
                        "unknown_error_while_signing_in_please_contact_support",
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { signIn, isLoading, errors };
}
