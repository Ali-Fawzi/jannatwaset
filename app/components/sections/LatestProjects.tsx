import img from "../../asstes/images/img.jpg"
import {Link} from "@remix-run/react";
import {Button} from "~/components/ui/Button";


export default function LatestProjects() {
    return (
        <div className="flex flex-col items-center justify-center px-4 gap-4 my-8">
            <div className='flex flex-col xl:flex-row items-center justify-center gap-2'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <span className='text-2xl'>اخر المشاريع</span>
                    <hr className='bg-green pb-[1px] w-8'/>
                    <span className='mt-4 mb-10 max-w-lg'>اخر المشاريع المنجزة من قبل شركتنا التي تمتاز بدقتها والجودة العالية والضمان الحقيقي الذي تقدمة الشركة للزبائن</span>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-2 mx-auto'>
                        <img src={img} alt='' className='rounded-2xl w-[283px] h-[248px] object-cover'/>
                        <img src={img} alt='' className='rounded-2xl w-[283px] h-[248px] object-cover'/>
                    </div>
                    <img src={img} alt=''
                         className='rounded-2xl md:w-[575px] w-[283px] h-[269px] object-cover mx-auto'/>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                    <div className='flex flex-col items-center justify-center mx-auto gap-2'>
                        <img src={img} alt='' className='rounded-2xl w-[283px] h-[248px] object-cover'/>
                        <img src={img} alt='' className='rounded-2xl w-[283px] h-[437px] object-cover'/>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-auto gap-2'>
                        <img src={img} alt='' className='rounded-2xl w-[283px] h-[417px] object-cover'/>
                        <img src={img} alt='' className='rounded-2xl w-[283px] h-[269px] object-cover'/>
                    </div>
                </div>
            </div>
            <Link to={'#'} className='mt-8'>
                <Button variant='secondary'>
                    عرض كل المشاريع
                </Button>
            </Link>
        </div>
    );
}