import img from "../../asstes/images/img.jpg"
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import icon from '../../asstes/images/serviceIcon.png'
import {Link} from "@remix-run/react";
import {useState} from "react";
export default function ServiceCard() {
    const [isHovering, setHovering] = useState(false);
    return (
        <div className='w-[340px] h-[440px] rounded-2xl relative border border-green overflow-hidden'>
            <Link
                to={'/'}
                prefetch={'intent'}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <img src={img} alt='' className='object-cover rounded-2xl absolute w-full h-full'/>
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
                    src={icon}
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
                    <div className='flex-none h-20 bg-gray-200' />
                </motion.div>
                <div className='relative w-full h-full flex flex-col items-center justify-between px-4 py-8'>
                    <motion.span
                        initial={false}
                        animate={isHovering ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        custom={0.25}
                        className='text-xl text-white opacity-0'
                    >
                        خدمة تربية الابقار تشمل مجموعة من الخدمات و الانشطة المتعلقة برعاية و تنمية الابقار مثل الرعاية الصحية و التغذية و الفحص بانتظام و العلاجات الضرورية للوقاية من الامراض
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
                    <span className='text-lg font-semibold'>تربية الابقار</span>
                </div>
            </Link>
        </div>
    )
}