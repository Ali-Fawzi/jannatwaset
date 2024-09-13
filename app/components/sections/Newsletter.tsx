import background from '../../asstes/images/background.png'
import {Button} from "~/components/ui/Button";
import MapLocation from "~/components/MapLocation";
import * as motion from "framer-motion/client"
import {animationVariants} from "~/lib/utils";

export default function Newsletter() {
    return (
        <div className='flex flex-col xl:flex-row'>
            <motion.div
                initial={false}
                whileInView={'visible'}
                viewport={{once: true}}
                variants={animationVariants}
                className='relative w-full text-white h-96 opacity-0'
            >
                <img src={background} alt='' className='w-full h-full absolute object-cover'/>
                <div aria-hidden="true" className="absolute inset-0 bg-orange-400/80"/>
                <div className='mx-auto max-w-md mt-20 relative flex flex-col items-start justify-center gap-2 px-4'>
                    <span>لتواصل معنا</span>
                    <span className='text-3xl'>ترقبو اخر التحديثات</span>
                    <form className='flex flex-row items-center justify-center mt-8 w-full gap-4'>
                        <input
                            name='email'
                            required
                            type='email'
                            className='bg-white/0 border-b border-white w-full focus:ring-0 focus:outline-none placeholder:text-white p-2'
                            placeholder='ادخل بريدك الالكتروني'
                        />
                        <Button
                            className='w-48 -mb-1.5'
                            width='auto'
                            variant='secondaryWhite'
                            baseButtonClasses='inline-block rounded-full font-semibold text-center p-1'
                        >
                            ارسل الان
                        </Button>
                    </form>
                </div>
            </motion.div>
            <motion.div
                initial={false}
                whileInView={'visible'}
                viewport={{once: true}}
                variants={animationVariants}
                className='w-full opacity-0'
            >
                <MapLocation />
            </motion.div>
        </div>
    )
}