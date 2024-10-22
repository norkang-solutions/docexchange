import { doc, updateDoc } from "firebase/firestore";
import { User } from "../../app/_entities/models/user";
import { db } from "../client";

export default async function updateUser({
    uid,
    data,
}: {
    uid: User["id"];
    data: Partial<User>;
}) {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, data);
}
