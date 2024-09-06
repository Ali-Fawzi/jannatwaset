export default function Statistics() {
    return (
        <div className='flex flex-col items-center justify-center gap-8 px-4'>
            <span>الاحصائيات</span>
            <div className='w-full max-w-6xl mx-auto drop-shadow-sm p-4 border border-gray-200 rounded-lg'>
                <div className='w-full border border-gray-200 rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center'>
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
                </div>
            </div>
        </div>
    )
}