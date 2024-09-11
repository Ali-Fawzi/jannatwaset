import ServiceCard from "~/components/ui/ServiceCard";
import {Button} from "~/components/ui/Button";
import {Link} from "@remix-run/react";
import * as motion from "framer-motion/client"

export default function OurServices() {
    const services = [1,2,3,4,5,6]
    return (
        <div className='flex flex-col items-center justify-center px-4 gap-16 my-8'>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 1 }}
                className='flex flex-col items-center justify-center gap-4'
            >
                <span className='text-2xl'>خدماتنا</span>
                <hr className='bg-green pb-[1px] w-8'/>
                <span>توفر شركة جنة واسط العديد من الخدمات الاستثمارية والزراعية وتربية الابقار وزيادة انتاجيتها .</span>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {services.map((service, index) =>
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            x: 72
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{once: true}}
                        transition={{ease: "easeOut", duration: 1}}
                    >
                        <ServiceCard/>
                    </motion.div>
                )}

            </div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{ease: "easeOut", duration: 1}}
            >
            <Link to={'#'} className='mt-8'>
                    <Button variant='secondary'>
                        عرض كل الخدمات
                    </Button>
                </Link>
            </motion.div>
        </div>
    )
}