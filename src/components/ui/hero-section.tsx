"use client";

import BtnDownloadResume from "./btn-download-resume";
import HeroBoxes from "./hero-boxes";

import { Users } from "lucide-react";
import { Laptop } from "lucide-react";
import { FolderKanban } from "lucide-react";
import { TextTypingEffectWithTextsFadeOut } from "@/components/ui/text-typing-effect-with-texts-fadeout";
import BtnBookCall from "./btn-book-call";
export default function HeroSection() {
  return (
    <div className="bg-white  md:min-h-screen h-auto overflow-x-hidden">
      <div className=" h-full w-full bg-stone-950 md:min-h-screen">
        <div className="h-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.15)_1px,transparent_1px)] bg-[size:35px_35px]">
          <div className="relative isolate px-6 pt-14 lg:px-8 ">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="mx-auto max-w-7xl py-28 lg:py-40">
              <div className="text-center">
                {/* Shadow for hero text */}

                <div className="relative">
                  <div className="absolute left-1/2 top-0 z-[-1] h-[80vh] w-20 -translate-x-1/2 -translate-y-32 rotate-45 bg-indigo-500 blur-[180px]"></div>

                  <h1 className="text-[3.5rem] leading-none font-semibold tracking-tight text-balance text-stone-200 sm:text-[7rem] tracking-wide uppercase font-anton">
                    I Make Top-Notch
                    <br />
                    <span className="text-indigo-600">
                      Custom Web Applications
                    </span>
                  </h1>
                </div>
                <TextTypingEffectWithTextsFadeOut />
                {/* <p className="mt-4 text-lg font-medium text-pretty text-gray-300 sm:text-2xl/5 m-auto ">
                  High-performance React.js and Next.js web apps, crafted with
                  precision and passion.
                </p> */}
                <div className="flex items-center justify-center gap-2 md:gap-1 mt-5 md:mt-10">
                  {/* <BookACall /> */}
                  <BtnBookCall />
                  <BtnDownloadResume />
                </div>

                <div className="gap-8 mt-20 justify-center flex-col md:flex-row hidden md:flex">
                  <HeroBoxes
                    subText="Years Of Experience"
                    icon={<Laptop className="text-white" size={28} />}
                  >
                    5+
                  </HeroBoxes>
                  <HeroBoxes
                    subText="Happy Clients"
                    icon={<Users className="text-white" size={28} />}
                  >
                    26+
                  </HeroBoxes>
                  <HeroBoxes
                    subText="Delivered Projects"
                    icon={<FolderKanban className="text-white" size={28} />}
                  >
                    38+
                  </HeroBoxes>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
