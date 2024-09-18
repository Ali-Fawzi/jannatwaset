import {defer, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurProjectsSide from "~/components/sections/OurProjectsSide";
import {useRouteLoaderData} from "@remix-run/react";
import {useLoaderData} from "react-router";
import ArticleDetails from "~/components/sections/ArticleDetails";

export const meta: MetaFunction = () => {
    return [
        { title: "تفاصيل المقالة" },
        { name: "description", content: "تفاصيل المقالة المنشورة على موقع شركة واسط الزراعية" },
    ];
};
export async function loader(args: LoaderFunctionArgs) {
    const {id} = args.params;

    const criticalData = await loadCriticalData(id);
    const deferredData = loadDeferredData()

    return defer({...deferredData, ...criticalData});
}
async function loadCriticalData(id: string | undefined) {
    const article = await fetch(`${process.env.BASE_URL}/api/Artical/${id}`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return {
        article
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
export default function Article() {
    const {assetsUrl} = useRouteLoaderData<typeof loader>('root');
    const {article, projects} = useLoaderData();
    return (
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'تفاصيل المقالة'} />
            </section>
            <section className='mb-16'>
                <div className='flex flex-col xl:flex-row items-center xl:items-start justify-center px-4 py-8 gap-16'>
                    <ArticleDetails article={article} assetsUrl={assetsUrl}/>
                    <OurProjectsSide projects={projects} assetsUrl={assetsUrl}/>
                </div>
            </section>
        </div>
    );
}
