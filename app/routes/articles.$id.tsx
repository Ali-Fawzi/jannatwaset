import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import OurArticles from "~/components/sections/OurArticles";
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
    return id;
}
export default function Article() {
    const {assetsUrl, projects} = useRouteLoaderData<typeof loader>('root');
    const {article} = useLoaderData();
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
