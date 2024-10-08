import { twMerge } from "tailwind-merge";

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    type: "info" | "success" | "warning" | "error";
};

export default function Alert({ children, type, ...props }: AlertProps) {
    const bgColor = {
        info: "bg-blue-50",
        success: "bg-emerald-50",
        warning: "bg-yellow-50",
        error: "bg-red-50",
    };

    return (
        <div className={twMerge("p-4 rounded-md", bgColor[type])} {...props}>
            {children}
        </div>
    );
}
