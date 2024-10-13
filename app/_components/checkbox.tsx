import { InputHTMLAttributes, ReactNode } from "react";
import ErrorP from "./error-p";

type CheckmarkCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    children: ReactNode;
};

export default function CheckmarkCheckbox({
    error,
    children,
    ...props
}: CheckmarkCheckboxProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex items-center flex gap-2">
                <input
                    className="peer relative appearance-none shrink-0 w-5 h-5 mt-1 checked:bg-emerald-800 border border-slate-300 rounded-md checked:border-emerald-800 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                    type="checkbox"
                    {...props}
                />
                <svg
                    className="absolute p-1 w-5 h-5 pointer-events-none stroke-white fill-none peer-checked:!fill-emerald-800 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 6L9 17l-5-5" />
                </svg>
                <label
                    className="text-base font-medium text-slate-700"
                    htmlFor={props.id}
                >
                    {children}
                </label>
            </div>
            {error && <ErrorP>{error}</ErrorP>}
        </div>
    );
}
