import {Button} from "~/components/ui/Button";
import {Link} from "@remix-run/react";
import heroImg from '../../asstes/images/hero.jpg'
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";

export default function Hero()
{
    return (
        <div className='relative isolate overflow-hidden px-4'>
            <motion.img
                initial={{
                    scale: 1.25,
                }}
                variants={animationVariants}
                animate={['correctScale']}
                src={heroImg}
                alt='hero'
                className='absolute w-full inset-0 -z-10 h-full object-cover'
                loading='eager'
            />
            <div className="mx-auto max-w-5xl py-36 text-white h-screen -mb-20 relative">
                <motion.div
                    initial={{
                        x: 540,
                        y: -540,
                    }}
                    animate={['correctX', 'correctY']}
                    variants={animationVariants}
                    className='flex flex-row items-start justify-start gap-3 mr-7 opacity-0'
                >
                    <hr className='bg-white w-10 mt-4 py-[1px]'/>
                    <span className='text-lg sm:text-xl xl:text-2xl drop-shadow-lg'>جودة زراعتنا , ابقارنا الصحية.</span>
                </motion.div>
                <motion.h1
                    initial={{
                        x: -1080,
                        opacity: 0
                    }}
                    animate={'correctX'}
                    variants={animationVariants}
                    className='text-7xl sm:text-8xl xl:text-9xl font-bold mr-7 drop-shadow-lg opacity-0'
                >
                    جنة واسط الزراعية
                </motion.h1>
                <div className='absolute h-96 w-80 top-20'>
                    <motion.div
                        initial={{
                            scale: 0.25,
                         }}
                        variants={animationVariants}
                        animate={'correctScale'}
                        className='absolute border-[28px] border-white/30 w-full h-full flex flex-col items-center justify-end opacity-0'
                    />
                    <motion.div
                        initial={{
                            y: 1080,
                            opacity: 0
                        }}
                        animate={'correctY'}
                        variants={animationVariants}
                        className='absolute flex flex-row bottom-8 left-20 items-start justify-center mb-4 opacity-0'
                    >
                        <Link to='#'>
                            <Button>
                                تصفح المزيد
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}