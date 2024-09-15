import Pagination from "~/components/ui/Pagination";
import * as motion from "framer-motion/client";
import {animationVariants} from "~/lib/utils";
import ArticleCard from "~/components/ui/ArticleCard";
import img from "~/asstes/images/img.jpg";
import {Link} from "@remix-run/react";

export default function OurArticles() {
    const articles = [1,2,3,4,5,6,7,8,9]
    return (
        <div className='flex flex-col xl:flex-row items-center xl:items-start justify-center px-4 py-8 gap-16'>
            <div className='flex flex-col items-start justify-center gap-8'>
                <motion.span
                    initial={false}
                    variants={animationVariants}
                    whileInView={'visible'}
                    custom={0}
                    viewport={{once:true}}
                    className='text-2xl font-semibold opacity-0'
                >
                    اخر المقالات
                </motion.span>
                <Pagination
                    itemsPerPage={9}
                    currentPage={1}
                    totalItems={9}
                    itemsStyle='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto'
                >
                    {articles.map((article, index) =>
                        <motion.div
                            key={index}
                            variants={animationVariants}
                            custom={index}
                            initial={{
                                y: 72
                            }}
                            whileInView={'correctY'}
                            viewport={{once: true}}
                            className='opacity-0'
                        >
                            <ArticleCard variant={'page'}/>
                        </motion.div>
                    )}
                </Pagination>
            </div>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{once: true}}
                className='flex flex-col items-start justify-center gap-4 opacity-0'>
                <span className='text-2xl font-semibold mb-4'>احدث المشاريع</span>
                <Link to={'#'}
                      className='flex flex-row items-center justify-center gap-3 group'
                >
                    <img src={img} alt='' className='w-24 h-24 flex-none'/>
                    <div className='flex flex-col items-start justify-evenly h-24 gap-1'>
                        <span
                            className='group-hover:text-yellow animate-smooth'>كيفية الحصول على تربة صالحة للزراعة</span>
                        <span>12 Feb, 2021</span>
                    </div>
                </Link>
                <Link to={'#'}
                      className='flex flex-row items-center justify-center gap-3 group border-t border-b border-gray-200 py-4'
                >
                    <img src={img} alt='' className='w-24 h-24 flex-none'/>
                    <div className='flex flex-col items-start justify-evenly h-24 gap-1'>
                        <span
                            className='group-hover:text-yellow animate-smooth'>كيفية الحصول على تربة صالحة للزراعة</span>
                        <span>12 Feb, 2021</span>
                    </div>
                </Link>
                <Link to={'#'}
                      className='flex flex-row items-center justify-center gap-3 group'
                >
                    <img src={img} alt='' className='w-24 h-24 flex-none'/>
                    <div className='flex flex-col items-start justify-evenly h-24 gap-1'>
                        <span
                            className='group-hover:text-yellow animate-smooth'>كيفية الحصول على تربة صالحة للزراعة</span>
                        <span>12 Feb, 2021</span>
                    </div>
                </Link>
            </motion.div>
        </div>
    )
}