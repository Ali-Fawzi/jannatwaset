import type { MetaFunction } from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import Contact from "~/components/sections/Contact";
import MapLocation from "~/components/MapLocation";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";

export const meta: MetaFunction = () => {
    return [
        { title: "حول الشركة" },
        { name: "description", content: "لمحة عن تاريخ الشركة و معلومات تخص الخدمات و رؤية الشركة" },
    ];
};

export default function ContactUs() {
    return (
        <>
            <section>
                <SecondaryHero title={'تواصل معنا'} />
            </section>
            <section className='my-16'>
                <Contact />
            </section>
            <motion.section
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{once: true}}
                className='mt-16 opacity-0'
            >
                <MapLocation />
            </motion.section>
        </>
    );
}
