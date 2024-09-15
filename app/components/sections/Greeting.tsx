import OurAgriculturalModel from "~/components/ui/OurAgriculturalModel ";
import {Link} from "@remix-run/react";
import {Button} from "~/components/ui/Button";

export default function Greeting() {
    return (
        <OurAgriculturalModel>
            <div
                className='flex flex-col xl:flex-row items-center justify-between gap-10 px-4 w-full max-w-6xl'>
                <div className='flex flex-col items-start justify-center gap-4 max-w-md'>
                    <p className='text-green text-lg'>
                        <span className='text-xl'>1. </span>الخدمات الزراعية
                    </p>
                    <span className='xl:bg-white/50 rounded-lg'>توفر شركة جنة واسط الزراعية افضل الاستثمارات و الخدمات الزراعية التي تشمل البذور و الاسمدة والحراثة ورعاية الاشجار وازالتها وقص العشب والصيانة المستمرة للمكائن</span>
                    <Link to='/services' prefetch={'intent'} className='mt-4'>
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
                    <Link to='/services' className='mt-4' prefetch={'intent'}>
                        <Button variant='primaryGreen'>
                            اقرا المزيد
                        </Button>
                    </Link>
                </div>
            </div>
        </OurAgriculturalModel>
    )
}