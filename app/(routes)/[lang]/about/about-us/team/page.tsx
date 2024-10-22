import { getPageMetadata } from "@/app/_utils/metadata";
import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import AboutTemplate from "../../about-template";
import TeamMemberCard from "./team-member-card";

export const generateMetadata = getPageMetadata(dict => dict.team);

export default function AboutTeam({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    return (
        <AboutTemplate title={dict.team}>
            <div className="flex flex-col">
                <p>{dict.are_you_interested_in_joining_our_team}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                    <TeamMemberCard
                        name="Espen Noreng"
                        image="https://media.licdn.com/dms/image/v2/D4D03AQHvJFiOkSRWhw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725526981227?e=1734566400&v=beta&t=z5MFH3lxP5W5I0qcGwQn2P2KwNTAA2ERy4CRssTDeBI"
                        email="espen.noreng@docexchange.io"
                        linkedin="https://www.linkedin.com/in/espen-noreng/"
                        github="https://github.com/espennoreng"
                    />
                    <TeamMemberCard
                        name="Edward Kang"
                        image="https://media.licdn.com/dms/image/v2/D4D03AQEzZW9CMU9hfw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703344136119?e=1734566400&v=beta&t=vpfb4KC6sYQdTjry9iEtQJjsui1t2hIBTAZb1pKOZ8w"
                        email="edward.kang@docexchange.io"
                        linkedin="https://www.linkedin.com/in/edward-kng/"
                        github="https://github.com/edward-kng"
                    />
                </div>
            </div>
        </AboutTemplate>
    );
}
