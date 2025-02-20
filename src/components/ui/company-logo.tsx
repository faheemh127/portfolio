"use client";
import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
interface CompanyLogoTypes {
  setCurrentAnimate: (number: number) => void;
  currentAnimate: number;
  src: string;
  className: string;
  alt: string;
  logoNumber: number;
}
const CompanyLogo: React.FC<CompanyLogoTypes> = ({
  setCurrentAnimate,
  currentAnimate,
  src,
  className,
  alt,
  logoNumber,
}) => {
  const [progress, setProgress] = useState(0); // Start from 0

  useEffect(() => {
    if (!(currentAnimate == logoNumber)) return;
    console.log("useeffection function called" + currentAnimate);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop the animation when it reaches 100
          return 100;
        }
        return prev + 1; // Increment progress by 1 each time
      });
    }, 10); // 50ms interval => (100 steps * 50ms = 5000ms / 5s total)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentAnimate, logoNumber]);

  useEffect(() => {
    if (progress == 100) {
      console.log("2nd useeffect called");
      let n = logoNumber + 1;
      if (n > 5) n = 1;
      setCurrentAnimate(n);
    }
  }, [progress, logoNumber, setCurrentAnimate]);

  return (
    <div className="w-[33vw] md:w-1/5 ">
      <Image
        className={`${className} m-auto ${
          currentAnimate !== logoNumber ? "grayscale" : ""
        }`}
        src={`/img/logo/${src}`}
        width={500}
        height={100}
        alt={alt}
      />
      <Progress value={progress} className="mt-3 h-1" />
    </div>
  );
};

export default CompanyLogo;
