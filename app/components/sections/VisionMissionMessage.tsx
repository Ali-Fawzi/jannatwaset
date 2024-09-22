import * as motion from "framer-motion/client"
import v1 from '../../asstes/images/img.jpg'
import {animationVariants} from "~/lib/utils";

export default function VisionMissionMessage() {
    return (
        <motion.div
            initial={false}
            variants={animationVariants}
            whileInView={'visible'}
            className='px-4 w-full max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-center gap-8 opacity-0'
        >
            <div className='flex flex-col items-center justify-center gap-4 text-center text-lg w-full max-w-xl'>
                <span className='text-green text-2xl'>رؤيتنا</span>
                <span>لقد بدأنا بتاسيس شركة جنة واسط الزراعية للحصول على للنهوض بالواقع الزراعي ومواكبة التطور والحداثة داخل المحافظات العراقية من خلال المزارع المحلية والاستثمارات الزراعية</span>
                <span>رؤية شركتنا هو تقديم خدمة تُعطى فيها الأولوية للمزارع المحلية ويتمكن الأعضاء من الوصول إلى الانتاجية ذات الجودة العالية و الطازجة المتوفرة وباسعار مناسبة.</span>
                <span>لقد أمضينا السنوات القليلة الماضية في بناء الأعمال والخدمات التي نحبها. الخدمة التي تجعل الأكثر أمانا</span>
            </div>
            <div className='relative w-full h-full max-w-[431px] max-h-[431px]'>
                <img src={v1} alt='' className='rounded-full w-full h-full object-cover max-w-[431px] max-h-[431px]' />
            </div>
        </motion.div>
    );
}