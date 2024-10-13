"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import DropdownMenu from "../dropdown-menu";
import DropdownMenuItem from "../dropdown-menu-item";

export type SubMenuItem = {
    title: string;
    path: string;
};

export type SideMenuItem = SubMenuItem & {
    items: SubMenuItem[];
};

type SideMenuLayoutProps = {
    items: SideMenuItem[];
    children: ReactNode;
};

export default function SideMenuLayout({
    children,
    items,
}: SideMenuLayoutProps) {
    const currentPath = usePathname();
    const sideMenu = items.map(item => (
        <DropdownMenu key={item.path} title={item.title} path={item.path}>
            {item.items.map(subItem => (
                <DropdownMenuItem
                    key={subItem.path}
                    title={subItem.title}
                    path={subItem.path}
                    active={currentPath.includes(subItem.path)}
                />
            ))}
        </DropdownMenu>
    ));

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-0 md:py-8 w-full max-w-7xl mx-auto">
            <div className="col-span-1 md:col-span-3 flex flex-col gap-2 md:gap-4 px-4 w-full border-b border-gray-200 md:border-b-0">
                <div className="md:hidden p-4">
                    <DropdownMenu title="Menu" path={currentPath}>
                        {sideMenu}
                    </DropdownMenu>
                </div>
                <div className="hidden md:block">{sideMenu}</div>
            </div>
            <div className="col-span-1 md:col-span-9">{children}</div>
        </div>
    );
}
