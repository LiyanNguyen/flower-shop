import { useState, useContext } from "react"
import CartModal from "../components/CartModal"
import { CartContext } from '../context'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { items } = useContext(CartContext)
  
  const openCart = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="w-full h-20 bg-rose-300 flex">
        <div className='flex items-center justify-between px-5 container mx-auto'>
          <p className='h-10 w-10 text-sm rounded-full bg-rose-500 flex items-center justify-center'>FS</p>
          <h1 className='text-2xl text-center text-black hidden md:block'>Flower Shop</h1>
          <p className='text-black cursor-pointer' onClick={openCart}>
            <span className='px-2 py-1 rounded bg-rose-200'>{items.length}</span>
            &nbsp;View my Cart &gt;</p>
        </div>
      </div>
      <CartModal isOpen={isOpen} setIsOpen={setIsOpen} />    
    </>
  )
}

export default Navbar