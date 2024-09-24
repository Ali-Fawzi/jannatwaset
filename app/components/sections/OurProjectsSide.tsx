import {Suspense} from "react";
import {Await, Link} from "@remix-run/react";
import {project, projectResponse} from "~/lib/type";

export default function OurProjectsSide({projects, assetsUrl}: {projects: projectResponse, assetsUrl: string}) {
    return (
        <div className='flex flex-col items-start justify-center gap-4'>
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
                                <img src={`${assetsUrl}/${project.urlImage}`} alt='' className='w-24 h-24 flex-none rounded-2xl'/>
                                <div className='flex flex-col items-start justify-evenly h-24 gap-1 text-lg'>
                                    <span
                                        className='group-hover:text-yellow animate-smooth max-w-48'>
                                        {project.services}
                                    </span>
                                    <span>
                                        {project.createdAt}
                                    </span>
                                </div>
                            </Link>
                        )}
                    </Await>
                </Suspense>
            )}
        </div>
    );
}