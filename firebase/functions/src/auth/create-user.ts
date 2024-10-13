import { onCall } from "firebase-functions/v2/https";
import { Timestamp } from "firebase-admin/firestore";
import { HttpsError } from "firebase-functions/v2/https";
import { COLLECTION, CORS, REGION } from "../firebase/constants";
import { db } from "../firebase/server";

export const createUser = onCall(
    {
        cors: CORS,
        region: REGION.EUROPE_WEST1,
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

        const usersRef = db.collection(COLLECTION.USERS);
        const query = usersRef.where("username", "==", username);

        const snapshot = await query.get();

        if (!snapshot.empty) {
            throw new HttpsError("already-exists", "Username already exists");
        }

        db.collection(COLLECTION.USERS).doc(auth.uid).set({
            username: username,
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
