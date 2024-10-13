import { Dictionary } from "@/app/_dictionaries/type";
import dictionaryMsg from "@/app/_utils/dictionary-msg";
import { z } from "zod";

export const signInSchema = z.object({
    email: z
        .string()
        .email({ message: dictionaryMsg("invalid_email_address") }),
    password: z
        .string()
        .min(8, {
            message: dictionaryMsg("password_must_be_at_least_8_characters"),
        })
        .max(100, {
            message: dictionaryMsg("password_must_be_at_most_100_characters"),
        }),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export type SignInFormErrors = Partial<
    {
        [K in keyof SignInFormData]: keyof Dictionary;
    } & {
        unknown?: keyof Dictionary;
    }
>;
