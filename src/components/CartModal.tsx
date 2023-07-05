import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useContext } from 'react'
import CloseButton from './CloseButton'
import { CartContext } from '../context'
import { TrashIcon } from "@heroicons/react/24/outline";

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const CartModal = (props: Props) => {
  const { items, setItems }  = useContext(CartContext)
  const { isOpen, setIsOpen } = props

  const closeModal = () => {
    setIsOpen(false)
  }

  const confirmPurchase = () => {
    alert('Thank you for your purchase')
    closeModal()
    setItems([])
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, itemIndex) => itemIndex !== index))
  }
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xs flex flex-col items-center gap-10 transform overflow-hidden rounded-md bg-white py-4 px-6 text-left align-middle shadow-xl transition-all">
                <CloseButton closeFunction={closeModal}/>
                <Dialog.Title as="h3" className="text-lg text-center font-medium leading-6 text-gray-900">
                  My Cart
                </Dialog.Title>
                {items.length === 0 ? 
                  <p className='text-sm text-slate-500 text-center'>
                    Your cart is Empty.
                  </p>
                  :
                  <div className='flex flex-col gap-4 w-full'>
                    {items.map((item, index) =>
                      <div className='flex items-center justify-between gap-2 border-b border-slate-300' key={index}>
                        <p>{item.name} x {item.count}</p>
                        <p className='flex items-center gap-4'>{item.total} <TrashIcon onClick={() => removeItem(index)} className="h-4 w-4 text-slate-400 cursor-pointer hover:text-slate-600 ease-in-out" /></p>
                      </div>
                    )}
                  </div>
                }
                <button
                  type="button"
                  className='inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2'
                  onClick={items.length === 0 ? closeModal : confirmPurchase}
                >
                  {items.length === 0 ? 'Close' : 'Confirm Purchase'}
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CartModal