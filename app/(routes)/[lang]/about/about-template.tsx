import { ReactNode } from "react";

type AboutTemplateProps = {
    title: string;
    children: ReactNode;
};

export default function AboutTemplate({ title, children }: AboutTemplateProps) {
    return (
        <div className="flex flex-col gap-4 px-4 w-full max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-semibold  ">{title}</h1>
            <div className="text-md">{children}</div>
        </div>
    );
}
