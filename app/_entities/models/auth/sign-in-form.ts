import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(100, { message: "Password must be at most 100 characters" }),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export type SignInFormErrors = Partial<
    Record<keyof SignInFormData | "unknown", string>
>;
