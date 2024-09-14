import img from "../../asstes/images/img.jpg"
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import icon from '../../asstes/images/serviceIcon.png'
import {Link} from "@remix-run/react";
export default function ServiceCard() {
    return (
        <div className='w-[340px] h-[440px] rounded-2xl relative border border-green overflow-hidden'>
            <Link to={'/'}>
                <img src={img} alt='' className='object-cover rounded-2xl absolute w-full h-full'/>
                <motion.div
                    initial={'visible'}
                    whileHover={'hidden'}
                    variants={animationVariants}
                    className='absolute -bottom-1 triangle translate-x-1/2 right-1/2'
                />
                <img src={icon} alt='' className='w-24 h-24 object-contain absolute translate-x-1/2 right-1/2 bottom-16'/>

                <div className='relative w-full h-full flex flex-col items-center justify-between px-4 py-8'>
                    <span className='text-xl text-white opacity-0'>خدمة تربية الاقار تشمل مجموعة من الخدمات و الانشطة المتعلقة برعاية و تنمية الابقار مثل الرعاية الصحية و التغذية و الفحص بانتظام و العلاجات الضرورية للوقاية من الامراض</span>
                    <span className='text-xl font-bold underline text-white opacity-0'>اقراء المزيد</span>
                    <span className='text-lg font-semibold'>تربية الابقار</span>
                </div>
            </Link>
        </div>
    )
}