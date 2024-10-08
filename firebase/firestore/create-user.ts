import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { auth, db } from "../client";
import {
    collection,
    doc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    where,
} from "firebase/firestore";
import UsernameAlreadyTakenError from "../../app/_entities/errors/username-already-taken-error";

export default async function createUser({
    email,
    password,
    username,
}: {
    email: string;
    password: string;
    username: string;
}) {
    const usernameExists = await checkIfUsernameExist(username);

    if (usernameExists) {
        throw new UsernameAlreadyTakenError();
    }

    const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
    const uid = user.uid;

    try {
        await setDoc(doc(db, "users", uid), {
            username,
            createdAt: serverTimestamp(),
            createdBy: uid,
        });
    } catch (error) {
        await deleteUser(user);
        throw error;
    }

    return user;
}

const checkIfUsernameExist = async (username: string) => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.length > 0;
};
