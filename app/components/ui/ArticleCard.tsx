import img from "../../asstes/images/img.jpg"
import {Link} from "@remix-run/react";


export default function ArticleCard({variant = 'section'}: {variant?: 'section' | 'page'}) {
    return (
        <Link to={'/articles/1'} prefetch={'intent'} className='w-[350px] h-[520px] bg-white flex flex-col items-end justify-start rounded-lg drop-shadow-lg group'>
            <img src={img} alt='' className='rounded-t-lg object-cover w-[350px] h-[262px]' />
            <p className='bg-yellow border border-white px-6 py-3 rounded-lg -mt-6 ml-6'>
                March 18, 2021
            </p>
            <div className='flex flex-col items-center justify-center mx-auto gap-6 max-w-xs mt-4 px-4'>
                <p className='text-2xl font-semibold group-hover:text-yellow animate-smooth'>افضل الطرق الحديثة لزراعة الفواكه الاستوائية</p>
                <p>افضل واسهل الطرق الحديثة المستعملة لزراعة الفواكة الاستوائية في الشرق الاوسط في الصيف.</p>
            </div>
            {variant === 'page' && (
                <button
                    className='px-8 py-2 my-1 border border-gray-200 rounded-full font-semibold mx-auto animate-smooth group-hover:bg-black group-hover:text-white'
                >
                    اقراء المزيد
                </button>
            )}
        </Link>
    )
}