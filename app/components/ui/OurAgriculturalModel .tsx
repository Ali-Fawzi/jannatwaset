import Wheat from '../../asstes/icons/wheat.svg'
import WheatImg from '../../asstes/images/wheat.png'
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import {ReactElement} from "react";

export default function OurAgriculturalModel({children}: {children: ReactElement}) {
    return (
        <div className='relative pb-32 max-w-screen-2xl mx-auto'>
            <motion.div
                initial={{
                    x: -48
                }}
                variants={animationVariants}
                custom={1}
                whileInView={'correctX'}
                viewport={{once: true}}
                className='absolute bottom-0 z-10 opacity-0'
            >
                <img src={WheatImg} alt='Wheat'/>
            </motion.div>
            <motion.div
                initial={{
                    scaleX: -1,
                    x: 48
                }}
                variants={animationVariants}
                custom={1}
                whileInView={'correctX'}
                viewport={{once: true}}
                className='absolute top-0 left-0 xl:hidden z-10 opacity-0'
            >
                <img src={WheatImg} alt='Wheat'/>
            </motion.div>
            <motion.div
                initial={{
                    scaleX: -1,
                    x: 48
                }}
                variants={animationVariants}
                custom={1}
                whileInView={'correctX'}
                viewport={{once: true}}
                className='absolute bottom-0 left-0 hidden xl:block z-10 opacity-0'
            >
                <img src={WheatImg} alt='Wheat'/>
            </motion.div>
            <motion.div
                variants={animationVariants}
                initial={{
                    scale: 0.5,
                }}
                custom={0.5}
                whileInView={'correctScale'}
                viewport={{once: true}}
                className='flex flex-col items-center justify-center max-w-7xl mx-auto bg-white -my-10 inner-curve rounded-lg opacity-0'
            >
                <motion.div
                    variants={animationVariants}
                    initial={false}
                    whileInView={'visible'}
                    viewport={{once: true}}
                    className='flex flex-col items-center justify-center my-20 gap-4 w-full relative bg-white/50 xl:bg-background/0 opacity-0'
                >
                    <Wheat/>
                    <span>مرحبا بكم في نموذجنا الزراعي</span>
                    <hr className='bg-green pb-[1px] w-8'/>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}