import { twJoin } from "tailwind-merge";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            type="button"
            className={twJoin(
                "px-3 py-2 text-base font-medium text-white bg-emerald-500 rounded-lg",
                "transition-colors duration-300",
                "hover:bg-emerald-600",
                "disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
            )}
            {...props}
        >
            {children}
        </button>
    );
}
