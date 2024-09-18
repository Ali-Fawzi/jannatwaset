import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import {useLoaderData} from "react-router";
export const meta: MetaFunction = () => {
    return [
        { title: "تفاصيل الخدمة" },
        { name: "description", content: "تفاصيل الخدمة المقدمة من شركة واسط الزراعية" },
    ];
};
export async function loader(args: LoaderFunctionArgs) {
    const {id} = args.params;
    const baseUrl = process.env.BASE_URL;

    return baseUrl;
}
export default function Service() {
    const loaderData = useLoaderData();
    return (
        <>
            <section>
                <SecondaryHero title={'تفاصيل الخدمة'} />
            </section>
            <section className='mb-16'>

            </section>
        </>
    );
}
