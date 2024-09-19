import {defer, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurServices from "~/components/sections/OurServices";
import {useRouteLoaderData} from "@remix-run/react";
import {useLoaderData} from "react-router";
import {loader} from "~/routes/projects._index";
export const meta: MetaFunction = () => {
    return [
        { title: "حول الشركة" },
        { name: "description", content: "لمحة عن تاريخ الشركة و معلومات تخص الخدمات و رؤية الشركة" },
    ];
};
export async function loader() {
    const criticalData = await loadCriticalData();

    return defer({...criticalData});
}
async function loadCriticalData() {
    const duties = await fetch(`${process.env.BASE_URL}/api/Duty`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return {
        duties
    };
}
export default function Services() {
    const {assetsUrl} = useRouteLoaderData<typeof loader>('root');
    const {duties} = useLoaderData();
    return (
        <>
            <section>
                <SecondaryHero title={'الخدمات'} />
            </section>
            <section className='mb-16'>
                <OurServices assetsUrl={assetsUrl} duties={duties} variant={'page'} />
            </section>
        </>
    );
}
