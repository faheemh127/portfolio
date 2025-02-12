"use client";
import ShootingStarBorder from "./shooting-star-border";
export default function HeroSection() {
  return (
    <div className="bg-white min-h-screen h-screen">
      {/* <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]"> */}

      <div className=" h-full w-full bg-slate-950">
        <div className=" bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:36px_30px]">
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
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-26">
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
                  <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-8xl tracking-wide uppercase font-anton">
                    I Make Top-Notch
                    <br />
                    <span className="text-indigo-500">
                      Custom Web Applications
                    </span>
                  </h1>
                </div>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 text-muted">
                  High-performance React.js and Next.js web apps, crafted with
                  precision and passion.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                  {/* <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-10 py-4 text-lg font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book a call
                  </a> */}
                  <ShootingStarBorder />
                  {/* <a href="#" className="text-sm/6 font-semibold text-muted">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
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
