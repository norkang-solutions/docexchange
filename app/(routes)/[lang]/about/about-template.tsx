import TextDescriptionCard from "@/app/_components/text-description-card";
import { ReactNode } from "react";

type Card = {
    title: string;
    description: string;
    link: string;
};

type AboutTemplateProps = {
    title: string;
    cards?: Card[];
    children?: ReactNode;
};

export default function AboutTemplate({
    title,
    cards = [],
    children,
}: AboutTemplateProps) {
    return (
        <div className="flex flex-col gap-4 px-4 w-full max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-semibold  ">{title}</h1>
            <div className="text-md space-y-2">{children}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {cards.map(card => (
                    <TextDescriptionCard
                        key={card.link}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
}
