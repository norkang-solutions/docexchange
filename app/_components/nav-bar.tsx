"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Button from "./button";
import { ROUTES } from "../_constants/routes";
import { useAuth } from "../_contexts/auth-context";
import LoadingSpinner from "./loading-spinner";
import { Dictionary } from "../_dictionaries/type";

interface NavBarProps {
    dict: Dictionary;
}

export default function NavBar({ dict }: NavBarProps) {
    const pathname = usePathname();
    const { user, loading } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const renderLinks = () => (
        <>
            <li>
                <Button href={ROUTES.CONTRIBUTE} variant="secondary">
                    {dict.contribute}
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
    );

    return (
        <nav
            className={twJoin(
                "flex items-center justify-between w-full p-4 bg-white relative"
            )}
        >
            <Link href="/">[LOGO]</Link>

            {/* Hamburger Menu Button */}
            <button
                type="button"
                className="md:hidden"
                onClick={handleMobileMenuToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
            >
                {/* Hamburger Icon */}
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-4">
                {renderLinks()}
            </ul>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="absolute top-full left-0 w-full bg-white md:hidden"
                >
                    <ul className="flex flex-col items-center gap-4 p-4">
                        {renderLinks()}
                    </ul>
                </div>
            )}
        </nav>
    );
}
