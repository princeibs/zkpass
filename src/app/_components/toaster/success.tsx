/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { SuccessIcon } from "~/assets/icons/icons";


interface SuccessToastProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    heading: string;
    body: string;
}

export default function SuccessToaster({ show, heading, body }: SuccessToastProps) {
  return (
    <>
      <div
        aria-live="assertive"
        className="super-z fixed inset-0 flex items-start px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-none text-[#000] shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex flex-row gap-4 bg-[#242C32] rounded-[8px] p-6 items-center border-b-4 border-[#01E17B]">
                    <div>
                        <SuccessIcon />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[18px] text-[#fff]">{heading}</p>
                      <p className="text-[#CDCFD0] text-[14px]">{body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
