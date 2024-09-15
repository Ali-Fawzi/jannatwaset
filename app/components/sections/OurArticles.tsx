import Pagination from "~/components/ui/Pagination";
import * as motion from "framer-motion/client";
import {animationVariants} from "~/lib/utils";
import ArticleCard from "~/components/ui/ArticleCard";

export default function OurArticles() {
    const articles = [1,2,3,4,5,6,7,8,9]
    return (
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
                    <ArticleCard variant={'page'} />
                </motion.div>
            )}
        </Pagination>
    )
}