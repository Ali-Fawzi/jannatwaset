import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
export const meta: MetaFunction = () => {
    return [
        { title: "تفاصيل الخدمة" },
        { name: "description", content: "تفاصيل الخدمة المقدمة من شركة واسط الزراعية" },
    ];
};
export async function loader(args: LoaderFunctionArgs) {
    const {id} = args.params;
    return id;
}
export default function Service() {
    return (
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'تفاصيل الخدمة'} />
            </section>
            <section className='mb-16'>

            </section>
        </div>
    );
}
