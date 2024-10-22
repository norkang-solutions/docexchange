"use client";

import Alert from "@/app/_components/alert";
import Button from "@/app/_components/button";
import Input from "@/app/_components/input";
import LoadingSpinner from "@/app/_components/loading-spinner";
import { useAuth } from "@/app/_contexts/auth-context";
import { Dictionary } from "@/app/_dictionaries/type";
import useUpdateUser from "@/app/_hooks/queries/use-update-user";
import { FormEvent, useId } from "react";

export default function UpdateUserForm({ dict }: { dict: Dictionary }) {
    const { user: authUser } = useAuth();

    const id = useId();

    const {
        setUsernameInput,
        usernameInput,
        success,
        defaultUsername,
        mutate: updateUser,
        isLoading: isUpdatingUser,
        errors: isUpdatingUserErrors,
    } = useUpdateUser();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.set("username", usernameInput); // Ensure the latest value is used
        updateUser(formData);
    };

    return (
        <form
            id="profile-form"
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit}
        >
            {authUser && authUser.email && (
                <Input
                    name="email"
                    id={`email-${id}`}
                    label={dict.email}
                    value={authUser.email}
                    readOnly
                />
            )}
            <Input
                name="username"
                id={`username-${id}`}
                label={dict.username}
                value={usernameInput}
                onChange={e => setUsernameInput(e.target.value)}
                error={
                    isUpdatingUserErrors.username &&
                    dict[isUpdatingUserErrors.username]
                }
            />

            {success && (
                <Alert type="success">
                    <p>{dict.user_updated}</p>
                </Alert>
            )}

            <Button
                type="submit"
                disabled={
                    isUpdatingUser ||
                    success ||
                    usernameInput === defaultUsername
                }
            >
                {isUpdatingUser ? <LoadingSpinner /> : dict.save}
            </Button>
        </form>
    );
}
