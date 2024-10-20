import { InputHTMLAttributes, ReactNode } from "react";
import { twJoin } from "tailwind-merge";
import ErrorP from "./error-p";
import CheckIcon from "./icons/check-icon";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    children: ReactNode;
};

export default function Checkbox({ error, children, ...props }: CheckboxProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex items-center flex gap-2">
                <input
                    className={twJoin(
                        "peer relative appearance-none shrink-0 w-5 h-5 mt-1 border border-slate-300 rounded-md",
                        "checked:bg-emerald-500 checked:border-emerald-500",
                        "focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                    )}
                    type="checkbox"
                    {...props}
                />
                <CheckIcon
                    viewBox="0 0 16 16"
                    className={twJoin(
                        "absolute pointer-events-none fill-white w-5 h-5 mt-1",
                        "peer-checked:fill-white"
                    )}
                />
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
