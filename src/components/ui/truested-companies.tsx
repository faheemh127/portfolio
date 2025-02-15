import React from "react";

function TruestedCompanies() {
  return (
    <div className="bg-white py-2 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-x-hidden">
        {/* <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2> */}
        <div className="mx-auto mt-5 flex max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl  sm:gap-x-10 lg:mx-0 lg:max-w-none animate-loog-scroll">
          
          <img
            className="col-span-2 max-h-12  object-contain lg:col-span-1"
            src="/img/logo/aounsol-logo.svg"
            alt="Transistor"
            width="258"
            height="48"
          />
          <img
            className="col-span-2 max-h-12  object-contain lg:col-span-1"
            src="/img/logo/finegap.png"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 max-h-12  object-contain lg:col-span-1"
            src="/img/logo/technomatic.png"
            alt="Tuple"
            width="300"
            height="70"
          />
          <img
            className="col-span-2 max-h-12  object-contain sm:col-start-2 lg:col-span-1"
            src="/img/logo/lime-technologies.png.webp"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            className="col-span-2 max-h-12  object-contain sm:col-start-2 lg:col-span-1"
            src="/img/logo/ar-webcrafts.png"
            alt="SavvyCal"
            width="300"
            height="78"
          />
          <img
            className="col-span-2 max-h-12  object-contain sm:col-start-2 lg:col-span-1"
            src="/img/logo/cancerscan-uk.webp"
            alt="SavvyCal"
            width="400"
            height="100"
          />

          
        
        </div>
      </div>
    </div>
  );
}

export default TruestedCompanies;
