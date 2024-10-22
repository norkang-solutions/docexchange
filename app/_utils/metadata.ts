import { Metadata } from "next";
import { COMPANY_NAME } from "../_constants/names";
import { getDictionary } from "../dictionaries";
import { LangParams } from "./types";
import { Dictionary } from "../_dictionaries/type";

export function getPageMetadata(titleKey?: (dict: Dictionary) => string) {
    return ({ params: { lang } }: LangParams) => {
        const dict = getDictionary(lang);
        const title = titleKey && titleKey(dict);

        return {
            title: `${title ? `${title} | ` : ""}${COMPANY_NAME}`,
            description: dict.docexchangeio_a_student_powered_study_platform,
        } as Metadata;
    };
}
