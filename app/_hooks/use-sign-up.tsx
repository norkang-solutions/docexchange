import { useState } from "react";
import { FirebaseError } from "firebase/app";
import {
    SignUpFormErrors,
    signUpSchema,
} from "@/app/_entities/models/auth/sign-up-form";
import UsernameAlreadyTakenError from "../_entities/errors/username-already-taken-error";
import createUser from "../../firebase/firestore/create-user";
import useWait from "./use-wait";
import { Dictionary } from "../_dictionaries/type";

type SignUpReturn = {
    signUp: (formData: FormData) => Promise<void>;
    isLoading: boolean;
    errors: SignUpFormErrors;
};

export default function useSignUp(): SignUpReturn {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<SignUpFormErrors>({});

    const wait = useWait();

    const signUp = async (formData: FormData) => {
        setIsLoading(true);
        setErrors({});

        await wait(500);

        const data = Object.fromEntries(formData.entries());

        const { data: parsedData, error } = signUpSchema.safeParse(data);

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

        const { email, password, username } = parsedData;

        try {
            await createUser({
                email,
                password,
                username,
            });
        } catch (err) {
            if (err instanceof UsernameAlreadyTakenError) {
                setErrors({ username: "username_already_taken" });
                return;
            }
            if (err instanceof FirebaseError) {
                if (err.code === "auth/email-already-in-use") {
                    setErrors({ email: "email_already_in_use" });
                    return;
                }
                setErrors({
                    unknown:
                        "unknown_error_while_signing_up_please_contact_support",
                });
                return;
            }
            setErrors({
                unknown:
                    "unknown_error_while_signing_up_please_contact_support",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { signUp, isLoading, errors };
}
