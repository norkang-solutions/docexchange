import { getPageMetadata } from "@/app/_utils/metadata";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import SignUpForm from "./form";

export const generateMetadata = getPageMetadata(dict => dict.sign_up);

export default function SignUp({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);
    return (
        <div className="flex items-center justify-center h-screen">
            <SignUpForm dict={dict} />
        </div>
    );
}
