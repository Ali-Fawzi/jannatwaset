import img from "../../asstes/images/img.jpg"
import {Link} from "@remix-run/react";
import {Button} from "~/components/ui/Button";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import ProjectCard from "~/components/ui/ProjectCard";


export default function LatestProjects() {
    return (
        <div className="flex flex-col items-center justify-center px-4 gap-4 my-8">
            <motion.div
                initial={{
                    y:-72
                }}
                variants={animationVariants}
                whileInView={'correctY'}
                viewport={{ once: true }}
                className='flex flex-col xl:flex-row items-center justify-center gap-2 opacity-0'
            >
                <div className='flex flex-col items-start justify-center gap-2'>
                    <span className='text-2xl font-bold'>اخر المشاريع</span>
                    <hr className='bg-green pb-[1px] w-8'/>
                    <span className='mt-4 mb-10 max-w-lg'>اخر المشاريع المنجزة من قبل شركتنا التي تمتاز بدقتها والجودة العالية والضمان الحقيقي الذي تقدمة الشركة للزبائن</span>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-2 mx-auto'>
                        <div className='w-[283px] h-[248px]'>
                            <ProjectCard />
                        </div>
                        <div className='w-[283px] h-[248px]'>
                            <ProjectCard />
                        </div>
                    </div>
                    <div className='md:w-[575px] w-[283px] h-[269px] mx-auto'>
                        <ProjectCard />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                    <div className='flex flex-col items-center justify-center mx-auto gap-2'>
                        <div className='w-[283px] h-[248px]'>
                            <ProjectCard />
                        </div>
                        <div className='w-[283px] h-[437px]'>
                            <ProjectCard />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center mx-auto gap-2'>
                        <div className='w-[283px] h-[417px]'>
                            <ProjectCard />
                        </div>
                        <div className='w-[283px] h-[269px]'>
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={animationVariants}
                initial={false}
                whileInView={'visible'}
                viewport={{ once: true }}
                className='mt-8 opacity-0'
            >
                <Link to={'/projects'} prefetch={'intent'}>
                    <Button variant='secondary'>
                        عرض كل المشاريع
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}