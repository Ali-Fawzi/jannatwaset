import Pagination from "~/components/ui/Pagination";
import * as motion from "framer-motion/client";
import {animationVariants, formatDate} from "~/lib/utils";
import ArticleCard from "~/components/ui/ArticleCard";
import img from "~/asstes/images/img.jpg";
import {Await, Link} from "@remix-run/react";
import {article, articleResponse, project, projectResponse} from "~/lib/type";
import {Suspense} from "react";

export default function OurArticles(
    {projects, articles, assetsUrl}:
    {
        projects: projectResponse;
        articles: articleResponse;
        assetsUrl: string
    }
) {
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
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{once: true}}
                className='flex flex-col items-start justify-center gap-4 opacity-0'>
                <span className='text-2xl font-semibold mb-4'>اخر المشاريع</span>
                {projects && (
                    <Suspense fallback={
                        <span className='text-lg font-semibold text-center'>تحميل...</span>
                    }>
                        <Await resolve={projects}>
                            {(resolvedData) => resolvedData.data.map((project: project) =>
                                <Link key={project.id} to={`/projects/${project.id}`}
                                      className='flex flex-row items-center justify-center gap-3 group overflow-hidden'
                                >
                                    <img src={`${assetsUrl}/${project.urlImage}`} alt='' className='w-24 h-24 flex-none'/>
                                    <div className='flex flex-col items-start justify-evenly h-24 gap-1'>
                                        <span className='group-hover:text-yellow animate-smooth max-w-48'>{project.services}</span>
                                        <span>{project.createdAt}</span>
                                    </div>
                                </Link>
                            )}
                        </Await>
                    </Suspense>
                )}
            </motion.div>
        </div>
    )
}