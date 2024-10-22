"use client";

import SideMenuLayout from "@/app/_components/layouts/side-menu-layout";
import LoadingSpinner from "@/app/_components/loading-spinner";
import { ROUTES } from "@/app/_constants/routes";
import { useAuth } from "@/app/_contexts/auth-context";
import { LayoutProps } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
    params: { lang },
    children,
}: LayoutProps) {
    const router = useRouter();
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

    const { user: authUser, loading: isLoadingAuth } = useAuth();

    if (isLoadingAuth) {
        return <LoadingSpinner />;
    }

    if (!authUser) {
        router.push(ROUTES.SIGN_IN);
        return null;
    }

    return <SideMenuLayout items={pages}>{children}</SideMenuLayout>;
}
