import {defer, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurProjects from "~/components/sections/OurProjects";
import {useLoaderData} from "react-router";
import {useRouteLoaderData} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "مشاريع شركة جنة واسط الزراعية" },
        { name: "description", content: "مشاريع جنة واسط الزراعية" },
    ];
};
export async function loader({ request }) {
    const url = new URL(request.url);
    const pageNumber = Number(url.searchParams.get('pageNumber')) || 1;
    const criticalData = await loadCriticalData(pageNumber);

    return defer({...criticalData});
}
async function loadCriticalData(pageNumber: string | number) {
    const projects = await fetch(`${process.env.BASE_URL}/api/Projects?pageNumber=${pageNumber}&pageSize=6`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return {
        projects
    };
}
export default function Projects() {
    const {assetsUrl} = useRouteLoaderData<typeof loader>('root');
    const {projects} = useLoaderData();
    return (
        <>
            <section>
                <SecondaryHero title={'المشاريع'}/>
            </section>
            <section className='mb-16'>
                <OurProjects projects={projects} assetsUrl={assetsUrl} />
            </section>
        </>
    );
}
