import ArticleCard from "~/components/ui/ArticleCard";
import {Link} from "@remix-run/react";
import {Button} from "~/components/ui/Button";

export default function Articles() {
    return (
        <div className='flex flex-col items-center justify-center px-4 py-8 gap-4'>
            <span className='text-2xl'>المقالات</span>
            <hr className='bg-green pb-[1px] w-8'/>
            <span className='text-3xl'>اخر المقالات والاخبار</span>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mt-8 mx-auto'>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </div>
            <Link to={'#'} className='mt-8'>
                <Button variant='secondary'>
                    عرض كل المقالات
                </Button>
            </Link>
        </div>
    )
}