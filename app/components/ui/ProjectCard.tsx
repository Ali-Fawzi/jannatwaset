import img from "../../asstes/images/img.jpg"
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import LeftArrow from '../../asstes/icons/LeftArrow.svg'
import {Link} from "@remix-run/react";
import {useState} from "react";
export default function ProjectCard() {
    const [isHovering, setHovering] = useState(false);
    return (
        <div className='w-full h-full rounded-2xl relative overflow-hidden'>
            <Link
                to={'/'}
                prefetch={'intent'}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <img src={img} alt='' className='object-cover rounded-2xl absolute w-full h-full'/>
                <motion.div
                    initial={false}
                    animate={isHovering ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    custom={0}
                    className='absolute bg-gradient-to-br from-green2/70 to-orange-500/70 h-full w-full opacity-0'
                />
                <div className='relative w-full h-full flex flex-col items-center justify-evenly p-4'>
                    <motion.div
                        initial={false}
                        animate={isHovering ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        custom={0}
                        className='p-1 border-2 border-white rounded-full opacity-0'
                    >
                        <LeftArrow />
                    </motion.div>
                    <motion.span
                        initial={false}
                        animate={isHovering ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        custom={0}
                        className='text-lg text-white text-center opacity-0 flex flex-col items-center justify-center gap-1'
                    >
                        <span className='font-semibold'>انشاء مزرعة الفيحاء</span>
                        <span>                        قامت شركة واسط الزراعية بانشاء مزرعة الفيحاء النموذجية في واسط و تجهيزها باحدث الالات بوقت قياسي</span>
                    </motion.span>
                </div>
            </Link>
        </div>
    )
}