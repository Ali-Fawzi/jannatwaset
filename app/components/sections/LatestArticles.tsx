import ArticleCard from "~/components/ui/ArticleCard";
import {Link} from "@remix-run/react";
import {Button} from "~/components/ui/Button";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import {article, articleResponse} from "~/lib/type";

export default function LatestArticles(
    {articles, assetsUrl}:
    {articles: articleResponse; assetsUrl: string}
) {
    return (
        <div className='flex flex-col items-center justify-center px-4 py-8 gap-16'>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{once: true}}
                className='flex flex-col items-center justify-center gap-4 opacity-0'
            >
                <span className='text-2xl font-bold'>المقالات</span>
                <hr className='bg-green pb-[1px] w-8'/>
                <span className='text-3xl'>اخر المقالات والاخبار</span>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mt-8 mx-auto'>
                {articles.data.map((article: article, index) =>
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
                        <ArticleCard article={article} assetsUrl={assetsUrl} />
                    </motion.div>
                )}
            </div>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{once: true}}
                className='mt-8 opacity-0'
            >
                <Link to={'/articles'} prefetch={'intent'}>
                    <Button variant='secondary'>
                        عرض كل المقالات
                    </Button>
                </Link>
            </motion.div>
        </div>
    )
}