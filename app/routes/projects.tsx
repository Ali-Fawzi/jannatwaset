import type { MetaFunction } from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurServices from "~/components/sections/OurServices";

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
                <OurServices/>
            </section>
        </div>
    );
}
