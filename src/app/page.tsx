import React from 'react';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col justify-start mt-32 items-center gap-12 flex-grow">
        <div className='flex flex-col items-center'>
          <p className="text-[#000000] xl:text-[80px] text-[50px]">zkPassport</p>
          <p className="text-[#A7A7A7] xl:text-[20px] text-[16px]">Verify stuffs without fucking up privacy</p>
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
