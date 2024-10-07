import { z } from "zod";

export const signUpSchema = z
    .object({
        email: z.string().email({ message: "Invalid email address" }),
        username: z
            .string()
            .min(3, { message: "Username must be at least 3 characters" }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" }),
        confirmPassword: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" }),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type SignUpFormData = z.infer<typeof signUpSchema>;

export type SignUpFormErrors = Partial<
    Record<keyof SignUpFormData | "unknown", string>
>;
