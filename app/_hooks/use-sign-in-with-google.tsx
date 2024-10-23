import { googleProvider } from "@/firebase/auth/providers";
import { auth, functions } from "@/firebase/client";
import { signInWithPopup } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { useState } from "react";
import getUser from "@/firebase/firestore/get-user";

export default function useSignInWithGoogle() {
    const [error, setError] = useState(false);

    async function signInWithGoogle() {
        try {
            const {
                user: { email, uid },
            } = await signInWithPopup(auth, googleProvider);

            const username = email!.split("@")[0].replaceAll(".", "_");
            const user = await getUser(uid);

            if (!user) {
                const createUserOnServer = httpsCallable(
                    functions,
                    "createUser"
                );
                await createUserOnServer({ username });
            }
        } catch {
            setError(true);
        }
    }

    return { signInWithGoogle, error };
}
