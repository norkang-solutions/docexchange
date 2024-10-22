import { Dictionary } from "@/app/_dictionaries/type";
import dictionaryMsg from "@/app/_utils/dictionary-msg";
import { Timestamp } from "firebase/firestore";
import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    username: z
        .string()
        .min(3, {
            message: dictionaryMsg("username_must_be_at_least_3_characters"),
        })
        .max(30, {
            message: dictionaryMsg("username_must_be_at_most_30_characters"),
        })
        .regex(/^[a-zA-Z0-9_]+$/, {
            message: dictionaryMsg(
                "username_must_be_alphanumeric_and_can_include_underscores"
            ),
        }),
    createdAt: z.instanceof(Timestamp),
    createdBy: z.string(),
    // email exists on the auth provider, as auth.currentUser.email
});

export const partialUserSchema = userSchema.partial();

export type User = z.infer<typeof userSchema>;

export type PartialUser = z.infer<typeof partialUserSchema>;

export type UpdateUserErrors = Partial<
    {
        [K in keyof PartialUser]: keyof Dictionary;
    } & {
        unknown?: keyof Dictionary;
    }
>;
