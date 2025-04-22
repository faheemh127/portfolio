import React from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import BtnDownloadResume from "./btn-download-resume";
import PrimaryBtn from "./primary-btn";
function BusinessStrategies() {
  return (
    <div className="relative bg-gray-900">
      <h3 className="text-white text-4xl md:text-6xl font-bold font-anton mx-auto text-center pt-20 px-4">
        Personalized <span className="text-indigo-500">Strategies</span> to{" "}
        <br /> drive your business forward.
      </h3>
      <p className="mt-5 text-center text-base text-gray-400 md:text-xl px-4">
        From landing page design to enterprise-level web-apps
      </p>
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="bg-indigo-600 lg:col-span-2 row-span-1 rounded-xl border-2 border-slate-400/10 dark:bg-neutral-900">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="__left py-8 md:py-10 px-5 md:px-8 w-full md:w-1/2">
                <h4 className="text-3xl md:text-4xl text-white font-bold mb-6 md:mb-10">
                  Enterprise React <br /> Development
                </h4>
                <ul className="text-white">
                  <li className="flex gap-3 mb-3 items-start">
                    <MoveRight
                      size={20}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    Growth-Focused Development Approach
                  </li>
                  <li className="flex gap-3 mb-3 items-start">
                    <MoveRight
                      size={20}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    Simplified Website Management Solutions
                  </li>
                  <li className="flex gap-3 mb-3 items-start">
                    <MoveRight
                      size={20}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    Seamless Data Migration Assistance
                  </li>
                  <li className="flex gap-3 mb-3 items-start">
                    <MoveRight
                      size={20}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    Custom API Integration Services
                  </li>
                </ul>
                <p className="text-gray-300 text-lg md:text-xl mt-8 md:mt-10 mb-5">
                  I build enterprise-level React applications with distinctive
                  interfaces, multilingual capabilities, and custom animations
                  tailored to your needs
                </p>
                <BtnDownloadResume />
              </div>
              <div className="__right w-full md:w-1/2">
                <Image
                  src="/img/react-development.webp"
                  width={500}
                  height={700}
                  alt="Image of React Development"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-1 rounded-xl border-2 border-slate-400/10 bg-indigo-600 dark:bg-neutral-900">
            <Image
              src="/img/dashboard.webp"
              width={500}
              height={700}
              alt="Image of React Dashboard"
              className="w-full h-auto"
            />
            <div className="py-4 px-5 md:px-8 mt-5">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Custom <br /> Dashboard
              </h4>
              <p className="text-white text-base mb-5">
                I create bespoke dashboard management systems designed for your
                specific requirements, utilizing modern technologies like
                React.js, Node.js, and MongoDB.
              </p>
            </div>
          </div>

          {/* Second Row (reversed) */}
          <div className="col-span-1 row-span-1 rounded-xl border-2 border-slate-400/10 bg-indigo-600 dark:bg-neutral-900">
            <Image
              src="/img/dashboard.webp"
              width={500}
              height={700}
              alt="Image of React Dashboard"
              className="w-full h-auto"
            />
            <div className="py-4 px-5 md:px-8 mt-5">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">
                High-Converting <br /> Landing Page
              </h4>
              <p className="text-white text-base mb-5">
                I design unique interfaces, compelling content, responsive
                layouts, strong brand identities, and captivating animations—all
                optimized to enhance your digital impact and conversion rates
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 row-span-1 rounded-xl border-2 border-slate-400/10 bg-indigo-600 dark:bg-neutral-900">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="__left py-8 md:py-10 px-5 md:px-8 w-full md:w-1/2">
                <h4 className="text-3xl md:text-4xl text-white font-bold mb-6 md:mb-10">
                  Custom SaaS <br /> Application
                </h4>
                <ul className="text-white">
                  <li className="flex gap-3 mb-3 items-start">
                    <MoveRight
                      size={20}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    Future-Ready Architecture
                  </li>
                  <li className="flex gap-3 mb-3 items-start">
                    <MoveRight
                      size={20}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    Intuitive User Experiences
                  </li>
                  <li className="flex gap-3 mb-3 items-start">
                    <MoveRight
                      size={20}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    Robust Security Implementation
                  </li>
                  <li className="flex gap-3 mb-3 items-start">
                    <MoveRight
                      size={20}
                      className="text-indigo-300 mt-1 flex-shrink-0"
                    />
                    Actionable Performance Insights
                  </li>
                </ul>
                <p className="text-gray-300 text-lg md:text-xl mt-8 md:mt-10 mb-5">
                  I develop SaaS platforms with powerful features that
                  streamline operations and foster business growth.
                </p>
                <PrimaryBtn />
              </div>
              <div className="__right w-full md:w-1/2">
                <Image
                  src="/img/react-development.webp"
                  width={500}
                  height={700}
                  alt="Image of React Development"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessStrategies;
