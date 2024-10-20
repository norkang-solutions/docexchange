import { getDictionary } from "@/app/dictionaries";
import AboutTemplate from "@/app/(routes)/[lang]/about/about-template";
import { ROUTES } from "@/app/_constants/routes";
import { LangParams } from "@/app/_utils/types";
import Link from "next/link";

export default function HowToGetPaid({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    return (
        <AboutTemplate title={dict.how_to_get_paid}>
            {dict.we_use_stripe_to_pay_our_users}
            <Link
                href={ROUTES.DASHBOARD}
                className="underline underline-offset-4 decoration-emerald-500"
            >
                {dict.dashboard}
            </Link>
            {dict.note_that_you_have_to_connect_your_stripe_account}
        </AboutTemplate>
    );
}
