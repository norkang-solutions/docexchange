import { z } from "zod";

export const signUpSchema = z
    .object({
        email: z.string().email({ message: "Invalid email address" }),
        username: z
            .string()
            .min(3, { message: "Username must be at least 3 characters" })
            .max(30, { message: "Username must be at most 30 characters" })
            .regex(/^[a-zA-Z0-9_]+$/, {
                message:
                    "Username must be alphanumeric and can include underscores",
            }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" })
            .max(100, { message: "Password must be at most 100 characters" }),
        confirmPassword: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" })
            .max(100, { message: "Password must be at most 100 characters" }),
        termsAndConditions: z.string({
            message: "You must agree to the terms and conditions",
        }),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type SignUpFormData = z.infer<typeof signUpSchema>;

export type SignUpFormErrors = Partial<
    Record<keyof SignUpFormData | "unknown", string>
>;
