import {defer, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import Statistics from "~/components/sections/Statistics";
import Sponsors from "~/components/sections/Sponsors";
import Newsletter from "~/components/sections/Newsletter";
import About from "~/components/sections/About";
import {Suspense} from "react";
import SponsorsSkeleton from "~/components/ui/skeletons/SponsorsSkeleton";
import {Await, useRouteLoaderData} from "@remix-run/react";
import {useLoaderData} from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "حول الشركة" },
        { name: "description", content: "لمحة عن تاريخ الشركة و معلومات تخص الخدمات و رؤية الشركة" },
    ];
};
export async function loader() {
    const deferredData = loadDeferredData();

    return defer({...deferredData});
}
function loadDeferredData() {
    const sponsorsPromise = fetch(`${process.env.BASE_URL}/api/Sponser`)
        .then(res => res.json())
        .catch((error) => {
            console.error(error);
            return null;
        })

    const statisticPromise = fetch(`${process.env.BASE_URL}/api/Statistic`)
        .then(res => res.json())
        .catch((error) => {
            console.error(error);
            return null;
        })

    return {
        sponsors: sponsorsPromise,
        statistic: statisticPromise,
    };
}
export default function AboutUs() {
    const {assetsUrl} = useRouteLoaderData<typeof loader>('root');
    const {sponsors, statistic} = useLoaderData();

    return (
        <>
            <section>
                <SecondaryHero title={'حول الشركة'}/>
            </section>
            <section>
                <About />
            </section>
            {statistic && (
                <section className='my-16 mt-72'>
                    <Suspense fallback={<span className='text-lg font-semibold text-center'>تحميل...</span>}>
                        <Await resolve={statistic}>
                            {(resolvedData) => <Statistics statistic={resolvedData} />}
                        </Await>
                    </Suspense>
                </section>
            )}
            {sponsors && (
                <section className='py-16 bg-background'>
                    <Suspense fallback={<SponsorsSkeleton/>}>
                        <Await resolve={sponsors}>
                            {(resolvedData) => <Sponsors sponsors={resolvedData} assetsUrl={assetsUrl}/>}
                        </Await>
                    </Suspense>
                </section>
            )}
            <section>
                <Newsletter />
            </section>
        </>
    );
}
