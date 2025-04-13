"use client";
import React, { useState, useEffect, useRef } from "react";
import CompanyLogo from "./company-logo";
import CompanyDescription from "./company-description";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function ClientCompanies() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAnimate, setCurrentAnimate] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return <div ref={ref} className="h-[500px]" />; // Placeholder until visible

  return (
    <div
      id="client-companies"
      ref={ref}
      className="px-5 h-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.09)_1px,transparent_1px)] bg-[size:40px_40px] w-full overflow-hidden"
    >
      <div className="py-[80px] md:py-[150px] w-full max-w-[1400px] m-auto">
        <div className="flex justify-between items-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl leading-1 md:leading-[4.2rem] font-anton max-w-[800px]">
            Loved by Peoples, trusted by{" "}
            <span className="text-indigo-600"> companies worldwide </span>
          </h1>
          <p className="hidden">View all customer stories</p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex gap-10 justify-between whitespace-nowrap">
            <CompanyLogo
              setCurrentAnimate={setCurrentAnimate}
              currentAnimate={currentAnimate}
              src="aounsol-logo.svg"
              className="w-[25rem] h-[3.5rem]"
              alt="Alternative"
              logoNumber={1}
            />
            <CompanyLogo
              setCurrentAnimate={setCurrentAnimate}
              currentAnimate={currentAnimate}
              src="ar-webcrafts.png"
              className="w-[16rem] h-[3.5rem]"
              alt="Alternative"
              logoNumber={2}
            />
            <CompanyLogo
              setCurrentAnimate={setCurrentAnimate}
              currentAnimate={currentAnimate}
              src="lime-technologies.png.webp"
              className="w-[9.8rem] h-[3.5rem]"
              alt="Alternative"
              logoNumber={3}
            />
            <CompanyLogo
              setCurrentAnimate={setCurrentAnimate}
              currentAnimate={currentAnimate}
              src="cancerscan-uk.webp"
              className="w-[8rem] h-[3.5rem]"
              alt="Alternative"
              logoNumber={4}
            />
            <CompanyLogo
              setCurrentAnimate={setCurrentAnimate}
              currentAnimate={currentAnimate}
              src="gladstonemedia.jpg"
              className="w-[3.6rem] h-[3.5rem]"
              alt="Alternative"
              logoNumber={5}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <CompanyDescription currentAnimate={currentAnimate} />
      </div>
    </div>
  );
}

export default ClientCompanies;
