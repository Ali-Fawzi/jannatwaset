import {Skeleton} from "~/components/Skeleton";

export default function SponsorsSkeleton() {
    return (
        <Skeleton className='flex flex-row items-start justify-start'>
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2" />
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden sm:block" />
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden md:block" />
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden lg:block" />
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden xl:block" />
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto m-2 hidden 2xl:block" />
        </Skeleton>
    );
}