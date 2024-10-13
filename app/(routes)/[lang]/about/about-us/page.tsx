import { ROUTES } from "@/app/_constants/routes";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import AboutTemplate from "../about-template";

export default function About({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    return (
        <AboutTemplate
            cards={[
                {
                    title: dict.team,
                    description: dict.get_to_know_our_team,
                    link: ROUTES.ABOUT_TEAM,
                },
            ]}
            title={dict.about_us}
        >
            <p>{dict.docexchange_is_a_student_powered_study_platform}</p>
            <p>
                {
                    dict.at_docexchange_we_believe_in_the_power_of_collaborative_learning
                }
            </p>
        </AboutTemplate>
    );
}
