import ServiceCard from "~/components/ui/ServiceCard";
import {Button} from "~/components/ui/Button";
import {Link} from "@remix-run/react";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";

export default function OurServices() {
    const services = [1,2,3,4,5,6]
    return (
        <div className='flex flex-col items-center justify-center px-4 gap-16 my-8'>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{ once: true }}
                className='flex flex-col items-center justify-center gap-4 opacity-0'
            >
                <span className='text-2xl'>خدماتنا</span>
                <hr className='bg-green pb-[1px] w-8'/>
                <span>توفر شركة جنة واسط العديد من الخدمات الاستثمارية والزراعية وتربية الابقار وزيادة انتاجيتها .</span>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto overflow-hidden'>
                {services.map((service, index) =>
                    <motion.div
                        key={index}
                        variants={animationVariants}
                        custom={index}
                        initial={{
                            x: 72
                        }}
                        whileInView={'correctX'}
                        viewport={{once: true}}
                        className='opacity-0'
                    >
                        <ServiceCard/>
                    </motion.div>
                )}
            </div>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{once: true}}
                className='opacity-0'
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