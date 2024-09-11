import img from "../../asstes/images/img.jpg"

export default function ServiceCard() {
    return (
        <div className='w-[366px] h-[440px] rounded-2xl relative border border-green'>
            <img src={img} alt='' className='object-cover rounded-2xl absolute w-full h-full'/>
            <div>

            </div>
        </div>
    )
}