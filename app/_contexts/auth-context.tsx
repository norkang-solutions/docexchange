"use client";

import { auth } from "@/firebase/client";
import { signOut } from "firebase/auth";
import getUser from "@/firebase/firestore/get-user";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { User } from "../_entities/models/user";

type AuthContextType = {
    user: User | null;
    loading: boolean;
    signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signOut: () => {},
});

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async currentUser => {
            if (currentUser) {
                setUser(await getUser(currentUser.uid));
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = useMemo(
        () => ({ user, loading, signOut: () => signOut(auth) }),
        [user, loading]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
