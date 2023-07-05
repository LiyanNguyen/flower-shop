import { useState } from "react"
import ItemModal from "./ItemModal"

type Props = {
  image: string
  name: string
  price: number
}

const Card = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { image, name, price } = props

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className='w-60 bg-rose-50 shadow-sm border border-rose-200 p-3 rounded-md flex flex-col items-center gap-2'>
        <img src={image} alt={name} className='w-28 h-28 object-cover rounded-md' />
        <h3 className='text-lg text-black font-bold'>{name}</h3>
        <h4 className='text-slate-500 font-bold'>${price}</h4>
        <button className='bg-rose-200 px-3 py-2 rounded-md' onClick={openModal}>Buy</button>
      </div>
      <ItemModal image={image} name={name} price={price} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Card