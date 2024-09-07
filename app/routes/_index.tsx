import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/sections/Hero";
import Greeting from "~/components/sections/Greeting";
import OurServices from "~/components/sections/OurServices";
import LatestProjects from "~/components/sections/LatestProjects";
import LatestArticles from "~/components/sections/LatestArticles";
import Sponsors from "~/components/sections/Sponsors";
import Newsletter from "~/components/sections/Newsletter";
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
            <LatestArticles />
        </section>
        <section className='mt-16'>
            <Sponsors />
        </section>
        <section className='mt-16'>
            <Newsletter />
        </section>
    </div>
  );
}
