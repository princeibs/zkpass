import React from "react";
import Link from "next/link";
import { FolderBoxIcon, ZeekText } from "~/assets/icons/icons";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mt-32 flex flex-grow flex-col items-center justify-start gap-12">
        <span>
          <FolderBoxIcon />
        </span>
        <div className="flex flex-col items-center gap-3">
          <span>
            <ZeekText />
          </span>
          <p className="text-center text-[16px] font-medium -tracking-[6%] text-[#A7A7A7] xl:text-[20px]">
            Simple KYC for RWAs
          </p>
        </div>
        <Link
          className="rounded-[12px] bg-[#000000] px-12 py-4 text-[#fff]"
          href="/template"
        >
          Get Started
        </Link>
      </div>
      <footer className="flex w-full items-center justify-center py-4">
        <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
      </footer>
    </div>
  );
}
