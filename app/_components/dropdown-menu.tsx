import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import ArrowDownIcon from "../_assets/icons/arrow-down-icon";

type DropdownMenuProps = {
    title: string;
    path: string;
    children: ReactNode;
};

export default function DropdownMenu({
    title,
    path,
    children,
}: DropdownMenuProps) {
    const currentPath = usePathname();
    const [open, setOpen] = useState(currentPath.includes(path));

    return (
        <div className="flex flex-col">
            <Link
                className="flex flex-row gap-2 items-center justify-between"
                href={path}
                onClick={() => setOpen(!open)}
            >
                <p className="hover:text-gray-500">{title}</p>
                <ArrowDownIcon
                    className={`ml-auto rotate-[270deg] transition-transform duration-300 w-4 h-4 ${
                        open ? "transform rotate-[360deg]" : ""
                    }`}
                />
            </Link>
            {open && <div className="p-4">{children}</div>}
        </div>
    );
}
