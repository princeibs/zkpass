"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'; 
import Uber from "../../assets/images/Dashboard/image 4.svg";
import Bolt from "../../assets/images/Dashboard/Stack__Container.svg";
import { FlagIcon, ProfileIcon, ShowMoreIcon } from "../../assets/icons/icons";
import { KYC_TEMPLATE } from "../_components/data/data";

const Template = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col min-h-screen">
    <div className="mx-auto flex xl:w-8/12 w-11/12 flex-col items-center justify-center gap-5 pt-12 flex-grow">
      <div className="mx-auto flex xl:w-6/12 w-10/12 flex-row justify-between">
        <p className="text-[20px] text-[#000000]">Z<span className="italic">ee</span>k</p>
        <span>
          <ProfileIcon />
        </span>
      </div>
      <div className="mt-8 flex flex-row items-center gap-3">
        <span className="rounded-[40px] bg-[#000] px-4 py-2 text-[#fff]">
          1
        </span>
        <span className="rounded-[40px] bg-[#F0F0F0] px-4 py-2 text-[#000]">
          2
        </span>
        <span className="rounded-[40px] bg-[#F0F0F0] px-4 py-2 text-[#000]">
          3
        </span>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <p className="text-[24px] text-[#000000]">Choose a KYC Template</p>
        <p className="text-[12px] text-[#A7A7A7]">
          Verify stuffs without fucking up privacy
        </p>
      </div>

      <div className="mx-auto mt-8 flex xl:w-9/12 w-full items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="xl:w-6/12 w-10/12 rounded-[12px] border border-[#E0E0E0] bg-[#FFFFFF] p-3 outline-none"
        />
      </div>

      <div className="grid w-full xl:grid-cols-3 grid-cols-1 gap-4 mb-20">
        {KYC_TEMPLATE.map((kyc, index) => (
          <div key={index} className="flex flex-col gap-3 rounded-[6px] bg-white px-[16px] py-[16px] shadow cursor-pointer" onClick={() => router.push(`/template/${index}`)}>
            <span className="w-fit rounded-[6px] bg-[#EEF3FF] px-[6px] py-[3px] text-[12px] font-medium text-[#3069FE]">
              {kyc.category}
            </span>
            <div className="flex flex-col mt-1">
              <div className="flex w-full flex-row justify-between">
                <p className="text-[16px] text-[#1A1919]">{kyc.kyc}</p>
                <ShowMoreIcon />
              </div>
              <div>
                <p className="text-[14px] text-[#5B6165]">{kyc.info}</p>
              </div>
            </div>
            <div className="relative flex flex-row justify-between items-center mt-4">
              <div className="flex flex-row items-center">
                <div className="relative z-10">
                  <Image src={Uber} alt="Uber" className="relative z-20" />
                </div>
                <div className="relative z-0 -ml-3">
                  <Image src={Bolt} alt="Bolt" className="relative z-10" />
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <span>
                  <FlagIcon />
                </span>
                <span className="text-[#6E7C87] text-[12px]">2 checks</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer className="w-full flex items-center justify-center py-4">
      <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
    </footer>
  </div>
  );
};

export default Template;
