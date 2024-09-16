import {defer, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurProjects from "~/components/sections/OurProjects";
import {useLoaderData} from "react-router";
import {useRouteLoaderData} from "@remix-run/react";

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
    const projects = await fetch(`${process.env.BASE_URL}/api/Projects?pageNumber=1&pageSize=6`).then(response => {
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
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'المشاريع'}/>
            </section>
            <section className='mb-16'>
                <OurProjects projects={projects} assetsUrl={assetsUrl} />
            </section>
        </div>
    );
}
