import Wheat from '../../asstes/icons/wheat.svg'
import WheatImg from '../../asstes/images/wheat.png'
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import {ReactElement} from "react";

export default function OurAgriculturalModel({children}: {children: ReactElement}) {
    return (
        <div className='relative pb-32 max-w-screen-2xl mx-auto'>
            <div className='absolute w-full h-full'>
                <motion.div
                    variants={animationVariants}
                    initial={{
                        scale: 0.5,
                    }}
                    custom={0.5}
                    whileInView={'correctScale'}
                    viewport={{once: true}}
                    className='max-w-7xl mx-auto relative w-full h-[733px] xl:h-[495px] rounded-lg bg-gray-200 inner-curve p-[1px] opacity-0 -my-10'>
                    <div
                        className='flex flex-col items-center h-full justify-center w-full bg-white inner-curve rounded-lg'
                    />
                </motion.div>
            </div>
            <div className='absolute w-full h-full overflow-hidden'>
                <motion.img
                    initial={{
                        x: -72
                    }}
                    variants={animationVariants}
                    custom={1}
                    whileInView={'correctX'}
                    viewport={{once: true}}
                    className='absolute bottom-0 opacity-0'
                    src={WheatImg}
                    alt='Wheat'
                />
                <motion.img
                    initial={{
                        scaleX: -1,
                        x: 72
                    }}
                    variants={animationVariants}
                    custom={1}
                    whileInView={'correctX'}
                    viewport={{once: true}}
                    className='absolute top-0 left-0 xl:hidden opacity-0'
                    src={WheatImg}
                    alt='Wheat'
                />
                <motion.img
                    initial={{
                        scaleX: -1,
                        x: 72
                    }}
                    variants={animationVariants}
                    custom={1}
                    whileInView={'correctX'}
                    viewport={{once: true}}
                    className='absolute bottom-0 left-0 hidden xl:block opacity-0'
                    src={WheatImg} alt='Wheat'
                />
            </div>
            <div className='relative w-full max-w-7xl mx-auto'>
                <motion.div
                    variants={animationVariants}
                    custom={1}
                    initial={false}
                    whileInView={'visible'}
                    viewport={{once: true}}
                    className='flex flex-col items-center justify-center gap-4 w-full bg-white/50 xl:bg-background/0 opacity-0'
                >
                    <Wheat/>
                    <span>مرحبا بكم في نموذجنا الزراعي</span>
                    <hr className='bg-green pb-[1px] w-8'/>
                    {children}
                </motion.div>
            </div>
        </div>
    );
}