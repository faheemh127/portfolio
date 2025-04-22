"use client";
import React, { useState } from "react";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

import Link from "next/link";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

function FooterNew() {
  const [hovered, setHovered] = useState(false);
  const handleBtnMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="w-full bg-gray-950 pt-20 px-5 md:px-5">
      <div
        className={`transition-colors duration-300 max-w-7xl mx-auto py-16 ${
          hovered ? "bg-indigo-600" : "bg-gray-900"
        }  rounded-3xl border border-indigo-500 border-solid`}
      >
        <div className="h-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.15)_1px,transparent_1px)] bg-[size:35px_35px]">
          <div className="text-center">
            <p className="text-white py-1 rounded-full mb-10 px-7 bg-indigo-600 inline-block mx-auto text-sm relative">
              <span className="relative before:content-[''] before:w-2 before:h-2 before:bg-green-500 before:absolute before:top-1/2 before:-left-3 before:rounded-full before:transform before:-translate-y-1/2"></span>
              Available for work
            </p>
          </div>

          <div className="text-center max-w-4xl md:max-w-3xl mx-auto px-20">
            <SplitText
              text="Let's Create Your Next big idea."
              className={`font-semibold text-center ${
                hovered ? "text-white" : "text-gray-300"
              } text-2xl md:text-5xl tracking-tight`}
              delay={100}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              // easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>

          {/* <div className="text-center mt-10">
            <PrimaryBtn />
          </div> */}
          <button
            onMouseEnter={handleBtnMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-white text-neutral-950 py-2 text-sm rounded-lg px-10 block mx-auto mt-5 md:mt-10"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-5 flex justify-between flex-col md:flex-row">
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-zinc-300 text-sm">
            &copy; 2025 Faheem Hassan. All rights reserved. See our <br />
            <Link href="privacy-policy" className="text-zinc-400">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="terms-of-service" className="text-zinc-400">
              Terms & Conditions
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-4 mt-5 justify-center md:mt-0 mb-5 md:mb-0">
          <Link target="blank" href="https://www.youtube.com/@faheemh127">
            <FaYoutube className="text-gray-300" size={25} />
          </Link>

          <Link
            target="blank"
            href="https://www.linkedin.com/in/muhammad-faheem-hassan-h127/"
          >
            {" "}
            <FaLinkedin className="text-gray-300" size={25} />
          </Link>

          <Link target="blank" href="https://github.com/faheemh127">
            <FaGithub
              className="text-gray-300 hover:text-gray-100 transition-transform duration-700 hover:scale-125
"
              size={25}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterNew;
