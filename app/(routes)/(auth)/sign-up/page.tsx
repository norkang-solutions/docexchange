import { Metadata } from "next";
import SignUpForm from "./form";

export const metadata: Metadata = {
    title: "Sign Up",
};

export default function SignUp() {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignUpForm />
        </div>
    );
}
