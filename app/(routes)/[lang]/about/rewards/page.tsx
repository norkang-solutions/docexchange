import { ROUTES } from "@/app/_constants/routes";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import AboutTemplate from "../about-template";

export default function AboutStudentRewardsProgram({
    params: { lang },
}: LangParams) {
    const dict = getDictionary(lang);

    return (
        <AboutTemplate
            cards={[
                {
                    title: dict.how_to_get_paid,
                    description: dict.learn_how_you_can_start_receiving_rewards,
                    link: ROUTES.ABOUT_REWARDS_HOW_TO_GET_PAID,
                },
            ]}
            title={dict.student_rewards_program}
        >
            {dict.we_pay_out_100p_of_our_revenue_to_uploaders}
        </AboutTemplate>
    );
}
