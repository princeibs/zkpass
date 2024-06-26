/* This example requires Tailwind CSS v2.0+ */
import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export default function BaseModal({open, setOpen, children, className} :ModalProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen  pt-4 px-4 pb-20 text-center laptop:block laptop:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#000] bg-opacity-35 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden laptop:inline-block laptop:align-middle laptop:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 laptop:translate-y-0 laptop:scale-95"
            enterTo="opacity-100 translate-y-0 laptop:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 laptop:scale-100"
            leaveTo="opacity-0 translate-y-4 laptop:translate-y-0 laptop:scale-95"
          >
            <div className={`relative inline-block align-middle bg-[#fff] xl:border border-one xl:border-[#fff]  rounded-[20px] px-4 pt-6 pb-4 text-left overflow-hidden shadow-xl transform transition-all laptop:my-8 laptop:align-middle ${className ? className : "laptop:max-w-[358px] laptop:w-full"} laptop:p-6`}>
              
             {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
