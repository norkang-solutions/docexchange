import Button from "@/app/_components/button";
import GoogleIcon from "@/app/_components/icons/google-icon";
import LoadingSpinner from "@/app/_components/loading-spinner";
import { ButtonHTMLAttributes } from "react";

type GoogleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading: boolean;
};

export default function GoogleButton({
    isLoading,
    children,
    ...props
}: GoogleButtonProps) {
    return (
        <Button type="button" variant="secondary" {...props}>
            <div className="flex flex-row items-center gap-2 justify-center">
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <GoogleIcon />
                        {children}
                    </>
                )}
            </div>
        </Button>
    );
}
