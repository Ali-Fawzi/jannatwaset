import * as motion from "framer-motion/client"

export default function Statistics() {
    return (
        <div className='flex flex-col items-center justify-center gap-8 px-4'>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 1 }}
                className='text-7xl sm:text-8xl md:text-9xl font-bold'
            >
                الاحصائيات
            </motion.span>
            <div className='w-full max-w-6xl mx-auto drop-shadow-sm p-4 border border-gray-200 rounded-lg'>
                <motion.div
                    initial={{
                        opacity: 0,
                        y:120
                    }}
                    whileInView={{
                        opacity: 1,
                        y:0
                    }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='w-full border border-gray-200 rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center'
                >
                    <div className='flex flex-col items-center md:items-end gap-2 border-b xl:border-b-0 md:border-l border-gray-200 justify-center py-8 px-16 w-full'>
                        <span className='text-3xl'>+565</span>
                        <span>زيارات الزبائن</span>
                    </div>
                    <div className='flex flex-col items-center md:items-end gap-2 border-b xl:border-b-0 xl:border-l border-gray-200 justify-center py-8 px-16 w-full'>
                        <span className='text-3xl'>+945</span>
                        <span>المشاريع المنجزة</span>
                    </div>
                    <div className='flex flex-col items-center md:items-end gap-2 border-b xl:border-b-0 md:border-l border-gray-200 justify-center py-8 px-16 w-full'>
                        <span className='text-3xl'>+896</span>
                        <span>المعدات المنصبة</span>
                    </div>
                    <div className='flex flex-col items-center md:items-end gap-2 justify-center py-8 px-16 w-full'>
                        <span className='text-3xl'>+3652</span>
                        <span>الاستثمارات الزراعية</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}