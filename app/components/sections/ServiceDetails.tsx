import {duty} from "~/lib/type";


export default function ServiceDetails({duty, assetsUrl}: {duty: duty; assetsUrl: string}) {
    return (
        <div className='w-full flex flex-col items-start justify-center'>
            <img
                src={`${assetsUrl}/${duty.urls}`}
                alt={duty.title}
                className='rounded-xl object-cover w-full'
            />
            <div className='w-full mx-auto rounded-2xl max-w-2xl bg-white flex flex-col items-center p-4 justify-center gap-2 -mt-12'>
                <p className='text-2xl font-semibold animate-smooth text-green'>
                    {duty.title}
                </p>
                <span className='text-xl font-semibold animate-smooth'>{duty.subtitle}</span>
            </div>
            <div
                dangerouslySetInnerHTML={{__html: duty.description}}
                className="mt-8"
            />
        </div>
    )
}