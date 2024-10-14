import { LayoutProps } from "@/app/_utils/types";
import SideMenuLayout from "@/app/_components/layouts/side-menu-layout";
import { ROUTES } from "@/app/_constants/routes";
import { getDictionary } from "@/app/dictionaries";

export default function AboutLayout({
    params: { lang },
    children,
}: LayoutProps) {
    const dict = getDictionary(lang);
    const pages = [
        {
            title: dict.about_us,
            path: ROUTES.ABOUT_US,
            items: [
                {
                    title: dict.team,
                    path: ROUTES.ABOUT_TEAM,
                },
            ],
        },
        {
            title: dict.student_rewards_program,
            path: ROUTES.ABOUT_REWARDS,
            items: [
                {
                    title: dict.how_to_get_paid,
                    path: ROUTES.ABOUT_REWARDS_HOW_TO_GET_PAID,
                },
            ],
        },
    ];

    return <SideMenuLayout items={pages}>{children}</SideMenuLayout>;
}
