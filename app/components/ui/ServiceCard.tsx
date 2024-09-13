import img from "../../asstes/images/img.jpg"
import * as motion from "framer-motion/client"

export default function ServiceCard() {
    return (
        <div className='w-[366px] h-[440px] rounded-2xl relative border border-green overflow-hidden'>
            <img src={img} alt='' className='object-cover rounded-2xl absolute w-full h-full'/>
            <motion.div
                whileHover={{
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 1 },
                }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className='absolute -bottom-1/2 triangle object-cover translate-x-1/2 right-1/2'
            />
        </div>
    )
}