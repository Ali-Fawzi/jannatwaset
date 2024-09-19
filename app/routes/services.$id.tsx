import {defer, LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import {useLoaderData} from "react-router";
import ServiceDetails from "~/components/sections/ServiceDetails";
import {useRouteLoaderData} from "@remix-run/react";
import ServicesMenu from "~/components/sections/ServicesMenu";
export const meta: MetaFunction = () => {
    return [
        { title: "تفاصيل الخدمة" },
        { name: "description", content: "تفاصيل الخدمة المقدمة من شركة واسط الزراعية" },
    ];
};
export async function loader(args: LoaderFunctionArgs) {
    const {id} = args.params;

    const criticalData = await loadCriticalData(id);
    const deferredData = loadDeferredData()

    return defer({...deferredData, ...criticalData});
}
async function loadCriticalData(id: string | undefined) {
    const duty = await fetch(`${process.env.BASE_URL}/api/Duty/${id}`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return {
        duty
    };
}
function loadDeferredData() {
    const dutiesPromise = fetch(`${process.env.BASE_URL}/api/Duty?pageNumber=1&pageSize=6`)
        .then(res => res.json())
        .catch((error) => {
            console.error(error);
            return null;
        })

    return {
        duties: dutiesPromise
    };
}
export default function Service() {
    const {assetsUrl} = useRouteLoaderData<typeof loader>('root');
    const {duty, duties} = useLoaderData();
    return (
        <>
            <section>
                <SecondaryHero title={'تفاصيل الخدمة'}/>
            </section>
            <section className='mb-16'>
                <div className='flex flex-col xl:flex-row items-center xl:items-start justify-center px-4 py-8 gap-16'>
                    <ServiceDetails duty={duty} assetsUrl={assetsUrl}/>
                    <ServicesMenu duties={duties} phoneNumberService={duty.phoneNumberService} />
                </div>
            </section>
        </>
    );
}
