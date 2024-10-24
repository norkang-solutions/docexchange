import { COMPANY_NAME } from "@/app/_constants/names";
import { ROUTES } from "@/app/_constants/routes";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import Link from "next/link";

export default function Home({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    return (
        <div className="px-4 py-20 h-screen flex flex-col text-emerald-950 gap-8 justify-center max-w-md">
            <section className="flex flex-col gap-4 text-2xl">
                <h1>
                    {
                        dict.open_source_web_application_that_lets_you_upload_and_find_academic_work
                    }
                </h1>
                <h1>
                    {
                        dict.as_a_contributor_you_get_paid_based_on_the_popularity_of_your_uploads
                    }
                </h1>
            </section>

            <section className="flex flex-col gap-4 text-base">
                <h2 className="text-slate-600">
                    {COMPANY_NAME} {dict.is_a_student_powered_study_platform}.{" "}
                    {dict.contribute_to_the_open_source_project_on}{" "}
                    <Link
                        className="underline underline-offset-4 decoration-emerald-500"
                        href={ROUTES.GITHUB_REPO}
                    >
                        GitHub
                    </Link>
                    .
                </h2>
            </section>
        </div>
    );
}
