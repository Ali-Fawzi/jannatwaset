import Pagination from "~/components/ui/Pagination";
import * as motion from "framer-motion/client";
import {animationVariants} from "~/lib/utils";
import ArticleCard from "~/components/ui/ArticleCard";
import {article, articleResponse} from "~/lib/type";

export default function OurArticles(
    {articles, assetsUrl}:
    {
        articles: articleResponse;
        assetsUrl: string
    }
) {
    return (
        <div className='flex flex-col items-start justify-center gap-8'>
            <span className='text-2xl font-semibold'>
                اخر المقالات
            </span>
            <Pagination
                itemsPerPage={articles.pageSize}
                currentPage={articles.currentPage}
                totalPages={articles.totalPages}
                itemsStyle='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto'
            >
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
                        <ArticleCard variant={'page'} article={article} assetsUrl={assetsUrl}/>
                    </motion.div>
                )}
            </Pagination>
        </div>
    )
}