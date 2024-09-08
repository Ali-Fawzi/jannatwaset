import type { MetaFunction } from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import Contact from "~/components/sections/Contact";
import MapLocation from "~/components/MapLocation";
import * as motion from "framer-motion/client"

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
            <section className='my-16'>
                <Contact />
            </section>
            <motion.section
                initial={{
                    opacity: 0,
                }}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{ease: "easeOut", duration: 1}}
                className='mt-16'
            >
                <MapLocation />
            </motion.section>
        </div>
    );
}
