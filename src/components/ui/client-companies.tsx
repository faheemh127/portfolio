"use client";
import React, { useState } from "react";
import CompanyLogo from "./company-logo";
import CompanyDescription from "./company-description";
function ClientCompanies() {
  const [currentAnimate, setCurrentAnimate] = useState(1);
  return (
    <div className="h-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.07)_1px,transparent_1px)] bg-[size:40px_40px]">
      <div className="py-[200px] w-full max-w-[1400px] m-auto">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl leading-[3.5rem] font-anton">
            Loved by Peoples, trusted by <br />{" "}
            <span className="text-indigo-600"> companies world wide </span>
          </h1>
          <p className="hidden">View all customer stories</p>
        </div>
        <div className="flex gap-10 justify-between whitespace-nowrap">
          <CompanyLogo
            setCurrentAnimate={setCurrentAnimate}
            currentAnimate={currentAnimate}
            src="aounsol-logo.svg"
            className="w-[25rem] h-[3.5rem]"
            alt="Alternative"
            logoNumber={1}
          />
          <CompanyLogo
            setCurrentAnimate={setCurrentAnimate}
            currentAnimate={currentAnimate}
            src="ar-webcrafts.png"
            className="w-[16rem] h-[3.5rem]"
            alt="Alternative"
            logoNumber={2}
          />
          {/* <CompanyLogo
          setCurrentAnimate={setCurrentAnimate}
          currentAnimate={currentAnimate}
          src="finegap.png"
          className="w-[3.7rem] h-[3.5rem]"
          alt="Alternative"
          logoNumber={3}
        /> */}
          <CompanyLogo
            setCurrentAnimate={setCurrentAnimate}
            currentAnimate={currentAnimate}
            src="lime-technologies.png.webp"
            className="w-[9.8rem] h-[3.5rem]"
            alt="Alternative"
            logoNumber={3}
          />
          <CompanyLogo
            setCurrentAnimate={setCurrentAnimate}
            currentAnimate={currentAnimate}
            src="cancerscan-uk.webp"
            className="w-[8rem] h-[3.5rem]"
            alt="Alternative"
            logoNumber={4}
          />
          <CompanyLogo
            setCurrentAnimate={setCurrentAnimate}
            currentAnimate={currentAnimate}
            src="gladstonemedia.jpg"
            className="w-[3.6rem] h-[3.5rem]"
            alt="Alternative"
            logoNumber={5}
          />
        </div>

        <CompanyDescription currentAnimate={currentAnimate} />
      </div>
    </div>
  );
}

export default ClientCompanies;
