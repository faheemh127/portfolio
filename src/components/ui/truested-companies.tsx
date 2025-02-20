import React from "react";
import Image from "next/image";

const logos = [
  {
    src: "/img/logo/aounsol-logo.svg",
    alt: "Transistor",
    width: 800,
    height: 10, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/finegap.png",
    alt: "Reform",
    width: 150,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/technomatic.png",
    alt: "Tuple",
    width: 800,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/lime-technologies.png.webp",
    alt: "SavvyCal",
    width: 220,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/ar-webcrafts.png",
    alt: "SavvyCal",
    width: 400,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/cancerscan-uk.webp",
    alt: "SavvyCal",
    width: 270,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/etechlogics-logo.png",
    alt: "SavvyCal",
    width: 370,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/webinarignition.webp",
    alt: "SavvyCal",
    width: 150,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/gladstonemedia.jpg",
    alt: "SavvyCal",
    width: 140,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/Doctor247.png",
    alt: "SavvyCal",
    width: 400,
    height: 50, // Update with actual image height
    link: "#",
  },
  {
    src: "/img/logo/the-hampton.svg",
    alt: "SavvyCal",
    width: 500,
    height: 50, // Update with actual image height
    link: "#",
  },
];

function TrustedCompanies() {
  return (
    <div className="bg-slate-900 py-5 md:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-5 flex max-w-lg items-center gap-x-10 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none  overflow-x-scroll animate-loog-scroll">
        
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              className="col-span-2 object-contain lg:col-span-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedCompanies;
