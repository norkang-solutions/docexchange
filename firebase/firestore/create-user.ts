import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { auth, functions } from "../client";
import UsernameAlreadyTakenError from "../../app/_entities/errors/username-already-taken-error";
import { httpsCallable } from "firebase/functions";
import { FirebaseError } from "firebase/app";

export default async function createUser({
    email,
    password,
    username,
}: {
    email: string;
    password: string;
    username: string;
}) {
    const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

    const createUserOnServer = httpsCallable(functions, "createUser");

    try {
        await createUserOnServer({ username });
    } catch (error) {
        if (error instanceof FirebaseError) {
            if (error.code === "functions/already-exists") {
                await deleteUser(user);
                throw new UsernameAlreadyTakenError();
            }
        }
        await deleteUser(user);
        throw error;
    }
}
