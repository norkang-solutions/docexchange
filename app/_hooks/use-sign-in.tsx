import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { FirebaseError } from "firebase/app";
import {
    signInSchema,
    SignInFormErrors,
} from "../_entities/models/auth/sign-in-form";
import useWait from "./use-wait";

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
                error.errors.map(({ path, message }) => [path[0], message])
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
                        email: "Invalid email or password",
                        password: "Invalid email or password",
                    });
                } else if (code === "auth/user-not-found") {
                    setErrors({
                        email: "A user with this email does not exist",
                    });
                } else {
                    setErrors({
                        unknown:
                            "Our auth provider is experiencing issues, please contact support",
                    });
                }
            } else {
                setErrors({
                    unknown: "Something went wrong, please contact support",
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { signIn, isLoading, errors };
}
