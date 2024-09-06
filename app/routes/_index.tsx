import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/sections/Hero";
import Greeting from "~/components/sections/Greeting";
import OurServices from "~/components/sections/OurServices";
import LatestProjects from "~/components/sections/LatestProjects";
import Articles from "~/components/sections/Articles";
import Sponsors from "~/components/sections/Sponsors";
import Contact from "~/components/sections/Contact";
import Statistics from "~/components/sections/Statistics";

export const meta: MetaFunction = () => {
  return [
    { title: "شركة جنة واسط الزراعية" },
    { name: "description", content: "هي شركة استثمارات زراعية وتربية الابقار توفر العديد من الخدمات للزبائن ." },
  ];
};

export default function Index() {
  return (
    <div className='-mb-24'>
        <section>
            <Hero />
        </section>
        <section className='bg-wheat'>
            <Greeting />
        </section>
        <section className='mt-16'>
            <OurServices />
        </section>
        <section className='mt-16'>
            <LatestProjects />
        </section>
        <section className='mt-16'>
            <Statistics />
        </section>
        <section className='mt-16 bg-background'>
            <Articles />
        </section>
        <section className='mt-16'>
            <Sponsors />
        </section>
        <section className='mt-16'>
            <Contact />
        </section>
    </div>
  );
}
