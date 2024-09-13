import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import clsx from "clsx";

export default function Statistics() {
    const statisticData = [
        {
            name: 'زيارات الزبائن',
            value: 565,
            style: 'border-gray-200 border-b xl:border-b-0 md:border-l'
        },
        {
            name: 'المشاريع المنجزة',
            value: 945,
            style: 'border-gray-200 border-b xl:border-b-0 xl:border-l'
        },
        {
            name: 'المعدات المنصبة',
            value: 896,
            style: 'border-gray-200 border-b xl:border-b-0 md:border-l'

        },
        {
            name: 'الاستثمارات الزراعية',
            value: 3652,
        },
    ]
    return (
        <div className='flex flex-col items-center justify-center gap-8 px-4'>
            <motion.span
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{ once: true }}
                className='text-7xl sm:text-8xl md:text-9xl font-bold opacity-0'
            >
                الاحصائيات
            </motion.span>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{ once: true }}
                className='w-full max-w-6xl mx-auto drop-shadow-sm p-4 border border-gray-200 rounded-lg opacity-0'>
                <div
                    className='w-full border border-gray-200 rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center'
                >
                    {statisticData.map((statistic, index) =>
                        <motion.div
                            variants={animationVariants}
                            initial={{
                                y: 72
                            }}
                            custom={index}
                            whileInView={'correctY'}
                            viewport={{once: true}}
                            key={statistic.name}
                            className={clsx('flex flex-col items-center md:items-end gap-2 justify-center py-8 px-16 w-full opacity-0', statistic.style)}
                        >
                            <span className='text-3xl'>+{statistic.value}</span>
                            <span>{statistic.name}</span>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}