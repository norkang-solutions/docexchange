import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { FirebaseError } from "firebase/app";
import {
    SignUpFormErrors,
    signUpSchema,
} from "@/app/_entities/models/auth/sign-up-form";

type SignUpReturn = {
    signUp: (formData: FormData) => Promise<void>;
    isLoading: boolean;
    errors: SignUpFormErrors;
};

export default function useSignUp(): SignUpReturn {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<SignUpFormErrors>({});

    const signUp = async (formData: FormData) => {
        setIsLoading(true);
        setErrors({});

        const data = Object.fromEntries(formData.entries());

        const { data: parsedData, error } = signUpSchema.safeParse(data);

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
            // TODO: Check if username is already taken

            await createUserWithEmailAndPassword(auth, email, password);

            // TODO: Create the user in Firestore here, with the username
        } catch (err) {
            if (err instanceof FirebaseError) {
                if (err.code === "auth/email-already-in-use") {
                    setErrors({ email: "Email already in use" });
                } else if (err.code === "already-exists") {
                    setErrors({ username: "Username already taken" });
                } else {
                    setErrors({ unknown: "An error occurred during sign up" });
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

    return { signUp, isLoading, errors };
}
