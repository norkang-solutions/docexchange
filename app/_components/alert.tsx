import { twMerge } from "tailwind-merge";

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    type: "info" | "success" | "warning" | "error";
};

export default function Alert({ children, type, ...props }: AlertProps) {
    const bgColor = {
        info: "bg-blue-50 text-blue-800",
        success: "bg-emerald-50 text-emerald-800",
        warning: "bg-yellow-50 text-yellow-800",
        error: "bg-red-50 text-red-800",
    };

    return (
        <div className={twMerge("p-4 rounded-md", bgColor[type])} {...props}>
            {children}
        </div>
    );
}
