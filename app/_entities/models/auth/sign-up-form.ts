import { Dictionary } from "@/app/_dictionaries/type";
import dictionaryMsg from "@/app/_utils/dictionary-msg";
import { z } from "zod";

export const signUpSchema = z
    .object({
        email: z
            .string()
            .email({ message: dictionaryMsg("invalid_email_address") }),
        username: z
            .string()
            .min(3, {
                message: dictionaryMsg(
                    "username_must_be_at_least_3_characters"
                ),
            })
            .max(30, {
                message: dictionaryMsg(
                    "username_must_be_at_most_30_characters"
                ),
            })
            .regex(/^[a-zA-Z0-9_]+$/, {
                message: dictionaryMsg(
                    "username_must_be_alphanumeric_and_can_include_underscores"
                ),
            }),
        password: z
            .string()
            .min(8, {
                message: dictionaryMsg(
                    "password_must_be_at_least_8_characters"
                ),
            })
            .max(100, {
                message: dictionaryMsg(
                    "password_must_be_at_most_100_characters"
                ),
            }),
        confirmPassword: z
            .string()
            .min(8, {
                message: dictionaryMsg(
                    "password_must_be_at_least_8_characters"
                ),
            })
            .max(100, {
                message: dictionaryMsg(
                    "password_must_be_at_most_100_characters"
                ),
            }),
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
