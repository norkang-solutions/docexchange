import Button from "@/app/_components/button";
import Divider from "@/app/_components/divider";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import UpdateUserForm from "./update-user-form";
import SignOutButton from "./sign-out-button";

export default function Profile({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    return (
        <div className="px-4 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{dict.your_profile}</h1>

            <div className="flex flex-col gap-4 max-w-sm w-full">
                <UpdateUserForm dict={dict} />

                <Divider text={dict.or} />

                <SignOutButton dict={dict} />

                <Button variant="secondary">{dict.change_password}</Button>
                <Button variant="secondary">{dict.delete_account}</Button>
            </div>
        </div>
    );
}
