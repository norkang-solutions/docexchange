import { ROUTES } from "@/app/_constants/routes";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import AboutTemplate, { Card } from "./about-template";

export default function About({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    const cards: Card[] = [
        {
            title: dict.about_us,
            description:
                dict.on_this_page_you_can_find_information_about_who_we_are,
            link: ROUTES.ABOUT_US,
        },
        {
            title: dict.legal,
            description: dict.this_section_describes_our_legal_policies,
            link: ROUTES.ABOUT_LEGAL,
        },
        {
            title: dict.student_rewards_program,
            description: dict.read_more_about_our_rewards_program,
            link: ROUTES.ABOUT_REWARDS,
        },
    ];
    return <AboutTemplate title={dict.about_us} cards={cards} />;
}
