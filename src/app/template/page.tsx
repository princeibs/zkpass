"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FlagsIcon from "../../assets/images/flagss.png";
import { FlagIcon, ProfileIcon, ShowMoreIcon } from "../../assets/icons/icons";
import { KYC_TEMPLATE } from "../_components/data/data";

const Template = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-9/12 flex-grow flex-col items-center justify-start gap-5 pt-12 xl:w-7/12">
      <div className="w-full">
          <div className="mx-auto flex w-full flex-row justify-between">
            <p
              onClick={() => router.push(`/template`)}
              className="cursor-pointer text-[20px] text-[#000000]"
            >
              Z<span className="italic">ee</span>k
            </p>
            <span>
              <ProfileIcon />
            </span>
          </div>
          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <span className="rounded-[40px] bg-[#F0F0F0] px-4 py-2 text-[#000]">
              1
            </span>
            <span className="rounded-[40px] bg-[#000] px-4 py-2 text-[#fff]">
              2
            </span>
            <span className="rounded-[40px] bg-[#F0F0F0] px-4 py-2 text-[#000]">
              3
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <p className="text-[24px] text-[#000000]">Choose a KYC Template</p>
          <p className="text-[12px] text-[#A7A7A7] text-center">
            Start your verification process with carefully <br /> curated RWA KYC template
          </p>
        </div>

        <div className="mx-auto mt-8 flex w-full items-center justify-center xl:w-9/12">
          <input
            type="text"
            placeholder="Search"
            className="w-10/12 rounded-[12px] border border-[#E0E0E0] bg-[#FFFFFF] p-3 outline-none xl:w-6/12"
          />
        </div>

        <div className="mb-20 grid w-full grid-cols-1 gap-4 xl:grid-cols-3">
          {KYC_TEMPLATE.map((kyc, index) => (
            <div
              key={index}
              className="flex cursor-pointer flex-col gap-3 rounded-[6px] bg-white px-[16px] py-[16px] shadow"
              onClick={() => router.push(`/template/${index}`)}
            >
              <span className="w-fit rounded-[6px] bg-[#EEF3FF] px-[6px] py-[3px] text-[12px] font-medium text-[#3069FE]">
                {kyc.category}
              </span>
              <div className="mt-1 flex flex-col">
                <div className="flex w-full flex-row justify-between">
                  <p className="text-[16px] text-[#1A1919]">{kyc.kyc}</p>
                  <ShowMoreIcon />
                </div>
                <div>
                  <p className="text-[14px] text-[#5B6165]">{kyc.info}</p>
                </div>
              </div>
              <div className="relative mt-8 flex flex-row items-center justify-between">
                <div className="flex">
                  <Image src={FlagsIcon} alt="flags" className="w-[30px]"></Image>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <FlagIcon />
                  </span>
                  <span className="text-[12px] text-[#6E7C87]">2 checks</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="flex w-full items-center justify-center py-4">
        <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
      </footer>
    </div>
  );
};

export default Template;
