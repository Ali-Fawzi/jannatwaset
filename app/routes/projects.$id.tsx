import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";

export const meta: MetaFunction = () => {
    return [
        { title: "تفاصيل المشروع" },
        { name: "description", content: "تفاصيل المشروع التابع لشركة واسط الزراعية" },
    ];
};
export async function loader(args: LoaderFunctionArgs) {
    const {id} = args.params;
    return id;
}
export default function Project() {
    return (
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'تفاصيل المشروع'}/>
            </section>
            <section className='mb-16'>

            </section>
        </div>
    );
}
