import React from 'react';
import Link from 'next/link';
import { FolderBoxIcon, ZeekText } from '~/assets/icons/icons';

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col justify-start mt-32 items-center gap-12 flex-grow">
        <span>
            <FolderBoxIcon />
        </span>
        <div className='flex flex-col items-center gap-3'>
          <span>
            <ZeekText />
          </span>
          <p className="text-[#A7A7A7] xl:text-[20px] text-[16px] -tracking-[6%] text-center font-medium">Verify stuffs without fucking up <br/> privacy</p>
        </div>       
        <Link className="bg-[#000000] text-[#fff] py-4 px-12 rounded-[12px]" href="/template">
          Get Started
        </Link>
      </div>
      <footer className="w-full flex items-center justify-center py-4">
        <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
      </footer>
    </div>
  );
}
