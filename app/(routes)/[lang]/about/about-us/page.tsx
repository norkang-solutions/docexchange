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
                {
                    title: dict.source_code,
                    description: dict.check_out_our_source_code_on_github,
                    link: "https://github.com/norkang-solutions/docexchange",
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
            <p>
                {dict.by_the_same_token_docexchange_is_an_open_source_platform}
            </p>
        </AboutTemplate>
    );
}
