import React, {  Dispatch, SetStateAction } from 'react';
import { Listbox, Transition } from '@headlessui/react';

import { Fragment } from 'react';
import { DropdownIcon } from '~/assets/icons/icons';


interface ISelectItem {
  id: string;
  name: string;
}
interface selectProps {
  label?: string;
  selected: ISelectItem | undefined;
  setSelected: Dispatch<SetStateAction<ISelectItem | undefined>>;
  data: ISelectItem[];
  name?: string;
  height?: string;
  placeholder?: string;
  borderStyle?: string;
  backgroundColor?: string;
  className?: string;
  onChange?: (item: ISelectItem | undefined) => void;
}

function classNames(...classes: (string | undefined | null | false | number)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Select({
  label,
  selected,
  setSelected,
  data,
  name,
  height,
  backgroundColor,
}: selectProps) {
  // const onChange = ({ name, id }: { name: string, id: string }) => {
  //    setSelected({ name, id })

  // }
  return (
    <Listbox
      value={selected}
   
    >
      {({ open }) => (
        <div className="flex flex-col w-full">
          {label && (
            <Listbox.Label className="block text-sm  text-[#494949] font-medium mb-2">
              {label && label}
            </Listbox.Label>
          )}
          <div className="relative w-full bg-white">
            <Listbox.Button
              // placeholder={placeholder}
              className={
                `${ height ? height : "h-[48px] "}  relative w-full rounded-[8px] outline-none  border border-[#E3E5E8] px-4 bg-white cursor-pointer   text-left  focus:outline-none  sm:text-sm small-z 
                ${backgroundColor ? backgroundColor : " bg-[#fff]"}`
            }
            >
              {selected?.name !== "" ? (
                <span className="block truncate capitalize off-white-text text-sm">
                  {selected?.name ?? name}
                </span>
              ) : (
                <span className="text-[13px] text-[#454D54] capitalize">{name}</span>
              )}
              <span className="absolute inset-y-0 right-0 px-4  flex items-center pointer-events-none super-z">
                <DropdownIcon />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className={`absolute z-100 super-z flow-hide border border-[#E3E5E8]  mt-1 w-full bg-[#fff]   rounded-[8px] py-1 text-base  overflow-auto focus:outline-none sm:text-sm super-z ${
                  open && ""
                }`}
              >
                {data?.map((person: ISelectItem, index: number) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-[#000] text-[#fff] rounded-[4px]" : "text-[#000]",
                        "cursor-pointer select-none relative py-2 pl-4 md:pl-8 pr-4"
                      )
                    }
                    onClick={() => setSelected(person)}
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-medium" : "font-normal capitalize",
                            "block truncate text-sm"
                          )}
                        >
                          {person?.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
