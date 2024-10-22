"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateUser from "@firebase/firestore/update-user";
import {
    partialUserSchema,
    UpdateUserErrors,
} from "@/app/_entities/models/user";
import { useEffect, useState } from "react";
import useGetUser from "./use-get-user";

export default function useUpdateUser() {
    const queryClient = useQueryClient();

    const { data: user, isLoading: userIsLoading } = useGetUser();

    const [errors, setErrors] = useState<UpdateUserErrors>({});

    const [defaultUsername, setDefaultUsername] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (user) {
            setDefaultUsername(user.username);
            setUsernameInput(user.username);
        }
    }, [user]);

    const mutation = useMutation({
        mutationFn: async (formData: FormData) => {
            setErrors({});

            if (!user) {
                setErrors({ id: "user_not_found" });
                return;
            }

            const formDataEntries = Object.fromEntries(formData.entries());

            // Parsing a partial user schema will only parse the fields that are
            // present in the schema. That is why the email field is not parsed.
            const { data: parsedData, error } =
                partialUserSchema.safeParse(formDataEntries);

            if (error) {
                const fieldErrors = Object.fromEntries(
                    error.errors.map(({ path, message }) => [
                        path[0],
                        message as keyof UpdateUserErrors,
                    ])
                );
                setErrors(fieldErrors);
                return;
            }

            updateUser({ uid: user.id, data: parsedData });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["user", user?.id]);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        },
    });

    return {
        ...mutation,
        errors,
        defaultUsername,
        usernameInput,
        setUsernameInput,
        success,
        isLoading: mutation.isLoading || userIsLoading,
    };
}
