"use client";

import BookACall from "./book-a-call";
import BtnDownloadResume from "./btn-download-resume";
import HeroBoxes from "./hero-boxes";
export default function HeroSection() {
  return (
    <div className="bg-white min-h-screen h-auto overflow-x-hidden">
      <div className=" h-full w-full bg-slate-950">
        <div className="h-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.10)_1px,transparent_1px)] bg-[size:40px_40px]">
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
            <div className="mx-auto max-w-7xl py-32  lg:py-25">
              {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
              <div className="text-center">
                {/* Shadow for hero text */}

                <div className="relative">
                  <div className="absolute left-1/2 top-0 z-[-1] h-[80vh] w-20 -translate-x-1/2 -translate-y-32 rotate-45 bg-indigo-500 blur-[180px]"></div>

                  <h1 className="text-5xl font-semibold tracking-tight text-balance text-stone-200 sm:text-8xl tracking-wide uppercase font-anton">
                    I Make Top-Notch
                    <br />
                    <span className="text-indigo-500">
                      Custom Web Applications
                    </span>
                  </h1>
                </div>
                <p className="mt-4 text-lg font-medium text-pretty text-gray-300 sm:text-2xl/5 m-auto ">
                  High-performance React.js and Next.js web apps, crafted with
                  precision and passion.
                </p>

                <div className="mt-10 flex items-center justify-center gap-3 md:gap-6 mt-5 md:mt-16">
                  <BtnDownloadResume />
                  <BookACall />
                </div>

                <div className="gap-5 mt-20 justify-center flex-col md:flex-row hidden md:flex">
                  <HeroBoxes>5+</HeroBoxes>
                  <HeroBoxes>200+</HeroBoxes>
                  <HeroBoxes>Data</HeroBoxes>
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
