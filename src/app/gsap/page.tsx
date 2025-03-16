"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
function GSAP() {
  const divRef = useRef<HTMLDivElement>(null);
  let a = 0;
  const doAnimate = () => {
    if (!divRef.current) return;

    gsap.to(divRef.current, {
      x: "200",
      y: "200",
      repeat: 0,
      ease: "bounce.out",
    });
    a++;
  };
  useGSAP(
    () => {
      if (!divRef.current) return;
      gsap.to(divRef.current, {});
    },
    {
      scope: divRef,
      dependencies: [a],
      //   dependencies: Array/null: default[]
      // revertOnUpdate: true |  false
    }
  );

  return (
    <>
      <div
        ref={divRef}
        className="rounded-md h-[30rem] text-white text-4xl bg-black w-[20rem] text-center mt-10 ml-10"
      >
        GSAP
      </div>
      <button
        className="mt-5 bg-indigo-600 py-3 px-10 rounded text-white font-bold absolute bottom-0 left-[50%] bottom-10"
        onClick={doAnimate}
      >
        Animate
      </button>
    </>
  );
}

export default GSAP;
