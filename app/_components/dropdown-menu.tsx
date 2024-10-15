import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import ArrowDownIcon from "../_assets/icons/arrow-down-icon";

type DropdownMenuProps = {
    title: string;
    path?: string;
    children: ReactNode;
};

export default function DropdownMenu({
    title,
    path,
    children,
}: DropdownMenuProps) {
    const currentPath = usePathname();
    const active = path && currentPath.includes(path);
    const [open, setOpen] = useState(active);

    return (
        <div className="flex flex-col">
            <Link
                className="flex flex-row gap-2 items-center justify-between"
                href={path ?? ""}
                onClick={() => setOpen(!open)}
            >
                <p
                    className={`hover:text-gray-500 ${active ? "font-semibold" : "font-normal"}`}
                >
                    {title}
                </p>
                <ArrowDownIcon
                    className={`ml-auto rotate-[270deg] transition-transform duration-300 w-4 h-4 ${
                        open ? "transform rotate-[360deg]" : ""
                    }`}
                />
            </Link>
            {open && <div className="p-4 flex flex-col gap-4">{children}</div>}
        </div>
    );
}
