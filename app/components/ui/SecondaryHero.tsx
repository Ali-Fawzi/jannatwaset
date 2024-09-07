import secondaryHeroImg from '../../asstes/images/secondaryHero.png'

export default function SecondaryHero({title} : {title: string}) {
    return (
        <div className='relative isolate overflow-hidden px-4 mb-24'>
            <img
                src={secondaryHeroImg}
                alt='Secondary Hero'
                className='absolute w-full inset-0 -z-10 h-96 object-cover'
                loading='eager'
            />
            <div className="mx-auto max-w-5xl py-36 text-white relative">
                <div className='w-full text-center'>
                    <span className='text-5xl sm:text-6xl xl:text-7xl drop-shadow-lg'>{title}</span>
                </div>
            </div>
        </div>
    )
}