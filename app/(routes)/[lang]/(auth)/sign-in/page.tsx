import { Metadata } from "next";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import SignInForm from "./form";

export const metadata: Metadata = {
    title: "Sign In",
};

export default function SignInPage({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    return (
        <div className="flex items-center justify-center h-screen">
            <SignInForm dict={dict} />
        </div>
    );
}
