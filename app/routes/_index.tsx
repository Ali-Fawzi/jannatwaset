import {defer, MetaFunction} from "@remix-run/node";
import Hero from "~/components/sections/Hero";
import OurServices from "~/components/sections/OurServices";
import LatestProjects from "~/components/sections/LatestProjects";
import LatestArticles from "~/components/sections/LatestArticles";
import Sponsors from "~/components/sections/Sponsors";
import Newsletter from "~/components/sections/Newsletter";
import Statistics from "~/components/sections/Statistics";
import Greeting from "~/components/sections/Greeting";
import {useLoaderData} from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "شركة جنة واسط الزراعية" },
    { name: "description", content: "هي شركة استثمارات زراعية وتربية الابقار توفر العديد من الخدمات للزبائن ." },
  ];
};
export async function loader() {
    // Start fetching non-critical data without blocking time to first byte
    const deferredData = loadDeferredData();

    // Await the critical data required to render initial state of the page
    const criticalData = await loadCriticalData();

    return defer({...deferredData, ...criticalData});
}
async function loadCriticalData() {
    const hero = await fetch(`${process.env.BASE_URL}/api/Slider`, {
        method: "GET",
        headers: {
            'accept': 'text/plain',
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    return {
        hero
    };
}
async function loadDeferredData() {
    const sponsor = await fetch(`${process.env.BASE_URL}/api/Sponser`)

    return {
        sponsor
    };
}
export default function Index() {
    const {hero, sponsor} = useLoaderData();
    return (
        <div className='-mb-24'>
        <section>
            <Hero hero={hero} />
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
