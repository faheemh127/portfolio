"use client";

import React, { useRef } from "react";

interface HeroBoxesProps {
  children: React.ReactNode;
  subText: string;
  icon: React.ReactNode;
}

export const HeroBoxes: React.FC<HeroBoxesProps> = ({
  children,
  subText,
  icon,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  
  return (
    <div
      ref={boxRef}
      className="flex h-[auto] w-full md:w-1/4 items-center justify-center rounded-lg p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)] py-4 bg-dark border border-[rgba(255,255,255,0.2)]"
      style={{
        backgroundColor: "rgb(79, 70, 229,0.3)",
      }}
    >
      <div className="flex items-center w-full">
        <div className="icon border-r-2 border-indigo-500 px-6">{icon}</div>
        <div className="flex flex-col text-left pl-4">
          <h3 className="text-white text-3xl font-bold">{children}</h3>
          <p className="text-stone-300">{subText}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBoxes;
