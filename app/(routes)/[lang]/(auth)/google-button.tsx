import Button from "@/app/_components/button";
import GoogleIcon from "@/app/_components/icons/google-icon";
import { ButtonHTMLAttributes } from "react";

export default function GoogleButton({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button type="button" variant="secondary" {...props}>
            <div className="flex flex-row items-center gap-2 justify-center">
                <GoogleIcon />
                {children}
            </div>
        </Button>
    );
}
