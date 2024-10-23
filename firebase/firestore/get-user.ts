import { doc, getDoc } from "firebase/firestore";
import { db } from "../client";
import { userSchema } from "../../app/_entities/models/user";

export default async function getUser(uid: string) {
    const userDoc = await getDoc(doc(db, "users", uid));

    if (!userDoc.exists()) {
        return null;
    }

    const id = userDoc.id;
    const data = userDoc.data();
    return userSchema.parse({ id, ...data });
}
