import { onCall, HttpsError } from "firebase-functions/v2/https";
import { Timestamp } from "firebase-admin/firestore";
import { USERS_COLLECTION, CORS, REGION } from "../firebase/constants";
import { db } from "../firebase/server";

export const createUser = onCall(
    {
        cors: CORS,
        region: REGION,
    },
    async req => {
        const { auth, data } = req;

        if (!auth) {
            throw new HttpsError("unauthenticated", "Unauthorized");
        }

        const { username } = data;

        if (!username) {
            throw new HttpsError("invalid-argument", "Username is required");
        }

        const usersRef = db.collection(USERS_COLLECTION);
        const query = usersRef.where("username", "==", username);

        const snapshot = await query.get();

        if (!snapshot.empty) {
            throw new HttpsError("already-exists", "Username already exists");
        }

        db.collection(USERS_COLLECTION).doc(auth.uid).set({
            username,
            createdBy: auth.uid,
            createdAt: Timestamp.now(),
        });

        return {
            id: auth.uid,
            username,
            createBy: auth.uid,
            createdAt: Timestamp.now(),
        };
    }
);
