import {duty, dutyResponse} from "~/lib/type";
import {Suspense} from "react";
import {Await, Link} from "@remix-run/react";
import NextIcon from '../../asstes/icons/nextBlack.svg'
import Telephone from '../../asstes/icons/Telephone.svg'
import contactImg from '../../asstes/images/contact.png'
import {Button} from "~/components/ui/Button";

export default function ServicesMenu({duties, phoneNumberService}: {duties: dutyResponse; phoneNumberService: string}) {
    return (
        <div className='w-full max-w-md mx-auto'>
            <div className='flex flex-col items-center justify-evenly gap-8 w-[340px] mx-auto'>
                <div className='bg-menuColor rounded-xl flex flex-col items-start justify-center gap-4 p-8 w-full'>
                    <span className='text-2xl font-bold'>قائمة الخدمات</span>
                    <hr className='bg-green pb-0.5 w-12 mb-4'/>
                    {duties && (
                        <Suspense fallback={
                            <span className='text-lg font-semibold text-center'>تحميل...</span>
                        }>
                            <Await resolve={duties}>
                                {(resolvedData) => resolvedData.data.map((duty: duty) =>
                                    <Link key={duty.id} to={`/services/${duty.id}`}
                                          className='flex flex-row items-start justify-between p-4 overflow-hidden bg-menuBackground animate-smooth hover:bg-background rounded-2xl w-full'
                                    >
                                    <span
                                        className='max-w-48'>
                                        {duty.title}
                                    </span>
                                        <NextIcon/>
                                    </Link>
                                )}
                            </Await>
                        </Suspense>
                    )}
                </div>
                <div className='w-full rounded-2xl relative h-[390px]'>
                    <img
                        src={contactImg}
                        alt='contact'
                        className='w-full object-cover absolute rounded-2xl'
                    />
                    <div
                        className='w-64 h-64 bg-darkYellow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col items-center justify-center gap-4 p-4'>
                        <div className='p-4 rounded-full bg-black/30'>
                            <Telephone/>
                        </div>
                        <span className='text-lg'>{phoneNumberService}</span>
                        <a
                            href={`https://api.whatsapp.com/send/?phone=${phoneNumberService}`}
                            target="_blank"
                            rel='noreferrer'
                        >
                            <Button
                                variant={'secondaryBlack'}
                                baseButtonClasses='inline-block rounded-md font-semibold text-center py-1 px-3'
                            >
                                تواصل معنا
                            </Button>
                        </a>
                    </div>
                </div>
                <div className='w-full bg-menuColor rounded-2xl p-8 flex flex-col items-start justify-center gap-4'>
                    <span className='text-2xl font-bold'>اخر الاخبار</span>
                    <hr className='bg-green pb-0.5 w-12 mb-4'/>
                    <span>للحصول على خدمة اخر اخبارنا قم بكتابة عنوان البريد الالكتروني الخاص بك .</span>
                    <form className='flex flex-col items-center justify-center gap-4 w-full'>
                        <input
                            name='email'
                            required
                            type='email'
                            className='bg-menuBackground w-full focus:ring-0 focus:outline-none placeholder:text-black rounded-lg p-2'
                            placeholder='عنوان البريد الالكتروني'
                        />
                        <Button
                            width='full'
                            variant='primaryGreen'
                            baseButtonClasses='inline-block rounded-lg font-semibold text-center p-2'
                        >
                            اشترك الان
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}