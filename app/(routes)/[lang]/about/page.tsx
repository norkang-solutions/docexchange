import { LangParams } from "@/app/_utils/types";
import { getDictionary } from "@/app/dictionaries";
import AboutTemplate from "./about-template";

export default function About({ params: { lang } }: LangParams) {
    const dict = getDictionary(lang);

    return (
        <AboutTemplate title={dict.about_us}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            voluptate aspernatur officia, nobis quia praesentium qui corporis
            repudiandae autem enim ex et quos sint, voluptatum perspiciatis quo
            quaerat veritatis aliquid fugit. Corrupti illum, facere,
            consequuntur aliquid modi quidem consectetur quae, rem doloribus
            temporibus consequatur voluptates eaque optio dolor deserunt cumque.
        </AboutTemplate>
    );
}
