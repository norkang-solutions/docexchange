"use client";

import localFont from "next/font/local";
import "../../globals.css";
import NavBar from "@/app/_components/nav-bar";
import { AuthProvider } from "@/app/_contexts/auth-context";
import { getDictionary } from "@/app/dictionaries";
import { LangParams } from "@/app/_utils/types";

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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AuthProvider>
                    <NavBar dict={dict} />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
