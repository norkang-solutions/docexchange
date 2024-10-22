"use client";

import Button from "@/app/_components/button";
import { Dictionary } from "@/app/_dictionaries/type";
import { auth } from "@/firebase/client";
import { signOut } from "firebase/auth";

export default function SignOutButton({ dict }: { dict: Dictionary }) {
    const handleSignOut = () => {
        signOut(auth);
    };

    return <Button onClick={handleSignOut}>{dict.sign_out}</Button>;
}
