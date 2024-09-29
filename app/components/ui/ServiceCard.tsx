import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import {Link} from "@remix-run/react";
import {useState} from "react";
import {duty} from "~/lib/type";
export default function ServiceCard({duty, assetsUrl}: {duty: duty; assetsUrl: string}) {
    const [isHovering, setHovering] = useState(false);
    return (
        <div className='w-[340px] h-[440px] rounded-2xl relative border border-green overflow-hidden'>
            <Link
                to={`/services/${duty.id}`}
                prefetch={'intent'}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <img src={`${assetsUrl}/${duty.urls}`} alt={duty.title} className='object-cover rounded-2xl absolute w-full h-full'/>
                <motion.div
                    initial={false}
                    animate={isHovering ? 'dive' : 'correctY'}
                    variants={animationVariants}
                    custom={0.25}
                    className='absolute -bottom-1 triangle -right-12'
                />
                <motion.img
                    initial={false}
                    animate={isHovering ? 'shrink' : 'correctScale'}
                    variants={animationVariants}
                    custom={0.25}
                    className='w-24 h-24 object-contain absolute left-28 bottom-16'
                    src={`${assetsUrl}/${duty.iconId}`}
                    alt=''
                />
                <motion.div
                    initial={false}
                    animate={isHovering ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    custom={0.25}
                    className='absolute flex flex-col h-full w-full opacity-0'
                >
                    <div className='grow bg-gradient-to-br from-green2/70 to-orange-500/70' />
                    <div className='flex-none h-20 bg-background' />
                </motion.div>
                <div className='relative w-full h-full flex flex-col items-center justify-between px-4 py-8'>
                    <motion.span
                        initial={false}
                        animate={isHovering ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        custom={0.25}
                        className='text-xl text-white opacity-0'
                    >
                        {duty.subtitle}
                    </motion.span>
                    <motion.span
                        initial={false}
                        animate={isHovering ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        custom={0.25}
                        className='text-xl font-bold underline text-white opacity-0'
                    >
                        اقراء المزيد
                    </motion.span>
                    <span className='text-lg font-semibold'>{duty.title}</span>
                </div>
            </Link>
        </div>
    )
}