import ContactIcon from '../../asstes/icons/Contact.svg'
import {Button} from "~/components/ui/Button";
import Telephone from '../../asstes/icons/ContactTelephone.svg'
import Email from '../../asstes/icons/ContactEmail.svg'
import Location from '../../asstes/icons/ContactLocation.svg'
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";
import WheatImg from "~/asstes/images/wheat.png";
import {Form, Link, useActionData, useNavigation} from "@remix-run/react";
import {useEffect, useRef} from "react";
import clsx from "clsx";

export default function Contact() {
    const actionData = useActionData();
    const navigation = useNavigation();

    const state: "idle" | "success" | "error" | "submitting" = navigation.state === "submitting"
        ? "submitting"
        : actionData?.name === 'Error'
            ? "error"
            : actionData?.status === 'Unread'
                ? "success"
                : "idle";

    const inputRef = useRef<HTMLInputElement>(null);
    const successRef = useRef<HTMLHeadingElement>(null);
    const mounted = useRef<boolean>(false);

    useEffect(() => {
        if (state === "error") {
            inputRef.current?.focus();
        }

        if (state === "idle" && mounted.current) {
            inputRef.current?.select();
        }

        if (state === "success") {
            successRef.current?.focus();
        }

        mounted.current = true;
    }, [state]);
    return (
        <div className='px-4 overflow-hidden'>
            <div className='flex flex-col items-center justify-center gap-2 relative'>
                <motion.img
                    initial={{
                        x: -72
                    }}
                    variants={animationVariants}
                    whileInView={'correctX'}
                    viewport={{once: true}}
                    className='absolute top-0 left-0 opacity-0'
                    src={WheatImg}
                    alt='Wheat'
                />
                <motion.img
                    initial={{
                        x: 72,
                        scaleX: -1
                    }}
                    variants={animationVariants}
                    whileInView={'correctX'}
                    viewport={{once: true}}
                    className='absolute bottom-0 right-0 opacity-0'
                    src={WheatImg}
                    alt='Wheat'
                />
                <motion.div
                    initial={false}
                    variants={animationVariants}
                    whileInView={'visible'}
                    viewport={{once: true}}
                    className='flex flex-col items-center justify-center gap-2 opacity-0 z-10 text-lg'
                >
                    <ContactIcon/>
                    <span>ابق على تواصل معنا</span>
                    <span className='text-3xl'>هل لديك اي سؤال؟</span>
                </motion.div>
                <motion.div
                    initial={false}
                    variants={animationVariants}
                    whileInView={'visible'}
                    viewport={{once: true}}
                    className='opacity-0 w-full z-10'
                >
                    <Form
                        replace
                        method='POST'
                        className={clsx('grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-5xl mx-auto w-full mt-8 justify-items-center', state !== "success" ? 'block' : 'hidden')}
                    >
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
                            name='loaction'
                            className='text-black p-4 rounded-lg bg-background focus:outline-none max-w-lg w-full '
                            placeholder='العنوان'
                            type='text'
                        />
                        <input
                            required
                            name='phoneNumber'
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
                            <div className='text-rose-500 text-center' id="error-message">
                                {state === "error" ? <div>
                                    <p>تعذر التسليم</p>
                                    <p>يرجى اعادة المحاولة لاحقا</p>
                                </div> : ''}
                            </div>
                            <Button
                                type='submit'
                                variant='secondaryGreen'
                            >
                                {state === "submitting"
                                    ? "يتم الارسال ..."
                                    : "ارسال الرسالة"}
                            </Button>
                        </div>
                    </Form>
                    <div
                        className={clsx(state !== "success" ? 'hidden' : 'block', 'mt-8 max-w-6xl py-8 mx-auto flex flex-col items-center justify-center gap-2')}>
                        <h2 className='text-xl font-bold text-emerald-500' ref={successRef} tabIndex={-1}>
                            تم الارسال
                        </h2>
                        <p>سيتم الرد باقرب وقت</p>
                        <Link to=".">
                            <Button baseButtonClasses='inline-block rounded-md font-semibold text-center py-3 px-6'>
                                ارسل رسالة اخرى
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={false}
                variants={animationVariants}
                whileInView={'visible'}
                viewport={{once: true}}
                className='mt-16 w-full max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 items-center justify-center opacity-0 text-lg'
            >
                <div
                    className='border border-green rounded-lg py-12 flex flex-col items-center justify-center gap-2 w-full max-w-xs'>
                    <div className='p-4 rounded-full bg-background'>
                        <Telephone/>
                    </div>
                    <span className='font-semibold'>اتصل بنا</span>
                    <span>07800800758</span>
                    <span>07800800758</span>
                </div>
                <div
                    className='border border-green rounded-lg py-12 flex flex-col items-center justify-center gap-2 w-full max-w-xs'>
                    <div className='p-4 rounded-full bg-background'>
                        <Email/>
                    </div>
                    <span className='font-semibold'>ارسل ايميل</span>
                    <span>needhelp@organik.com</span>
                    <span>info@company.com</span>
                </div>
                <div
                    className='border border-green rounded-lg py-12 flex flex-col items-center justify-center gap-2 w-full max-w-xs'>
                    <div className='p-4 rounded-full bg-background'>
                        <Location/>
                    </div>
                    <span className='font-semibold'>زورنا  للموقع</span>
                    <span>العراق , واسط</span>
                    <span>شارع الحي</span>
                </div>
            </motion.div>
        </div>
    )
}