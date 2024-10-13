import { HTMLProps, ReactNode } from "react";

type ErrorPProps = HTMLProps<HTMLParagraphElement> & {
    children: ReactNode;
};

export default function ErrorP({ children, ...props }: ErrorPProps) {
    return (
        <p className="text-red-500 text-sm" {...props}>
            {children}
        </p>
    );
}
