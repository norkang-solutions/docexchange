import { Timestamp } from "firebase/firestore";
import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    username: z.string(),
    createdAt: z.instanceof(Timestamp),
    createdBy: z.string(),
    // email exists on the auth provider, as auth.currentUser.email
});

export type User = z.infer<typeof userSchema>;
