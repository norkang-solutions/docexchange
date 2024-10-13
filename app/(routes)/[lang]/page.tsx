import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";

export default function Home({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    return (
        <div>
            <main className="text-center text-4xl">{dict.hello_world}</main>
        </div>
    );
}
