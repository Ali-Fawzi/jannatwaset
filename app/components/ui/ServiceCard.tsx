import img from "../../asstes/images/img.jpg"

export default function ServiceCard() {
    return (
        <div className='w-[366px] h-[440px] rounded-2xl bg-wheat'>
            <img src={img} alt='' className='w-full h-full object-cover rounded-2xl'/>
        </div>
    )
}