import { twJoin } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
};

export default function Button({
    children,
    variant = "primary",
    ...props
}: ButtonProps) {
    const baseClasses =
        "px-6 py-2 text-base font-medium rounded-lg transition-colors duration-300 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed";

    const variantClasses =
        variant === "primary"
            ? "text-white bg-emerald-500 hover:bg-emerald-600"
            : "text-emerald-800 bg-emerald-100 hover:bg-emerald-200";

    return (
        <button
            type="button"
            className={twJoin(baseClasses, variantClasses)}
            {...props}
        >
            {children}
        </button>
    );
}
