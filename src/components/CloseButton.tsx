import { XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  closeFunction: () => void
}

const CloseButton = (props: Props) => {
  const { closeFunction } = props

  return (
    <button onClick={closeFunction} className='absolute right-3 top-3 p-1.5 rounded-full bg-slate-50 hover:bg-slate-200 transition-all'>
      <XMarkIcon className="h-5 w-5 text-gray-500" />
    </button>
  )
}

export default CloseButton