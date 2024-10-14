import Link from "next/link";

type TextDescriptionCardProps = {
    title: string;
    description: string;
    link: string;
};
export default function TextDescriptionCard({
    title,
    description,
    link,
}: TextDescriptionCardProps) {
    return (
        <Link
            href={link}
            className="gap-2 text-md font-medium border border-gray-200 rounded-md p-4 col-span-2 md:col-span-1 hover:bg-gray-100"
        >
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm font-normal">{description}</p>
        </Link>
    );
}
