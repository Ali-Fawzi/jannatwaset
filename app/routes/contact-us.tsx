import type { MetaFunction } from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";

export const meta: MetaFunction = () => {
    return [
        { title: "حول الشركة" },
        { name: "description", content: "لمحة عن تاريخ الشركة و معلومات تخص الخدمات و رؤية الشركة" },
    ];
};

export default function ContactUs() {
    return (
        <div className="-mb-24">
            <section>
                <SecondaryHero title={'تواصل معنا'} />
            </section>
        </div>
    );
}
