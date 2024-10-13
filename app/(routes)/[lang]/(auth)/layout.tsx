import { AuthProvider } from "@/app/_contexts/auth-context";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthProvider>{children}</AuthProvider>;
}
