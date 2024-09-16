import {Link} from "@remix-run/react";
import {article} from "~/lib/type";
import {formatDate} from "~/lib/utils";


export default function ArticleCard(
    {variant = 'section', article, assetsUrl}:
    {
        variant?: 'section' | 'page';
        article: article;
        assetsUrl: string;
    }
) {
    return (
        <Link to={`/articles/${article.id}`} prefetch={'intent'} className='w-[350px] h-[520px] bg-white flex flex-col items-end justify-start rounded-lg drop-shadow-lg group'>
            <img src={`${assetsUrl}/${article.image}`} alt={article.title} className='rounded-t-lg object-cover w-[350px] h-[262px]' />
            <p className='bg-yellow border border-white px-6 py-3 rounded-lg -mt-6 ml-6'>
                {formatDate(article.createdAt)}
            </p>
            <div className='flex flex-col items-center justify-center mx-auto gap-6 max-w-xs mt-4 px-4 overflow-hidden'>
                <p className='text-2xl font-semibold group-hover:text-yellow animate-smooth'>{article.title}</p>
            </div>
            {variant === 'page' && (
                <button
                    className='px-8 py-2 m-2 border border-gray-200 rounded-full font-semibold mt-auto mr-auto animate-smooth group-hover:bg-black group-hover:text-white'
                >
                    اقراء المزيد
                </button>
            )}
        </Link>
    )
}