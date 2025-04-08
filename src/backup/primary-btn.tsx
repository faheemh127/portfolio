import React from "react";

function FuturisticGradientButton() {
  return (
    <a
      href="#"
      className="relative inline-block h-[40px] w-[150px] hover:scale-[0.9] transition duration-300"
    >
      <i className="absolute -inset-[2px] block rounded-[3px] bg-red-900 bg-[linear-gradient(45deg,theme(colors.gray.200),#0e1538,#d400d4)]"></i>

      <i className="absolute -inset-2 block rounded-[3px] bg-red-900 bg-[linear-gradient(45deg,#4F46E5,#0e1538,#d400d4)] blur-lg"></i>
      <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden rounded-[3px] border-[1px] border-solid border-[#040a29] bg-[rgba(14,21,56,0.65)] tracking-[2px] text-white content-[''] before:absolute before:top-0 before:-left-[50%] before:h-full before:w-full before:skew-x-[25deg] before:bg-[rgba(255,255,255,0.075)]">
        Contact Me
      </span>
    </a>
  );
}

export default FuturisticGradientButton;
