"use client";
import React, {useState } from 'react';
import { useRouter } from "next/navigation";
import Select from "../_components/select/select";
import {
  CheckGreyIcon,
  ModalCloseIcon,
  RightArrowIcon,
} from "~/assets/icons/icons";
import BaseModal from "../_components/modal/baseModal";

interface ISelectItem {
  id: string;
  name: string;
}

interface IDocumentItem {
    id: string;
    name: string;
  }

interface IChainListItem {
    id: string;
    name: string;
  }
  

  const DOCUMENT_LIST: IDocumentItem[] = [
    { id: "1", name: 'National ID' },
    { id: "2", name: 'NIN' },
    { id: "3", name: 'Passport' },
  ];

const CHAIN_LIST: IChainListItem[] = [
  {
    id: '1',
    name: "Ethereum",
  },
  {
    id: "2",
    name: "Solana",
  },
  {
    id: "3",
    name: "BSC",
  },
];

const Demo = () => {
  const router = useRouter();
  const [showDocuments, setShowDocuments] = useState(false);
  const [showLandTransaction, setShowLandTransaction] = useState(false);
  const [documentList, setDocumentList] =  useState<ISelectItem | undefined>(undefined);
  const [chainList, setChainList] = useState<ISelectItem | undefined>(undefined);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed h-8 w-full items-center bg-[#000]">
        <span className="mx-auto flex items-center justify-center py-1 text-center text-[14px] text-[#fff] ">
          This is a Demo Flow
        </span>
      </nav>
      <div className="flex-grow flex flex-col items-center justify-center pb-1 pt-12">
        <span className="text-[20px] text-[#7C7C7C]">Z<span className="italic">ee</span>k</span>

        <div className="mt-8 flex flex-col items-center">
          <p className="xl:text-[24px] text-[18px] text-[#030303]">Koha has invited you to </p>
          <p className="xl:text-[38px] text-[24px] text-[#000000]">Verify Farm Ownership </p>
          <p className="xl:text-[14px] text-[12px] text-[#252C32]">
            Check if the verifier owns the Farmland.
          </p>
        </div>

        <div className="mt-20 flex w-full flex-col items-center gap-2">
          <div
            className="flex xl:w-4/12 w-10/12 cursor-pointer flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff]"
            onClick={() => setShowDocuments(true)}
          >
            <div className="flex flex-row items-center gap-4 px-3 py-4">
              <CheckGreyIcon />
              <p className="xl:text-[20px] text-[16px] text-[#909090]">
                Provide identity documents
              </p>
            </div>
            <span className="px-3">
              <RightArrowIcon />
            </span>
          </div>
          <div
            className="flex xl:w-4/12 w-10/12 cursor-pointer flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff]"
            onClick={() => setShowLandTransaction(true)}
          >
            <div className="flex flex-row items-center gap-4 px-3 py-4">
              <CheckGreyIcon />
              <p className="xl:text-[20px] text-[16px] text-[#909090]">
                Provide Land Transaction hash
              </p>
            </div>
            <span className="px-3">
              <RightArrowIcon />
            </span>
          </div>
          <div className="flex xl:w-4/12 w-10/12 cursor-pointer flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff]">
            <div className="flex flex-row items-center gap-4 px-3 py-4">
              <CheckGreyIcon />
              <p className="xl:text-[20px] text-[16px] text-[#909090]">Provide Map details</p>
            </div>
            <span className="px-3">
              <RightArrowIcon />
            </span>
          </div>
          <div className="flex xl:w-4/12 w-10/12 cursor-pointer flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff]">
            <div className="flex flex-row items-center gap-4 px-3 py-4">
              <CheckGreyIcon />
              <p className="xl:text-[20px] text-[16px] text-[#909090]">
                Provide identity documents
              </p>
            </div>
            <span className="px-3">
              <RightArrowIcon />
            </span>
          </div>
        </div>

        <div className="mt-20 flex xl:w-4/12 w-9/12 flex-col justify-center gap-6 text-center mb-20">
          <div>
            <span className="text-[12px] text-[#AAAAAA]">
              By submitting you confirm that I have read the Privacy Notice and
              give my consent to the processing of my personal data, including
              biometrics, as described in this Notification to Processing of
              Personal Data.
            </span>
          </div>
          <button className="mx-auto flex xl:w-4/12 w-7/12 justify-center rounded-[12px] bg-[#DFDFDF] px-8 py-3 text-[12px] text-[#fff]" onClick={() => router.push("/review")}>
            Use this template
          </button>
        </div>
      </div>

      <footer className="w-full flex items-center justify-center py-4">
        <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
      </footer>

      <BaseModal
        open={showDocuments}
        setOpen={setShowDocuments}
        className="bottom-0 top-0 mx-auto my-auto flex items-center justify-center px-0"
      >
        <div className="flex w-[400px] flex-col gap-4 pb-4">
          <div className="borber-b relative flex flex-row items-center justify-center">
            <p className="text-[16px] text-[#191716]">Identity Documents</p>
            <span
              className="absolute right-[-20px] cursor-pointer px-8"
              onClick={() => setShowDocuments(false)}
            >
              <ModalCloseIcon />
            </span>
          </div>
          <span className="w-full border-b border-[#E4ECF7] py-1"></span>
          <div className="flex flex-col gap-2 px-4">
            <span className="text-[13px] text-[#454D54]">Document Type</span>
            <Select
              placeholder="Document Type"
              className="bg-[#fff]"
              borderStyle="bg-[#34322D] rounded-[8px]"
              name="Document Type"
              data={DOCUMENT_LIST}
              selected={documentList}
              setSelected={setDocumentList}
            />
            <div className="mx-auto mt-4 flex w-full place-content-center items-center justify-center rounded-[10px] border-[1px] border-dashed p-12">
              <input
                type="file"
                name="Upload"
                id="file-upload"
                className="flex items-center justify-center px-6"
              />
            </div>

            <div className="mt-8">
              <button className="w-full rounded-[10px] bg-[#000] p-4 text-[#fff]">
                Add
              </button>
            </div>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        open={showLandTransaction}
        setOpen={setShowLandTransaction}
        className="bottom-0 top-0 mx-auto my-auto flex items-center justify-center px-0"
      >
        <div className="flex w-[400px] flex-col gap-4 pb-4">
          <div className="borber-b relative flex flex-row items-center justify-center">
            <p className="text-[16px] text-[#191716]">Land Details</p>
            <span
              className="absolute right-[-20px] cursor-pointer px-8"
              onClick={() => setShowLandTransaction(false)}
            >
              <ModalCloseIcon />
            </span>
          </div>
          <span className="w-full border-b border-[#E4ECF7] py-1"></span>
          <div className="flex flex-col gap-2 px-4">
            <span className="text-[13px] text-[#454D54]">Chain</span>
            <Select
              placeholder="Select Chain"
              className="bg-[#fff]"
              borderStyle="bg-[#34322D] rounded-[8px]"
              name="Chain"
              data={CHAIN_LIST}
              selected={chainList}
              setSelected={setChainList}
            />
            <div className="mt-4 flex w-full flex-col gap-2">
              <span className="text-[13px] text-[#454D54]">Transaction Hash</span>
              <input
                type="text"
                className="w-full border border-[#E0E0E0] bg-[#FFFFFF] p-3 outline-none"
              />
            </div>

            <div className="mt-8">
              <button className="w-full rounded-[10px] bg-[#000] p-4 text-[#fff]">
                Add
              </button>
            </div>
          </div>
        </div>
      </BaseModal>
    </div>
  );
};

export default Demo;
