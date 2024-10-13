import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

export const locales = ["en-US", "nb-NO"];
export const defaultLocale = "nb-NO";

function getLocale(request: NextRequest) {
    const headers = {
        "accept-language": request.headers.get("accept-language"),
    } as Negotiator.Headers;
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest): void | Response {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        locale =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return undefined;

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next), sitemap.xml, robots.txt, favicon.ico and Azure static web apps (.swa)
        "/((?!_next|sitemap*|server-sitemap*|robots.txt|favicon.ico|.swa).*)",
    ],
};
