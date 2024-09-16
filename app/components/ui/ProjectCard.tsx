import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import LeftArrow from '../../asstes/icons/LeftArrow.svg'
import {Link} from "@remix-run/react";
import {useState} from "react";
import {project} from "~/components/sections/LatestProjects";
export default function ProjectCard({project, assetsUrl}: {project: project; assetsUrl: string}) {
    const [isHovering, setHovering] = useState(false);
    return (
        <div className='w-full h-full rounded-2xl relative overflow-hidden'>
            <Link
                to={`/projects/${project.id}`}
                prefetch={'intent'}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <img src={`${assetsUrl}/${project.urlImage}`} alt={project.services} className='object-cover rounded-2xl absolute w-full h-full'/>
                <motion.div
                    initial={false}
                    animate={isHovering ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    className='absolute bg-gradient-to-br from-green2/70 to-orange-500/70 h-full w-full opacity-0'
                />
                <div className='relative w-full h-full flex flex-col items-center justify-evenly p-4'>
                    <motion.div
                        initial={false}
                        animate={isHovering ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        className='p-1 border-2 border-white rounded-full opacity-0'
                    >
                        <LeftArrow />
                    </motion.div>
                    <motion.span
                        initial={false}
                        animate={isHovering ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        className='text-lg text-white text-center opacity-0 font-semibold'
                    >
                        {project.services}
                    </motion.span>
                </div>
            </Link>
        </div>
    )
}