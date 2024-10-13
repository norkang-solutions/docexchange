import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import AboutTemplate from "./about-template";

export default function About({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    // TODO: Add some cards
    return <AboutTemplate title={dict.about_us} />;
}
