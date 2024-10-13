import { Metadata } from "next";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import SignUpForm from "./form";

export const metadata: Metadata = {
    title: "Sign Up",
};

export default function SignUp({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);
    return (
        <div className="flex items-center justify-center h-screen">
            <SignUpForm dict={dict} />
        </div>
    );
}
