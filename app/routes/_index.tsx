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
import {Suspense} from "react";
import {Await} from "@remix-run/react";
import SponsorsSkeleton from "~/components/ui/skeletons/SponsorsSkeleton";

export const meta: MetaFunction = () => {
  return [
    { title: "شركة جنة واسط الزراعية" },
    { name: "description", content: "هي شركة استثمارات زراعية وتربية الابقار توفر العديد من الخدمات للزبائن ." },
  ];
};
export async function loader() {
    const deferredData = loadDeferredData();
    const criticalData = await loadCriticalData();

    return defer({...deferredData, ...criticalData, assetsUrl: process.env.BASE_URL});
}
async function loadCriticalData() {
    const hero = await fetch(`${process.env.BASE_URL}/api/Slider`).then(response => {
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
function loadDeferredData() {
    const sponsorsPromise = fetch(`${process.env.BASE_URL}/api/Sponser`)
        .then(res => res.json())
        .catch((error) => {
        console.error(error);
        return null;
    })

    return {
        sponsors: sponsorsPromise
    };
}
export default function Index() {
    const {hero, sponsors, assetsUrl} = useLoaderData();
    return (
    <div className='-mb-24'>
        <section>
            <Hero hero={hero} assetsUrl={assetsUrl} />
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
        {sponsors && (
            <section className='mt-16'>
                <Suspense fallback={<SponsorsSkeleton />}>
                    <Await resolve={sponsors}>
                        {(resolvedData) => <Sponsors sponsors={resolvedData} assetsUrl={assetsUrl} />}
                    </Await>
                </Suspense>
            </section>
        )}
        <section className='mt-16'>
            <Newsletter />
        </section>
    </div>
  );
}
