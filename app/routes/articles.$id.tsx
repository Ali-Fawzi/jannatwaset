import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";

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
    return (
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'تفاصيل المقالة'} />
            </section>
            <section className='mb-16'>

            </section>
        </div>
    );
}
