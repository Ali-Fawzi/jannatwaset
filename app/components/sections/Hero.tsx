import {Button} from "~/components/ui/Button";
import {Link} from "@remix-run/react";
import heroImg from '../../asstes/images/hero.jpg'

export default function Hero()
{
    return (
        <div className='relative isolate overflow-hidden px-4'>
            <img
                src={heroImg}
                alt='hero'
                className='absolute w-full inset-0 -z-10 h-full object-cover'
                loading='eager'
            />
            <div className="mx-auto max-w-5xl py-36 text-white h-screen -mb-20 relative">
                <div className='flex flex-row items-start justify-start gap-3 mr-7'>
                    <hr className='bg-white w-10 mt-4 py-[1px]'/>
                    <span className='text-lg sm:text-xl xl:text-2xl drop-shadow-lg'>جودة زراعتنا , ابقارنا الصحية.</span>
                </div>
                <h1 className='text-7xl sm:text-8xl xl:text-9xl font-bold mr-7 drop-shadow-lg'>جنة واسط الزراعية</h1>
                <div className='absolute border-[28px] border-white/30 h-96 w-80 top-20 flex flex-col items-center justify-end'>
                    <Link to='#' className='flex flex-row items-start justify-center mb-4'>
                        <Button>
                            تصفح المزيد
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}