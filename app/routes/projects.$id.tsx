import {defer, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import {useLoaderData} from "react-router";
import ProjectDetails from "~/components/sections/ProjectDetails";
import {useRouteLoaderData} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "تفاصيل المشروع" },
        { name: "description", content: "تفاصيل المشروع التابع لشركة واسط الزراعية" },
    ];
};
export async function loader(args: LoaderFunctionArgs) {
    const {id} = args.params;
    const criticalData = await loadCriticalData(id);

    return defer({...criticalData});
}
async function loadCriticalData(id: string | undefined) {
    const project = await fetch(`${process.env.BASE_URL}/api/Projects/${id}`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return {
        project
    };
}
export default function Project() {
    const {assetsUrl} = useRouteLoaderData<typeof loader>('root');
    const {project} = useLoaderData();

    return (
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'تفاصيل المشروع'}/>
            </section>
            <section className='mb-16'>
                <ProjectDetails project={project} assetsUrl={assetsUrl} />
            </section>
        </div>
    );
}
