"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Uber from "../../assets/images/Dashboard/image 4.svg";
import Bolt from "../../assets/images/Dashboard/Stack__Container.svg";
import {
  BackArrowIcon,
  CheckGreyIcon,
  CheckGreenIcon,
  FlagIcon,
  ProfileIcon,
  ShowMoreIcon,
} from "../../../assets/icons/icons";
import { KYC_TEMPLATE } from "../../_components/data/data";

const Template = () => {
  const router = useRouter();
  return (
    <div className="mx-auto flex w-7/12 flex-col items-center justify-start gap-5 pt-12">
      <div className="w-full">
        <div className="mx-auto flex w-full flex-row justify-between">
          <p onClick={() => router.push(`/template`)} className="cursor-pointer">zkPassport</p>
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

      <div className="px- ml-[4%] mt-12 flex w-full flex-col gap-3 justify-center">
        <div className="flex cursor-pointer flex-row items-center gap-3" onClick={() => router.back()}>
          <BackArrowIcon />
          <span className="text-[14px] text-[#454D54]">Back</span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="mt-4 flex flex-col">
            <span className="text-[24px] text-[#000]">
              Verify Farm Ownership
            </span>
            <p className="text-[14px] text-[#252C32]">
              Check if the verifier owns the Farmland.
            </p>
          </div>

            

          <div className="flex flex-row h-fit items-center gap-2 rounded-[12px] bg-[#F0F0F0] px-[20px] py-[11px]">
            <span>
              <FlagIcon />
            </span>
            <p>2 Checks</p>
          </div>
        </div>
        <div className="flex mt-4 -tracking-[5%] text-[#6D6D6D] text-[14px] font-normal w-11/12">
            <span>
              Crafted in Figma, this kit features over thirty pre-designed
              widgets that are ready to be customized to your liking. These
              widgets cover a wide range of survey types and formats. 
              <br /><br />
              In addition, the free Figma resource also includes a robust design
              system that serves as the foundation for the project. This ensures
              that all the widgets are consistent and cohesive, making it easy
              for you to create a polished and professional-looking survey in no
              time.
            </span>
          </div>

        <div className="flex flex-row justify-between w-full mt-12">
            <div className="flex flex-col">
                <p>Verification steps</p>
                <p className="text-[#252C32] text-[12px]">Check if the verifier owns the Farmland.</p>

                <div className="flex flex-col gap-4">
                       <div className="flex flex-row gap-2 mt-8">
                            <span>
                                <CheckGreenIcon />
                            </span>
                            <p className="text-[14px] text-[#090909]">Land Certificate</p>
                       </div>
                       <div className="flex flex-row gap-2">
                            <span>
                                <CheckGreenIcon />
                            </span>
                            <p className="text-[14px] text-[#090909]">Land Certificate</p>
                       </div>
                       <div className="flex flex-row gap-2">
                            <span>
                                <CheckGreenIcon />
                            </span>
                            <p className="text-[14px] text-[#090909]">Land Certificate</p>
                       </div>
                </div>
            </div>

            <div className="flex bg-[#F0F0F0] w-[300px] h-[220px] rounded-[12px]">

            </div>
        </div>
        <div className="flex justify-center items-center mt-8 flex-col gap-3">
                <button className="text-[#fff] text-[12px] bg-[#DFDFDF] py-3 px-8 rounded-[12px]">
                Use this template
                </button>
                <p className="text-[16px] text-[#636363] cursor-pointer" onClick={() => router.push("/demo")}>Demo</p>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto mt-24 mb-8">
            <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
      </div>
    </div>
  );
};

export default Template;
