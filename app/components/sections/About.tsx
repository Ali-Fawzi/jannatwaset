import OurAgriculturalModel from "~/components/ui/OurAgriculturalModel ";

export default function About() {
    return (
        <OurAgriculturalModel>
            <div className='flex flex-col items-start justify-center gap-2 px-4 w-full max-w-3xl'>
                <p className='text-green text-xl'>
                    حول الشركة
                </p>
                <span className='xl:bg-white/50 rounded-lg'>توفر شركة جنة واسط الزراعية افضل الاستثمارات و الخدمات الزراعية التي تشمل البذور و الاسمدة والحراثة ورعاية الاشجار وازالتها وقص العشب والصيانة المستمرة للمكائن بالاضافة الى خدمة تربية الابقار و العديد من الهدمات الوراعية الاخرى المقدمة للقطاع الزراعي والمهتمين بالجانب الزراعي في عموم العراق .</span>
            </div>
        </OurAgriculturalModel>
    )
}