import ArticleCard from "~/components/ui/ArticleCard";
import {Link} from "@remix-run/react";
import {Button} from "~/components/ui/Button";
import * as motion from "framer-motion/client"

export default function LatestArticles() {
    return (
        <div className='flex flex-col items-center justify-center px-4 py-8 gap-16'>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{ease: "easeOut", duration: 1}}
                className='flex flex-col items-center justify-center gap-4'
            >
                <span className='text-2xl'>المقالات</span>
                <hr className='bg-green pb-[1px] w-8'/>
                <span className='text-3xl'>اخر المقالات والاخبار</span>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mt-8 mx-auto'>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 120
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{once: true}}
                    transition={{ease: "easeOut", duration: 1}}
                >
                    <ArticleCard/>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 140
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{once: true}}
                    transition={{ease: "easeOut", duration: 1}}
                >
                    <ArticleCard/>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 160
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{once: true}}
                    transition={{ease: "easeOut", duration: 1}}
                >
                    <ArticleCard/>
                </motion.div>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{ease: "easeOut", duration: 1}}
                className='mt-8'
            >
                <Link to={'#'}>
                    <Button variant='secondary'>
                        عرض كل المقالات
                    </Button>
                </Link>
            </motion.div>
        </div>
    )
}