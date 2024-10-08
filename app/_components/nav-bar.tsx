"use client";

import { AuthProvider, useAuth } from "../_contexts/auth-context";
import Button from "./button";

function SignOutButton() {
    const { signOut } = useAuth();
    return <Button onClick={signOut}>Sign Out</Button>;
}

export default function NavBar() {
    return (
        <AuthProvider>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">NavBar</h1>
                <div className="flex gap-2 items-center">
                    <SignOutButton />
                </div>
            </div>
        </AuthProvider>
    );
}
