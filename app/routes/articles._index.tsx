import {defer, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurArticles from "~/components/sections/OurArticles";
import {useRouteLoaderData} from "@remix-run/react";
import {useLoaderData} from "react-router";
import OurProjectsSide from "~/components/sections/OurProjectsSide";

export const meta: MetaFunction = () => {
    return [
        { title: "مقالات شركة واسط الزراعية" },
        { name: "description", content: "مقالات شركة جنة واسط الزراعية في ما يخص الزراعة و الاستثمار و تقنيياتها" },
    ];
};
export async function loader() {
    const criticalData = await loadCriticalData();
    const deferredData = loadDeferredData()

    return defer({...deferredData, ...criticalData});
}
async function loadCriticalData() {
    const articles = await fetch(`${process.env.BASE_URL}/api/Artical?pageNumber=1&pageSize=6`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return {
        articles
    };
}
function loadDeferredData() {
    const projectsPromise = fetch(`${process.env.BASE_URL}/api/Projects?pageNumber=1&pageSize=3`)
        .then(res => res.json())
        .catch((error) => {
            console.error(error);
            return null;
        })

    return {
        projects: projectsPromise
    };
}
export default function Articles() {
    const {assetsUrl} = useRouteLoaderData<typeof loader>('root');
    const {articles, projects} = useLoaderData();

    return (
        <d>
            <section>
                <SecondaryHero title={'المقالات'} />
            </section>
            <section className='mb-16'>
                <div className='flex flex-col xl:flex-row items-center xl:items-start justify-center px-4 py-8 gap-16'>
                    <OurArticles articles={articles} assetsUrl={assetsUrl} />
                    <OurProjectsSide projects={projects} assetsUrl={assetsUrl} />
                </div>
            </section>
        </d>
    );
}
