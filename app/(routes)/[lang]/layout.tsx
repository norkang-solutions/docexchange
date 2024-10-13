"use client";

import localFont from "next/font/local";
import "../../globals.css";
import NavBar from "@/app/_components/nav-bar";
import { AuthProvider } from "@/app/_contexts/auth-context";

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
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AuthProvider>
                    <NavBar />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
