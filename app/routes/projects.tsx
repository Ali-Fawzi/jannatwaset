import type { MetaFunction } from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurProjects from "~/components/sections/OurProjects";

export const meta: MetaFunction = () => {
    return [
        { title: "حول الشركة" },
        { name: "description", content: "لمحة عن تاريخ الشركة و معلومات تخص الخدمات و رؤية الشركة" },
    ];
};

export default function Projects() {
    return (
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'المشاريع'}/>
            </section>
            <section className='mb-16'>
                <OurProjects/>
            </section>
        </div>
    );
}
