import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import clsx from "clsx";
import statisticImg from '../../asstes/images/statistics.png'
import {statistic} from "~/lib/type";

function decrementByOne(value: number) {
    return value > 0 ? `+${value - 1}` : value;
}
export default function Statistics({statistic}: {statistic: statistic}) {
    const statisticData = [
        {
            name: 'زيارات الزبائن',
            value: decrementByOne(565),
            style: 'border-gray-200 border-b xl:border-b-0 md:border-l'
        },
        {
            name: 'المشاريع المنجزة',
            value: decrementByOne(statistic.projectsFinished),
            style: 'border-gray-200 border-b xl:border-b-0 xl:border-l'
        },
        {
            name: 'المعدات المنصبة',
            value: decrementByOne(statistic.equipmentInstalled),
            style: 'border-gray-200 border-b xl:border-b-0 md:border-l'

        },
        {
            name: 'الاستثمارات الزراعية',
            value: decrementByOne(statistic.envestments),
        },
    ]
    return (
        <div className='flex flex-col items-center justify-center gap-8 px-4 overflow-hidden'>
            <motion.img
                initial={{
                    scale: 1.25
                }}
                variants={animationVariants}
                whileInView={['visible', 'correctScale']}
                viewport={{ once: true }}
                className='opacity-0'
                src={statisticImg}
            />
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
                                y: -72
                            }}
                            custom={index}
                            whileInView={'correctY'}
                            viewport={{once: true}}
                            key={statistic.name}
                            className={clsx('flex flex-col items-center md:items-end gap-2 justify-center py-8 px-16 w-full opacity-0', statistic.style)}
                        >
                            <span className='text-4xl'>{statistic.value}</span>
                            <span className='text-lg'>{statistic.name}</span>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}