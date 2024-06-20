"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  BackArrowIcon,
  CheckGreenIcon,
  FlagIcon,
  ProfileIcon,
} from "../../../assets/icons/icons";

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

        <div className="px- ml-[4%] mt-12 flex w-full flex-col justify-center gap-3">
          <div
            className="flex cursor-pointer flex-row items-center gap-3"
            onClick={() => router.back()}
          >
            <BackArrowIcon />
            <span className="text-[14px] text-[#454D54]">Back</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="mt-4 flex flex-col">
              <span className="text-[18px] text-[#000] xl:text-[24px]">
                KYC Solution for Commercial Bank
              </span>
              <p className="text-[12px] text-[#252C32] xl:text-[14px]">
                KYC solution bank requires for their clients
              </p>
            </div>
            <div className="flex h-fit flex-row items-center gap-2 rounded-[12px] bg-[#F0F0F0] px-[18px] py-[4px] xl:px-[20px] xl:py-[11px]">
              <span>
                <FlagIcon />
              </span>
              <p className="text-[12px] xl:text-[14px]">2 Checks</p>
            </div>
          </div>
          <div className="mt-4 flex w-11/12 text-[14px] font-normal -tracking-[5%] text-[#6D6D6D]"></div>

          <div className="mt-12 flex w-full flex-col justify-between gap-8 xl:flex-row xl:gap-0">
            <div className="flex flex-col">
              <p>Verification steps</p>
              <p className="text-[12px] text-[#252C32]">
                Check if the has valid identity
              </p>
              <div className="flex flex-col gap-4">
                <div className="mt-8 flex flex-row gap-2">
                  <span>
                    <CheckGreenIcon />
                  </span>
                  <p className="text-[14px] text-[#090909]">Land Certificate</p>
                </div>
                <div className="flex flex-row gap-2">
                  <span>
                    <CheckGreenIcon />
                  </span>
                  <p className="text-[14px] text-[#090909]">
                    Verify residence of individual
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-[220px] w-[300px] rounded-[12px] bg-[#F0F0F0]"></div>
          </div>
          <div className="mb-20 mt-8 flex flex-col items-center justify-center gap-3">
            <button className="rounded-[12px] bg-[#DFDFDF] px-8 py-3 text-[12px] text-[#fff]">
              Use this template
            </button>
            <p
              className="cursor-pointer text-[16px] text-[#636363]"
              onClick={() => router.push("/demo")}
            >
              Demo
            </p>
          </div>
        </div>
      </div>
      <footer className="flex w-full items-center justify-center py-4">
        <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
      </footer>
    </div>
  );
};

export default Template;
