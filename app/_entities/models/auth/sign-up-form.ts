import { Dictionary } from "@/app/_dictionaries/type";
import dictionaryMsg from "@/app/_utils/dictionary-msg";
import { z } from "zod";
import { userSchema } from "../user";
import { signInSchema } from "./sign-in-form";

export const signUpSchema = z
    .object({
        email: signInSchema.shape.email,
        username: userSchema.shape.username,
        password: signInSchema.shape.password,
        confirmPassword: signInSchema.shape.password,
        termsAndConditions: z.string({
            message: dictionaryMsg(
                "you_must_agree_to_the_terms_and_conditions"
            ),
        }),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: dictionaryMsg("passwords_do_not_match"),
        path: ["confirmPassword"],
    });

export type SignUpFormData = z.infer<typeof signUpSchema>;

export type SignUpFormErrors = Partial<
    {
        [K in keyof SignUpFormData]: keyof Dictionary;
    } & {
        unknown?: keyof Dictionary;
    }
>;
