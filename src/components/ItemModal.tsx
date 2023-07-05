import { Transition, Dialog } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useContext, useState } from 'react'
import CloseButton from './CloseButton'
import { CartContext } from '../context'

type Props = {
  image: string
  name: string
  price: number
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ItemModal = (props: Props) => {
  const { setItems } = useContext(CartContext)
  const { image, name, price, isOpen, setIsOpen } = props
  const [count, setCount] = useState<number>(0)

  const closeModal = () => {
    setIsOpen(false)
  }

  const increaseCount = () => {
    setCount(prev => prev + 1)
  }

  const decreaseCount = () => {
    if (count > 0) setCount(prev => prev - 1)
  }

  const addToCart = () => {
    const total = price * count
    setItems(prev => prev.concat({
      name: name,
      count: count,
      total: total
    }))
    closeModal()
    setCount(0)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className='bg-white w-full max-w-xs flex flex-col items-center gap-4 transform overflow-hidden rounded-md py-4 px-6 text-left align-middle shadow-xl transition-all'>
                <CloseButton closeFunction={closeModal} />
                <Dialog.Title as="h3" className="text-lg text-center font-medium leading-6 text-gray-900">
                  Rose
                </Dialog.Title>
                <img src={image} alt={name} className='w-28 h-28 object-cover rounded-md' />
                <p className="text-sm text-slate-500 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, unde.
                </p>
                <div className='flex gap-4 items-center '>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                    onClick={decreaseCount}
                  >
                    -
                  </button>
                  <span className='text-slate-500 font-bold border border-slate-300 py-1 px-5'>{count}</span>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                    onClick={increaseCount}
                  >
                    +
                  </button>
                </div>
                <button disabled={count === 0 ? true : false} className='bg-rose-200 px-3 py-2 rounded-md mt-4 disabled:bg-slate-200 disabled:text-slate-400' onClick={addToCart}>Add to cart</button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ItemModal