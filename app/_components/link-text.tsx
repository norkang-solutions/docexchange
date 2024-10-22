import Link from "next/link";
import { ReactNode } from "react";

export default function LinkText({
    href,
    children,
}: {
    href: string;
    children: ReactNode;
}) {
    return (
        <Link href={href} className="text-slate-700 hover:text-slate-900">
            {children}
        </Link>
    );
}
