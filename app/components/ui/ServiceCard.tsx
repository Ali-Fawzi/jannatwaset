import img from "../../asstes/images/img.jpg"
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import icon from '../../asstes/images/serviceIcon.png'
export default function ServiceCard() {
    return (
        <div className='w-[366px] h-[440px] rounded-2xl relative border border-green overflow-hidden'>
            <img src={img} alt='' className='object-cover rounded-2xl absolute w-full h-full'/>
            <motion.div
                initial={'visible'}
                whileHover={'hidden'}
                variants={animationVariants}
                className='absolute -bottom-1/2 triangle object-cover translate-x-1/2 right-1/2'
            >
                <img src={icon} alt='' className='w-24 h-24 object-center relative' />
            </motion.div>
        </div>
    )
}