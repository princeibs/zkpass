import React from "react";
import { CheckGreyIcon, RightArrowIcon } from "~/assets/icons/icons";

const Demo = () => {
  return (
    <div>
        <nav className="bg-[#000] h-8 items-center fixed w-full">
            <span className="flex justify-center items-center text-center mx-auto text-[#fff] text-[14px] py-1 ">This is a Demo Flow</span>
        </nav>
            <div className="mx-auto flex flex-col items-center justify-center pt-12 pb-1">
      <span className="text-[20px] text-[#000]">zkPassport</span>

      <div className="mt-8 flex flex-col items-center">
        <p className="text-[24px] text-[#030303]">Koha has invited you to </p>
        <p className="text-[38px] text-[#000000]">Verify Farm Ownership </p>
        <p className="text-[14px] text-[#252C32]">
          Check if the verifier owns the Farmland.
        </p>
      </div>

      <div className="mt-20 flex w-full flex-col items-center gap-2">
        <div className="flex w-3/12 flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff]">
          <div className="flex flex-row items-center gap-4 px-3 py-3">
            <CheckGreyIcon />
            <p className="text-[20px] text-[#909090]">
              Provide identity documents
            </p>
          </div>
          <span className="px-3">
            <RightArrowIcon />
          </span>
        </div>
        <div className="flex w-3/12 flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff]">
          <div className="flex flex-row items-center gap-4 px-3 py-3">
            <CheckGreyIcon />
            <p className="text-[20px] text-[#909090]">
              Provide identity documents
            </p>
          </div>
          <span className="px-3">
            <RightArrowIcon />
          </span>
        </div>
        <div className="flex w-3/12 flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff]">
          <div className="flex flex-row items-center gap-4 px-3 py-3">
            <CheckGreyIcon />
            <p className="text-[20px] text-[#909090]">
              Provide identity documents
            </p>
          </div>
          <span className="px-3">
            <RightArrowIcon />
          </span>
        </div>
        <div className="flex w-3/12 flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff]">
          <div className="flex flex-row items-center gap-4 px-3 py-3">
            <CheckGreyIcon />
            <p className="text-[20px] text-[#909090]">
              Provide identity documents
            </p>
          </div>
          <span className="px-3">
            <RightArrowIcon />
          </span>
        </div>
      </div>

      <div className="mt-20 flex w-4/12 flex-col justify-center gap-6 text-center">
        <div>
          <span className="text-[12px] text-[#AAAAAA]">
            By submitting you confirm that I have read the Privacy Notice and
            give my consent to the processing of my personal data, including
            biometrics, as described in this Notification to Processing of
            Personal Data.
          </span>
        </div>
        <button className="mx-auto flex w-4/12 justify-center rounded-[12px] bg-[#DFDFDF] px-8 py-3 text-[12px] text-[#fff]">
          Use this template
        </button>
      </div>

      <div className="mx-auto mb-8 mt-24 flex items-center justify-center">
        <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
      </div>
    </div>
    </div>
  );
};

export default Demo;
