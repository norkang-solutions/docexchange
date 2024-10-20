import SideMenuLayout from "@/app/_components/layouts/side-menu-layout";
import { ROUTES } from "@/app/_constants/routes";
import { LayoutProps } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";

export default function DashboardLayout({
    params: { lang },
    children,
}: LayoutProps) {
    const dict = getDictionary(lang);
    const pages = [
        {
            title: dict.dashboard,
            path: ROUTES.DASHBOARD,
            items: [
                {
                    title: dict.your_profile,
                    path: ROUTES.PROFILE,
                },
            ],
        },
    ];

    return <SideMenuLayout items={pages}>{children}</SideMenuLayout>;
}
