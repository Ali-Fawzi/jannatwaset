import type {ActionFunction, MetaFunction} from "@remix-run/node";
import SecondaryHero from "~/components/ui/SecondaryHero";
import Contact from "~/components/sections/Contact";
import MapLocation from "~/components/MapLocation";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";

export const meta: MetaFunction = () => {
    return [
        { title: "تواصل معنا" },
        { name: "description", content: "يمكنك التواصل مع شركة جنة واسط الزراعية عن طريق البريد الالكتروني او رقم الهاتف او ارسال رسالة للشركة" },
    ];
};
export const action: ActionFunction = async ({ request }) => {
    await new Promise((res) => setTimeout(res, 1000));
    const formData = await request.formData();
    const name = formData.get("name");
    const phoneNumber = formData.get("phoneNumber");
    const location = formData.get("location");
    const message = formData.get("message");
    const email = formData.get("email");

    const res = await fetch(`${process.env.BASE_URL}/api/ContactUs`, {
        method: "post",
        body: JSON.stringify({ email, phoneNumber, location, message, name }),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });

    return res;

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
