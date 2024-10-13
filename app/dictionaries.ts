import { enUS } from "./_dictionaries/en-us";
import { nbNO } from "./_dictionaries/nb-no";

export type Locale = "en-US" | "nb-NO";

export function getDictionary(locale: Locale) {
    if (locale === "en-US") return enUS;
    if (locale === "nb-NO") return nbNO;
    return enUS;
}
