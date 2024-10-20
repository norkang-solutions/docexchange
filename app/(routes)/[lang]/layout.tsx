import localFont from "next/font/local";
import "../../globals.css";
import NavBar from "@/app/_components/nav-bar";
import { AuthProvider } from "@/app/_contexts/auth-context";
import { getDictionary } from "@/app/dictionaries";
import { LangParams } from "@/app/_utils/types";
import BottomBar from "@/app/_components/bottom-bar";

const geistSans = localFont({
    src: "../../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
    params: { lang },
    children,
}: LangParams & { children: React.ReactNode }) {
    const dict = getDictionary(lang);
    return (
        <html lang={lang}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-700 max-w-screen-2xl mx-auto`}
            >
                <AuthProvider>
                    <NavBar dict={dict} />
                    <main className="min-h-screen">{children}</main>
                    <BottomBar dict={dict} />
                </AuthProvider>
            </body>
        </html>
    );
}
