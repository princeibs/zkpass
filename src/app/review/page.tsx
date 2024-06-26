'use client'

// import { useEffect, useState } from "react";
import { HurrayIcon } from "~/assets/icons/icons";
import { api } from '~/trpc/react'


const Review = () => {
  // const { data, error } = api.post.validate.useQuery();
  
  // if(error || !data){
  //   return <div>Error</div>
  // }
  
  // const [landOwnershipVerificationData, setLandOwnershipVerificationData] = useState(null);

  // useEffect(() => {
  //   fetch("https://zkapi-production.up.railway.app/person")
  //     .then((response) => response.json())
  //     .then((data) => setLandOwnershipVerificationData(data));
  // }, []);

  // if(!landOwnershipVerificationData){
  //   return <div>Loading...</div>
  // }

  const fetchData = () => {
    fetch("https://zkapi-production.up.railway.app/person")
      .then((response) => response.json())
      // .then((data) => setLandOwnershipVerificationData(data));

  };

  // if (error || !data) {
  //   return <div>Error</div>;
  // }

  // console.log(data, landOwnershipVerificationData);

  return (
    <div className="flex flex-col h-screen">
      <nav className="fixed h-8 w-full items-center bg-[#000]">
        <span className="mx-auto flex items-center justify-center py-1 text-center text-[14px] text-[#fff]">
          This is a Demo Flow
        </span>
      </nav>

      <div className="flex-grow flex flex-col gap-8 items-center justify-center pb-1 pt-10">
        <span>
          <HurrayIcon />
        </span>
        <div className="flex flex-col justify-center items-center mt-8">
          <span className="xl:text-[20px] text-[18px] text-[#B5B5B5]">Z<span className="italic">ee</span>k</span>
          <div className="flex flex-col items-center">
            <p className="text-[24px] text-[#030303] xl:text-[36px] w-8/12 text-center">
              Your Land Ownership Verification has been validated
            </p>
            <p className="text-[12px] text-[#896C42] xl:text-[14px] mt-2">
              Continue with Zkpass Transgate to verify ownership onchain
            </p>
            {/* <a href="" className="text-[#896C42] mt-2"></a> */}
            <p className="text-[12px] text-[#888888] mt-8">Redirecting in 10s</p>
          </div>
        </div>
      </div>

      <button onClick={() => fetchData()}>Load Land Ownership Data</button>


      <footer className="w-full flex items-center justify-center py-4">
        <p className="text-[12px] text-[#BDBDBD]">powered by zkPass</p>
      </footer>
    </div>
  );
};

export default Review;
