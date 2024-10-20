"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Button from "./button";
import { ROUTES } from "../_constants/routes";
import { useAuth } from "../_contexts/auth-context";
import LoadingSpinner from "./loading-spinner";
import HamburgerIcon from "./icons/hamburger-icon";
import { Dictionary } from "../_dictionaries/type";
import DocExchangeTitle from "./docexchange-title";

export default function NavBar({ dict }: { dict: Dictionary }) {
    const pathname = usePathname();
    const { user, loading } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const renderLinks = useMemo(
        () => (
            <>
                <li>
                    <Button href={ROUTES.CONTRIBUTE} variant="secondary">
                        {dict.contribute_documents}
                    </Button>
                </li>
                <li>
                    <Button href={ROUTES.EXPLORE} variant="secondary">
                        {dict.explore}
                    </Button>
                </li>
                {loading && <LoadingSpinner />}
                {!loading && (
                    <li>
                        <Button
                            href={user ? ROUTES.DASHBOARD : ROUTES.SIGN_IN}
                            variant="primary"
                        >
                            {user ? dict.dashboard : dict.sign_in}
                        </Button>
                    </li>
                )}
            </>
        ),
        [dict, loading, user]
    );

    return (
        <nav
            className={twJoin(
                "flex items-center justify-between w-full p-4 bg-white relative"
            )}
        >
            <Link href={ROUTES.HOME} className="text-xl">
                <DocExchangeTitle />
            </Link>

            <button
                type="button"
                className="md:hidden"
                onClick={handleMobileMenuToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
            >
                <HamburgerIcon className="text-slategrey-800 w-6 h-6" />
            </button>

            <ul className="hidden md:flex items-center gap-4">{renderLinks}</ul>

            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="absolute top-full left-0 w-full bg-white md:hidden"
                >
                    <ul className="flex flex-col items-center gap-4 p-4">
                        {renderLinks}
                    </ul>
                </div>
            )}
        </nav>
    );
}
