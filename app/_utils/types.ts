import { ReactNode } from "react";
import { Locale } from "../dictionaries";

export type LangParams = {
    params: {
        lang: Locale;
    };
};

export type LayoutProps = LangParams & {
    children: ReactNode;
};
