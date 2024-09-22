import {animationVariants} from "~/lib/utils";
import ProjectCard from "~/components/ui/ProjectCard";
import * as motion from "framer-motion/client"
import Pagination from "~/components/ui/Pagination";
import {project, projectResponse} from "~/lib/type";

export default function OurProjects(
    {projects, assetsUrl}:
    {projects: projectResponse; assetsUrl: string}
) {
    return (
        <div className='flex flex-col items-center justify-center px-4 overflow-hidden gap-16 my-8'>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{ once: true }}
                className='flex flex-col items-center justify-center gap-4 opacity-0 text-lg'
            >
                <span className='text-2xl font-bold'>مشارعينا</span>
                <hr className='bg-green pb-[1px] w-8'/>
                <span>ابرز المشاريع المنفذة في العديد من الخدمات الاستثمارية والزراعية وتربية الابقار وزيادة انتاجيتها .</span>
            </motion.div>
            <Pagination
                itemsPerPage={projects.pageSize}
                currentPage={projects.currentPage}
                totalPages={projects.totalPages}
                itemsStyle='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'
            >
                {projects.data.map((project: project, index) =>
                    <motion.div
                        key={index}
                        variants={animationVariants}
                        custom={index}
                        initial={{
                            x: 72
                        }}
                        whileInView={'correctX'}
                        viewport={{once: true}}
                        className='opacity-0'
                    >
                        <div className='w-[340px] h-[440px]'>
                            <ProjectCard project={project} assetsUrl={assetsUrl} />
                        </div>
                    </motion.div>
                )}
            </Pagination>
        </div>
    )
}