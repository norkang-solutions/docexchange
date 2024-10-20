import Link from "next/link";

type DropdownMenuItemProps = {
    title: string;
    path: string;
    active: boolean;
};

export default function DropdownMenuItem({
    title,
    path,
    active,
}: DropdownMenuItemProps) {
    return (
        <Link
            className={`flex flex-row px-4 hover:text-gray-500 border-l-2 ${active ? "border-emerald-500" : "border-slate-700"}`}
            href={path}
        >
            {title}
        </Link>
    );
}
