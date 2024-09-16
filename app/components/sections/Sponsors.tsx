import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import {useState} from "react";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import SponsorsSkeleton from "~/components/ui/skeletons/SponsorsSkeleton";
import {sponsor} from "~/lib/type";

export default function Sponsors({sponsors, assetsUrl}: {sponsors: sponsor[]; assetsUrl: string}) {
    const [loading, setLoading] = useState(true);
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
                        <SponsorsSkeleton /> :
                        <>
                            {sponsors.map((sponsor, index) =>
                                <SwiperSlide key={sponsor.id}>
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
                                        <img
                                            className="object-cover h-36 w-36 mx-auto"
                                            src={`${assetsUrl}/${sponsor.url}`}
                                            alt='sponsor'
                                        />
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
