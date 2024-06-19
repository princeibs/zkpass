import React from 'react'
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-12">
          <div className='flex flex-col items-center'>
          <p className="text-[#000000] text-[80px]">zkPassport</p>
          <p className="text-[#A7A7A7] text-[20px]">Verify stuffs without fucking up privacy</p>
          </div>       
        <Link className="bg-[#000000] text-[#fff] py-4 px-12 rounded-[12px]" href="/template">
            Get Started
        </Link>
    </div>
  );
}
