import ContactIcon from '../../asstes/icons/Contact.svg'
import {Button} from "~/components/ui/Button";
import Telephone from '../../asstes/icons/ContactTelephone.svg'
import Email from '../../asstes/icons/ContactEmail.svg'
import Location from '../../asstes/icons/ContactLocation.svg'
export default function Contact() {
    return (
        <div className='flex flex-col items-center justify-center gap-2 px-4'>
            <ContactIcon />
            <span>ابق على تواصل معنا</span>
            <span className='text-3xl'>هل لديك اي سؤال؟</span>
            <form className='grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-5xl mx-auto w-full mt-8 justify-items-center'>
                <input
                    required
                    name='name'
                    className='text-black p-4 rounded-lg bg-background focus:outline-none max-w-lg w-full '
                    placeholder='الاسم'
                    type='text'
                />
                <input
                    required
                    name='email'
                    className='text-black p-4 rounded-lg bg-background focus:outline-none max-w-lg w-full '
                    placeholder='البريد الالكتروني'
                    type='email'
                />
                <input
                    required
                    name='address'
                    className='text-black p-4 rounded-lg bg-background focus:outline-none max-w-lg w-full '
                    placeholder='العنوان'
                    type='text'
                />
                <input
                    required
                    name='phone'
                    className='text-black p-4 rounded-lg bg-background focus:outline-none max-w-lg w-full '
                    placeholder='رقم الهاتف'
                    type='text'
                />
                <textarea
                    required
                    name='message'
                    className='text-black p-4 rounded-lg bg-background focus:outline-none xl:col-span-2 h-64 max-w-lg xl:max-w-5xl w-full'
                    placeholder='اكتب الرسالة هنا ..'
                />
                <div className='mx-auto xl:col-span-2'>
                    <Button variant='secondaryGreen'>
                        ارسل الرسالة
                    </Button>
                </div>
            </form>
            <div className='mt-16 w-full max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 items-center justify-center'>
                <div className='border border-green rounded-lg py-12 flex flex-col items-center justify-center gap-2 w-full max-w-xs'>
                    <div className='p-4 rounded-full bg-background'>
                        <Telephone />
                    </div>
                    <span className='font-semibold'>اتصل بنا</span>
                    <span>07800800758</span>
                    <span>07800800758</span>
                </div>
                <div className='border border-green rounded-lg py-12 flex flex-col items-center justify-center gap-2 w-full max-w-xs'>
                    <div className='p-4 rounded-full bg-background'>
                        <Email />
                    </div>
                    <span className='font-semibold'>ارسل ايميل</span>
                    <span>needhelp@organik.com</span>
                    <span>info@company.com</span>
                </div>
                <div className='border border-green rounded-lg py-12 flex flex-col items-center justify-center gap-2 w-full max-w-xs'>
                    <div className='p-4 rounded-full bg-background'>
                        <Location />
                    </div>
                    <span className='font-semibold'>زورنا للموقع</span>
                    <span>العراق , واسط</span>
                    <span>شارع الحي</span>
                </div>
            </div>
        </div>
    )
}