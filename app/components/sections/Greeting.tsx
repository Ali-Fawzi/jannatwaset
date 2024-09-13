import Wheat from '../../asstes/icons/wheat.svg'
import WheatImg from '../../asstes/images/wheat.png'
import {Button} from "~/components/ui/Button";
import {Link} from "@remix-run/react";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";

export default function Greeting() {
    return (
        <div className='relative pb-32 max-w-screen-2xl mx-auto'>
            <motion.div
                initial={{
                    x: -72
                }}
                variants={animationVariants}
                whileInView={'correctX'}
                viewport={{once: true}}
                className='absolute bottom-0 z-10 opacity-0'
            >
                <img src={WheatImg} alt='Wheat'/>
            </motion.div>
            <motion.div
                initial={{
                    scaleX: -1,
                    x: 72
                }}
                variants={animationVariants}
                whileInView={'correctX'}
                viewport={{once: true}}
                className='absolute top-0 left-0 xl:hidden z-10 opacity-0'
            >
                <img src={WheatImg} alt='Wheat'/>
            </motion.div>
            <motion.div
                initial={{
                    scaleX: -1,
                    x: 72
                }}
                variants={animationVariants}
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
                    <div
                        className='flex flex-col xl:flex-row items-center justify-between gap-10 px-4 w-full max-w-6xl'>
                        <div className='flex flex-col items-start justify-center gap-4 max-w-md'>
                            <p className='text-green text-lg'>
                                <span className='text-xl'>1. </span>الخدمات الزراعية
                            </p>
                            <span className='xl:bg-white/50 rounded-lg'>توفر شركة جنة واسط الزراعية افضل الاستثمارات و الخدمات الزراعية التي تشمل البذور و الاسمدة والحراثة ورعاية الاشجار وازالتها وقص العشب والصيانة المستمرة للمكائن</span>
                            <Link to='#' className='mt-4'>
                                <Button variant='primaryGreen'>
                                    اقرا المزيد
                                </Button>
                            </Link>
                        </div>
                        <div
                            className='flex flex-col items-start xl:items-end justify-center gap-4 xl:text-left max-w-md'>
                            <p className='text-green text-lg'>
                                <span className='text-xl'>2. </span>خدمات الرعاية الحيوانية
                            </p>
                            <span className='xl:bg-white/50 rounded-lg'>توفر شركة جنة واسط مجموعة من الخدمات المخصصة لرعاية الابقار بطريقة تهدف الى تحسين صحتها وزيادة انتاجيتها مثل التغذية الصحية وادترة الانتاج والصحة البيئية والتربية والتدريب</span>
                            <Link to='#' className='mt-4'>
                                <Button variant='primaryGreen'>
                                    اقرا المزيد
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}