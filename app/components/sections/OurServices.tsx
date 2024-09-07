import ServiceCard from "~/components/ui/ServiceCard";
import {Button} from "~/components/ui/Button";
import {Link} from "@remix-run/react";

export default function OurServices() {
    return (
        <div className='flex flex-col items-center justify-center px-4 gap-4 my-8'>
            <span className='text-2xl'>خدماتنا</span>
            <hr className='bg-green pb-[1px] w-8'/>
            <span>توفر شركة جنة واسط العديد من الخدمات الاستثمارية والزراعية وتربية الابقار وزيادة انتاجيتها .</span>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8  max-w-7xl mt-8 mx-auto'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
            <Link to={'#'} className='mt-8'>
                <Button variant='secondary'>
                    عرض كل الخدمات
                </Button>
            </Link>
        </div>
    )
}