'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Select from "../_components/select/select";
import { CheckGreenIcon, CheckGreyIcon, ModalCloseIcon, RightArrowIcon } from "~/assets/icons/icons";
import BaseModal from "../_components/modal/baseModal";
import SuccessToaster from "../_components/toaster/success";

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
  { id: "1", name: "National ID" },
  { id: "2", name: "NIN" },
  { id: "3", name: "Passport" },
];

const CHAIN_LIST: IChainListItem[] = [
  {
    id: "1",
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
  const [showMapDetails, setShowMapDetails] = useState(false);
  const [showPassport, setShowPassport] = useState(false);
  const [documentList, setDocumentList] = useState<ISelectItem | undefined>(undefined);
  const [chainList, setChainList] = useState<ISelectItem | undefined>(undefined);

  // state to manage after upload function
  const [idAdded, setIdAdded] = useState(false);
  const [landAdded, setLandAdded] = useState(false);
  const [mapAdded, setMapAdded] = useState(false);
  const [passportAdded,setPassportAdded] = useState(false);

  // Toasters 
  const [showIdToaster, setShowIdToaster] = useState(false);
  const [showLandToaster, setShowLandToaster] = useState(false);
  const[showMapToaster, setShowMapToaster] = useState(false);
  const[showPassportToaster, setShowPassportToaster] = useState(false);

  // Function to check if both ID and Land transaction are completed
  const isUploadButtonEnabled = idAdded && landAdded && mapAdded;

  // Handle ID document modal close
  const handleIdModalClose = () => {
    setShowDocuments(false);
  };

  // Handle Land transaction modal close
  const handleLandModalClose = () => {
    setShowLandTransaction(false);
  };

  const handleMapModalClose = () => {
    setShowMapDetails(false);
  };

  useEffect(() => {
    if (showIdToaster) {
      const timer = setTimeout(() => {
        setShowIdToaster(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showIdToaster]);

  useEffect(() => {
    if (showLandToaster) {
      const timer = setTimeout(() => {
        setShowLandToaster(false);
      }, 4000);
      return () => clearTimeout(timer);
    } 
  }, [showLandToaster]);


  useEffect(() => {
    if (showMapToaster) {
      const timer = setTimeout(() => {
        setShowMapToaster(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showMapToaster]);


  useEffect(() => {
    if (showPassportToaster) {
      const timer = setTimeout(() => {
        setShowPassportToaster(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showPassportToaster]);

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="fixed h-8 w-full items-center bg-[#000]">
        <span className="mx-auto flex items-center justify-center py-1 text-center text-[14px] text-[#fff]">
          This is a Demo Flow
        </span>
      </nav>
      <div className="flex flex-grow flex-col items-center justify-center pb-1 pt-12">
        <span className="text-[20px] text-[#7C7C7C]">
          Z<span className="italic">ee</span>k
        </span>

        <div className="mt-8 flex flex-col items-center">
          <p className="text-[18px] text-[#030303] xl:text-[24px]">
            Phoenix Real World Asset has invited you to
          </p>
          <p className="text-[18px] text-[#030303] xl:text-[24px]">
            verify your asset
          </p>
        </div>

        <div className="mt-20 flex w-full flex-col items-center gap-2">
          <div
            className={`flex w-10/12 cursor-pointer flex-row items-center justify-between border ${idAdded ? 'border-[#01E17B] cursor-not-allowed rounded-[12px]' : 'border-[#E4E4E4]'} bg-[#fff] xl:w-4/12`}
            onClick={() => {
              if (!idAdded) {
                setShowDocuments(true);
              }
            }}
          >
            <div className="flex flex-row items-center gap-4 px-3 py-4">
              {idAdded ? <CheckGreenIcon /> : <CheckGreyIcon />}
              <p className="text-[16px] text-[#909090] xl:text-[20px]">
                Provide identity documents
              </p>
            </div>
            <span className="px-3">
              <RightArrowIcon />
            </span>
          </div>
          <div
            className={`flex w-10/12 cursor-pointer flex-row items-center justify-between border ${landAdded ? 'border-[#01E17B] cursor-not-allowed rounded-[12px]' : 'border-[#E4E4E4]'} bg-[#fff] xl:w-4/12`}
            onClick={() => {
              if (!landAdded) {
                setShowLandTransaction(true);
              }
            }}
          >
            <div className="flex flex-row items-center gap-4 px-3 py-4">
              {landAdded ? <CheckGreenIcon /> : <CheckGreyIcon />}
              <p className="text-[16px] text-[#909090] xl:text-[20px]">
                Provide Land Transaction hash
              </p>
            </div>
            <span className="px-3">
              <RightArrowIcon />
            </span>
          </div>


          <div className={`flex w-10/12 cursor-pointer flex-row items-center justify-between border ${mapAdded ? 'border-[#01E17B] cursor-not-allowed rounded-[12px]' : 'border-[#E4E4E4]'} bg-[#fff] xl:w-4/12`}
            onClick={() => {
              if (!mapAdded) {
                setShowMapDetails(true);
              }
            }}>
            <div className="flex flex-row items-center gap-4 px-3 py-4">
            {mapAdded ? <CheckGreenIcon /> : <CheckGreyIcon />}
              <p className="text-[16px] text-[#909090] xl:text-[20px]">
                Provide Map details
              </p>
            </div>
            <span className="px-3">
              <RightArrowIcon />
            </span>
          </div>

          <div className={`flex w-10/12 cursor-pointer flex-row items-center justify-between border border-[#E4E4E4] bg-[#fff] xl:w-4/12`}>
            <div className="flex flex-row items-center gap-4 px-3 py-4">
            {passportAdded ? <CheckGreenIcon /> : <CheckGreyIcon />}
              <p className="text-[16px] text-[#909090] xl:text-[20px]">
                Provide Passport
              </p>
            </div>
            <span className="px-3">
              <RightArrowIcon />
            </span>
          </div>

        </div>

        <div className="mb-20 mt-20 flex w-9/12 flex-col justify-center gap-6 text-center xl:w-4/12">
          <div>
            <span className="text-[12px] text-[#AAAAAA]">
              By submitting you confirm that I have read the Privacy Notice and
              give my consent to the processing of my personal data, including
              biometrics, as described in this Notification to Processing of
              Personal Data.
            </span>
          </div>

          {/* <a href="">Use this template</a> */}
          <button
            className={`mx-auto flex w-7/12 justify-center rounded-[12px] bg-[#000] px-4 mt-3 py-3 text-[12px] text-[#fff] xl:w-5/12 ${!isUploadButtonEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => router.push("/review")}
            disabled={!isUploadButtonEnabled} // Disable button based on condition
          >
            Upload your documents
          </button>
        </div>
      </div>

      <footer className="flex w-full items-center justify-center py-4">
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
              onClick={handleIdModalClose}
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
                className="flex items-center justifycenter px-6"
              />
            </div>

            <div className="mt-8">
              <button className="w-full rounded-[10px] bg-[#000] p-4 text-[#fff]" onClick={() => { setIdAdded(true); setShowIdToaster(true); setShowDocuments(false); }}>
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
              onClick={handleLandModalClose}
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
              <span className="text-[13px] text-[#454D54]">
                Transaction Hash
              </span>
              <input
                type="text"
                className="w-full border border-[#E0E0E0] bg-[#FFFFFF] p-3 outline-none"
              />
            </div>

            <div className="mt-8">
              <button className="w-full rounded-[10px] bg-[#000] p-4 text-[#fff]" onClick={() => { setLandAdded(true); setShowLandToaster(true); setShowLandTransaction(false); }}>
                Add
              </button>
            </div>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        open={showMapDetails}
        setOpen={setShowMapDetails}
        className="bottom-0 top-0 mx-auto my-auto flex items-center justify-center px-0"
      >
        <div className="flex w-[400px] flex-col gap-4 pb-4">
          <div className="borber-b relative flex flex-row items-center justify-center">
            <p className="text-[16px] text-[#191716]">Map Details</p>
            <span
              className="absolute right-[-20px] cursor-pointer px-8"
              onClick={handleMapModalClose}
            >
              <ModalCloseIcon />
            </span>
          </div>
          <span className="w-full border-b border-[#E4ECF7] py-1"></span>
          <div className="flex flex-col gap-2 px-4">
            <span className="text-[13px] text-[#454D54]">Address</span>
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
              <span className="text-[13px] text-[#454D54]">
                Map Details
              </span>
              <input
                type="text"
                className="w-full border border-[#E0E0E0] bg-[#FFFFFF] p-3 outline-none"
              />
            </div>

            <div className="mt-8">
              <button className="w-full rounded-[10px] bg-[#000] p-4 text-[#fff]" onClick={() => { setMapAdded(true); setShowMapToaster(true); setShowMapDetails(false); }}>
                Add
              </button>
            </div>
          </div>
        </div>
      </BaseModal>

      {/* <BaseModal
        open={showMapDetails}
        setOpen={setShowMapDetails}
        className="bottom-0 top-0 mx-auto my-auto flex items-center justify-center px-0"
      >
        <div className="flex w-[400px] flex-col gap-4 pb-4">
          <div className="borber-b relative flex flex-row items-center justify-center">
            <p className="text-[16px] text-[#191716]">Map Details</p>
            <span
              className="absolute right-[-20px] cursor-pointer px-8"
              onClick={handleLandModalClose}
            >
              <ModalCloseIcon />
            </span>
          </div>
          <span className="w-full border-b border-[#E4ECF7] py-1"></span>
          <div className="flex flex-col gap-2 px-4">
            <span className="text-[13px] text-[#454D54]">Address</span>
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
              <span className="text-[13px] text-[#454D54]">
                Transaction Hash
              </span>
              <input
                type="text"
                className="w-full border border-[#E0E0E0] bg-[#FFFFFF] p-3 outline-none"
              />
            </div>

            <div className="mt-8">
              <button className="w-full rounded-[10px] bg-[#000] p-4 text-[#fff]" onClick={() => { setLandAdded(true); setShowLandToaster(true); setShowLandTransaction(false); }}>
                Add
              </button>
            </div>
          </div>
        </div>
      </BaseModal> */}

      <SuccessToaster
        show={showIdToaster}
        setShow={setShowIdToaster}
        heading="Document provided"
        body="Your Document has been submitted!"
      />

      <SuccessToaster
        show={showLandToaster}
        setShow={setShowLandToaster}
        heading="Document provided"
        body="Your Document has been submitted!"
      />

      <SuccessToaster
        show={showMapToaster}
        setShow={setShowMapToaster}
        heading="Document provided"
        body="Your Document has been submitted!"
      />
    </div>
  );
};

export default Demo;
