import { googleProvider } from "@/firebase/auth/providers";
import { auth, functions } from "@/firebase/client";
import { signInWithPopup } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { useState } from "react";

export default function useSignInWithGoogle() {
    const [error, setError] = useState(false);

    async function signInWithGoogle() {
        try {
            const {
                user: { email },
            } = await signInWithPopup(auth, googleProvider);

            const createUserOnServer = httpsCallable(functions, "createUser");
            const username = email!.split("@")[0].replace(".", "_");

            try {
                await createUserOnServer({ username });
            } catch {
                // User exists, don't create
            }
        } catch {
            setError(true);
        }
    }

    return { signInWithGoogle, error };
}
