import { InputHTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";
import ErrorP from "./error-p";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label
                htmlFor={props.id}
                className="text-base font-medium text-slate-700"
            >
                {label}
            </label>
            <input
                className={twJoin(
                    "px-3 py-2 text-base bg-white border border-slate-300 rounded-lg",
                    "text-slate-900 placeholder:text-slate-400",
                    "hover:border-slate-400",
                    "focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                )}
                {...props}
            />
            {error && <ErrorP>{error}</ErrorP>}
        </div>
    );
}
