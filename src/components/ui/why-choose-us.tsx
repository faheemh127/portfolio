import React from "react";
import { FileCode, Sparkle, Headset } from "lucide-react";
function WhyChooseUs() {
  return (
    <div id="benefit" className=" w-full bg-gray-950 relative overflow-hidden">
      <div className="absolute w-[200px] h-10 bg-indigo-600 top-0 -left-[75px] blur-[120px] rotate-45"></div>
      <div className="max-w-6xl mx-auto px-5 md:px-0 py-16 md:py-[6rem]">
        <h3 className="text-4xl md:text-6xl font-bold font-anton text-white mb-5 md:mb-10">
          Why <span className="text-primaryColor">Choose</span> Me?
        </h3>
        <div className="bg-gray-900 rounded-3xl overflow-hidden flex justify-center flex-col md:flex-row gap-5 md:gap-0">
          <div className="text-center px-5 md:px-10 py-10 md:py-20 w-full md:w-[33%]">
            <div className="text-indigo-500 mb-5 md:mb-10  text-2xl">[1]</div>
            <p className="text-white text-3xl md:text-4xl font-bold ">
              Coding <br /> Standards
            </p>
            <div className="">
              <FileCode
                size={70}
                className="text-indigo-500 block mx-auto my-10 "
              />
            </div>
            <p className="text-gray-400 text-base md:text-xl">
              I follow industry-leading coding practices and stay updated with
              the latest technologies to deliver clean, optimized, and bug-free
              code.
            </p>
          </div>
          <div className="text-center w-full md:w-[33%] md:relative">
            <div className="bg-gradient-to-b from-indigo-600 to-indigo-600 md:absolute inset-0 opacity-[0.8] px-5 py-10 md:py-20 -z-index[1]">
              <div className="text-white mb-5 md:mb-10  text-2xl">[2]</div>
              <p className="text-white text-3xl md:text-4xl font-bold ">
                Clear & <br /> Transparent
              </p>
              <div className="">
                <Sparkle
                  size={70}
                  className="text-white block mx-auto my-10 "
                />
              </div>
              <p className="text-gray-400 text-base md:text-xl text-white">
                I build React applications optimized for speed and performance,
                prioritizing fast load times and seamless user experiences.
              </p>
            </div>
          </div>
          <div className="text-center px-5 md:px-10 py-10 md:py-20 w-full md:w-[33%]">
            <div className="text-indigo-500 mb-5 md:mb-10 text-2xl">[3]</div>
            <p className="text-white text-3xl md:text-4xl font-bold ">
              Continuous <br /> Support
            </p>
            <div className="">
              <Headset
                size={70}
                className="text-indigo-500 block mx-auto my-10 "
              />
            </div> 
            <p className="text-gray-400 text-base md:text-xl">
              I include 1 month of free post-delivery support to ensure a smooth
              transition and provide ongoing assistance as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
