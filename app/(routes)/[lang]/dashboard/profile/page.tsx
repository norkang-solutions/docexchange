import Button from "@/app/_components/button";
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

                <div className="flex gap-2 items-center w-full">
                    <div className="h-0.5 bg-slate-200 rounded-lg w-full" />
                    <p className="text-slate-500">{dict.or}</p>
                    <div className="h-0.5 bg-slate-200 rounded-lg w-full" />
                </div>

                <SignOutButton dict={dict} />

                <Button variant="secondary">{dict.change_password}</Button>
                <Button variant="secondary">{dict.delete_account}</Button>
            </div>
        </div>
    );
}
