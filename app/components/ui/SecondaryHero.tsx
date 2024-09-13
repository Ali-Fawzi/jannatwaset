import secondaryHeroImg from '../../asstes/images/secondaryHero.png'
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";

export default function SecondaryHero({title} : {title: string}) {
    return (
        <div className='relative isolate overflow-hidden px-4 mb-24'>
            <img
                src={secondaryHeroImg}
                alt='Secondary Hero'
                className='absolute w-full inset-0 -z-10 h-96 object-cover'
                loading='eager'
            />
            <div className="mx-auto max-w-5xl py-36 text-white relative">
                <div className='w-full text-center'>
                    <motion.span
                        initial={false}
                        variants={animationVariants}
                        whileInView={'visible'}
                        viewport={{once: true}}
                        className='text-5xl sm:text-6xl xl:text-7xl drop-shadow-lg opacity-0'
                    >
                        {title}
                    </motion.span>
                </div>
            </div>
        </div>
    )
}