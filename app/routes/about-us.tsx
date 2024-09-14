import type { MetaFunction } from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import Statistics from "~/components/sections/Statistics";
import Sponsors from "~/components/sections/Sponsors";
import Newsletter from "~/components/sections/Newsletter";
import About from "~/components/sections/About";

export const meta: MetaFunction = () => {
    return [
        { title: "حول الشركة" },
        { name: "description", content: "لمحة عن تاريخ الشركة و معلومات تخص الخدمات و رؤية الشركة" },
    ];
};

export default function AboutUs() {
    return (
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'حول الشركة'}/>
            </section>
            <section>
                <About />
            </section>
            <section className='my-16 mt-72'>
                <Statistics />
            </section>
            <section className='py-16 bg-background'>
                <Sponsors />
            </section>
            <section>
                <Newsletter />
            </section>
        </div>
    );
}
