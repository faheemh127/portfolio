import React from "react";

function PrimaryBtn() {
  return (
    <>
      <a
        href="#"
        className="relative inline-block h-[35px] w-[130px] hover:scale-[0.95] transition duration-300"
      >
        <i className="absolute -inset-[2px] block rounded-[3px] bg-red-900 bg-[linear-gradient(45deg,theme(colors.indigo.200),theme(colors.indigo.200),theme(colors.indigo.200))]"></i>

        <i className="absolute -inset-[2px] block rounded-[3px] bg-red-900 bg-[linear-gradient(45deg,#4F46E5,#4F46E5,#4F46E5)] blur-sm"></i>
        <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden rounded-[3px] border-[1px] border-solid border-[#040a29] bg-[rgba(14,21,56,0.65)] tracking-[2px] text-[14px] text-white content-[''] before:absolute before:top-0 before:-left-[50%] before:h-full before:w-full before:skew-x-[25deg] before:bg-[rgba(255,255,255,0.075)]">
          Contact Me
        </span>
      </a>
    </>
  );
}

export default PrimaryBtn;
