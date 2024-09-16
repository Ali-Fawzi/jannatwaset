import {defer, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurArticles from "~/components/sections/OurArticles";
import {useRouteLoaderData} from "@remix-run/react";
import {loader} from "~/routes/_index";
import {useLoaderData} from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "حول الشركة" },
        { name: "description", content: "لمحة عن تاريخ الشركة و معلومات تخص الخدمات و رؤية الشركة" },
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
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'المقالات'} />
            </section>
            <section className='mb-16'>
                <OurArticles projects={projects} articles={articles} assetsUrl={assetsUrl} />
            </section>
        </div>
    );
}
