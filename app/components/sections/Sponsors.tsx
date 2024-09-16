import {Link} from "@remix-run/react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation} from "swiper/modules";
import img from "../../asstes/images/sponser.png"
import 'swiper/css';
import 'swiper/css/navigation';
import {useState} from "react";
import {Skeleton} from "~/components/Skeleton";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
type sponsor = {
    id: string,
    url: string,
}
export default function Sponsors({sponsors}: {sponsors: sponsor[]}) {
    console.log(sponsors)
    const [loading, setLoading] = useState(true);
    const slides = [1,2,3,4,5,6,7,8,9];
    return (
        <div className='flex flex-col items-center justify-center px-4 gap-16 my-8'>
            <motion.div
                initial={false}
                whileInView={'visible'}
                viewport={{once: true}}
                variants={animationVariants}
                className='flex flex-col items-center justify-center gap-4 opacity-0'
            >
                <span className='text-2xl font-bold'>الشركاء</span>
                <hr className='bg-green pb-[1px] w-8'/>
                <span className='text-3xl'>نحن نفتخر بشركائنا المميزين</span>
            </motion.div>
            <div
                className='max-w-6xl w-full mx-auto'
            >
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                        stopOnLastSlide: false,
                    }}
                    dir={'rtl'}
                    modules={[Navigation, A11y, Autoplay]}
                    breakpoints={{
                        320: {slidesPerView: 1},
                        480: {slidesPerView: 2.4},
                        600: {slidesPerView: 3.1},
                        1024: {slidesPerView: 4.1},
                        1280: {slidesPerView: 5.2},
                        1536: {slidesPerView: 6},
                    }}
                    navigation
                    className='w-full'
                    onInit={() => setLoading(false)}
                >
                    {loading ?
                        <Skeleton className='flex flex-row items-start justify-start'>
                            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2" />
                            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden sm:block" />
                            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden md:block" />
                            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden lg:block" />
                            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden xl:block" />
                            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden 2xl:block" />
                        </Skeleton> :
                        <>
                            {slides.map((slide, index) =>
                                <SwiperSlide key={index}>
                                    <motion.div
                                        variants={animationVariants}
                                        custom={index}
                                        initial={{
                                            y: -48
                                        }}
                                        whileInView={'correctY'}
                                        viewport={{once: true}}
                                        className='opacity-0'

                                    >
                                        <Link to={'#'}>
                                            <img
                                                className="object-cover h-36 w-36 mx-auto"
                                                src={img}
                                                alt=''
                                            />
                                        </Link>
                                    </motion.div>
                                </SwiperSlide>
                            )}
                        </>
                    }
                </Swiper>
            </div>
        </div>
    );
}
