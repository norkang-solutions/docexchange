import { GITHUB } from "../_constants/names";
import { ROUTES } from "../_constants/routes";
import { Dictionary } from "../_dictionaries/type";
import DocExchangeTitle from "./docexchange-title";
import LinkText from "./link-text";

export default function BottomBar({ dict }: { dict: Dictionary }) {
    return (
        <div className="p-10 grid md:grid-cols-4 gap-10 w-full mx-auto text-lg border-t mb-10">
            <div className="flex flex-col space-y-2">
                <p className="font-bold">{dict.company}</p>
                <LinkText href={ROUTES.ABOUT_US}>{dict.about_us}</LinkText>
                <LinkText href={ROUTES.TERMS_AND_CONDITIONS}>
                    {dict.terms_and_conditions_title}
                </LinkText>
                <LinkText href={ROUTES.PRIVACY_POLICY}>
                    {dict.privacy_policy_title}
                </LinkText>
            </div>
            <div className="flex flex-col space-y-2">
                <p className="font-bold">{dict.social}</p>
                <LinkText href={ROUTES.ABOUT_TEAM}>{dict.team}</LinkText>
                <LinkText href={ROUTES.GITHUB_REPO}>{GITHUB}</LinkText>
            </div>
            <div className="flex flex-col space-y-2">
                <p className="font-bold">{dict.help}</p>
                <LinkText href={ROUTES.SUPPORT}>{dict.support}</LinkText>
                <LinkText href={ROUTES.SUPPORT_CONTACT}>
                    {dict.contact_us}
                </LinkText>
                <LinkText href={ROUTES.SUPPORT_FAQ}>{dict.faq}</LinkText>
            </div>
            <DocExchangeTitle />
        </div>
    );
}
