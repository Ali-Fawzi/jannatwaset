import {project} from "~/lib/type";

export default function ProjectDetails({project, assetsUrl}: {project: project; assetsUrl: string}) {
    const information = [
        {
            name: 'الخدمة:',
            value: project.services
        },

        {
            name: 'الخصائص:',
            value: project.propertieses
        },
        {
            name: 'العميل:',
            value: project.costumerName
        },
        {
            name: 'التاريخ:',
            value: project.createdAt
        }
    ]
    return (
        <div className='px-4'>
            <div className='max-w-6xl mx-auto flex flex-col items-center justify-center'>
                <img
                    src={`${assetsUrl}/${project.urlImage}`}
                    className='w-full rounded-2xl object-cover'
                    alt={project.propertieses}
                />
                <div className='-mt-16 w-full rounded-2xl grid grid-cols-2 xl:grid-cols-4 items-center justify-center bg-background gap-4 max-w-5xl mx-auto'>
                    {information.map((info) =>
                        <div
                            key={info.name}
                            className='flex flex-col items-start justify-center gap-2 overflow-hidden p-8'
                        >
                            <span className='text-lg font-semibold'>{info.name}</span>
                            <span>{info.value}</span>
                        </div>
                    )}
                </div>
                <div
                    dangerouslySetInnerHTML={{__html: project.description}}
                    className="mt-8"
                />
            </div>
        </div>
    );
}