import Alert from "@/app/_components/alert";

export default function AlreadySignedInAlert({
    username,
}: {
    username: string;
}) {
    return (
        <Alert type="info">
            <p className="text-sm text-slate-700">
                Why are you here? You are already signed in as{" "}
                <span className="font-semibold">{username}</span>.
            </p>
        </Alert>
    );
}
