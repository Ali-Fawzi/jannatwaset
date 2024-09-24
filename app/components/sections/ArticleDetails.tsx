import {article} from "~/lib/type";
import {formatDate} from "~/lib/utils";


export default function ArticleDetails({article, assetsUrl}: {article: article; assetsUrl: string}) {
    return (
        <div className='w-full max-w-3xl flex flex-col items-start justify-center'>
            <img
                src={`${assetsUrl}/${article.image}`}
                alt={article.title}
                className='rounded-t-lg object-cover h-[338px] w-full'
            />
            <div className='mr-auto -mt-8 ml-8 max-w-72 bg-yellow border border-white p-4 rounded-lg'>
                <p className='text-center'>
                    {formatDate(article.createdAt)}
                </p>
            </div>
            <p className='text-2xl font-semibold animate-smooth'>
                {article.title}
            </p>
            <div
                dangerouslySetInnerHTML={{__html: article.description}}
                className="mt-8 prose"
            />
        </div>
    )
}