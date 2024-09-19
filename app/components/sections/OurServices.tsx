import ServiceCard from "~/components/ui/ServiceCard";
import {Button} from "~/components/ui/Button";
import {Link} from "@remix-run/react";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import {duty, dutyResponse} from "~/lib/type";

export default function OurServices({variant = 'section', duties, assetsUrl}: {variant?: 'page' | 'section'; duties: dutyResponse; assetsUrl: string}) {
    return (
        <div className='flex flex-col items-center justify-center px-4 overflow-hidden gap-16 my-8'>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{ once: true }}
                className='flex flex-col items-center justify-center gap-4 opacity-0'
            >
                <span className='text-2xl font-bold'>خدماتنا</span>
                <hr className='bg-green pb-[1px] w-8'/>
                <span>توفر شركة جنة واسط العديد من الخدمات الاستثمارية والزراعية وتربية الابقار وزيادة انتاجيتها .</span>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {duties.data.map((duty: duty, index) =>
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
                        <ServiceCard duty={duty} assetsUrl={assetsUrl}/>
                    </motion.div>
                )}
            </div>
            {variant === 'section' && (
                <motion.div
                    initial={false}
                    variants={animationVariants}
                    whileInView={'visible'}
                    viewport={{once: true}}
                    className='opacity-0'
                >
                    <Link to={'/services'} prefetch={'intent'} className='mt-8'>
                        <Button variant='secondary'>
                            عرض كل الخدمات
                        </Button>
                    </Link>
                </motion.div>
            )}
        </div>
    )
}