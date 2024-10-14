import Image from "next/image";
import Link from "next/link";

type TeamMemberCardProps = {
    name: string;
    image: string;
    email: string;
    github: string;
    linkedin: string;
};

export default function TeamMemberCard({
    name,
    image,
    email,
    github,
    linkedin,
}: TeamMemberCardProps) {
    return (
        <div className="flex flex-col items-center space-y-2">
            <Image
                className="w-1/2 rounded-full border"
                width={512}
                height={512}
                src={image}
                alt={name}
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <a
                href={`mailto:${email}`}
                className="text-sm text-gray-700 hover:underline"
            >
                {email}
            </a>
            <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700  hover:underline"
            >
                LinkedIn
            </Link>
            <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700  hover:underline"
            >
                GitHub
            </Link>
        </div>
    );
}
