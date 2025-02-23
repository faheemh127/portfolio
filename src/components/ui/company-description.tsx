import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./button";
const companies = [
  {
    id: 1,
    logo: "/img/logo/aounsol-logo.svg",
    stats: [
      { value: "$200K+", description: "Company's Revenew" },
      { value: "20+", description: "global clients get service" },
    ],
    quote:
      "I joined this company in 2023 and have since contributed to numerous projects, primarily focusing on developing custom WordPress plugins and tailored solutions for our clients. Through my expertise, I have helped clients maximize the potential of their existing assets, enabling them to generate thousands of dollars in revenue.",
    category: "Software House",
    website: "https://aounsolutions.com/",
    link_text: "Visit Company's Website",
  },
  {
    id: 2,
    logo: "/img/logo/ar-webcrafts.png",
    stats: [
      { value: "150+", description: "bug fixes and UI issues fixed" },
      {
        value: "200+",
        description: "Organizations world wide using the product",
      },
    ],
    quote:
      "Ar Webcrafts primarily works on the WebinarIgnition WordPress plugin. I joined this company in 2024 and have been helping them build their WordPress plugin, WebinarIgnition. I fix bugs, ensure the plugin complies with WP.org policies, and improve its UI.",
    category: "SAAS",
    website: "https://www.arwebcrafts.com/",
    link_text: "Visit Site",
  },
  {
    id: 3,
    logo: "/img/logo/lime-technologies.png.webp",
    stats: [
      { value: "50%+", description: "CRM Software Development" },
      { value: "$300K+", description: "Managed transactions through CRM" },
    ],
    quote:
      "From 2020 to 2021, I built a custom CRM for this company, which now manages their teams, business finances, assets, bank accounts, cashbooks, and other financial aspects. Previously, they relied on Excel, but now they have a tailored CRM designed to meet their specific business needs.",
    category: "Digital Marketing",
    website: "https://limetechnologies.net/",
    link_text: "Visit Site",
  },
  {
    id: 4,
    logo: "/img/logo/cancerscan-uk.webp",
    stats: [
      { value: "50%", description: "Easy test booking" },
      { value: "$25k+", description: "Earned from clients" },
    ],
    quote:
      "We built an online test booking system for this UK-based company, allowing patients to answer important questions before arriving at the test center and make online payments through their website.",
    category: "Health Care",
    website: "https://cancerscanuk.co.uk/",
    link_text: "Visit Site",
  },
  {
    id: 5,
    logo: "/img/logo/gladstonemedia.jpg",
    stats: [
      { value: "50%", description: "increase in revenue" },
      { value: "25k+", description: "satisfied clients" },
    ],
    quote:
      "I help this company build custom UIs for their website based on the exact Figma designs provided by their clients. Since these designs required custom functionality, using Elementor was not an option. Instead, we developed tailored functionalities to match the Figma UIs seamlessly.",
    category: "Artificial Intelligence",
    website: "https://gladstonemedia.ca/",
    link_text: "Visit Site",
  },
];

function CompanyDescription({ currentAnimate }: { currentAnimate: number }) {
  // Find the company based on currentAnimate
  const company =
    companies.find((c) => c.id === currentAnimate) || companies[0];

  return (
    <div className="flex justify-between items-center mt-[5rem] md:mt-[5rem] md:px-10 flex-col md:flex-row gap-[5rem] md:gap-0">
      {/* Left Side - Logo & Stats */}
      <div className="__left">
        <motion.div
          key={currentAnimate}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="p-0 md:p-4 rounded-lg"
        >
          <div className="flex flex-col gap-10 md:gap-20">
            <Image
              src={company.logo}
              className="w-[18rem]"
              width={400}
              height={100}
              alt="Company Logo"
            />
            <div className=" flex flex-row justify-between md:flex-col md:gap-10">
              {company.stats.map((stat, index) => (
                <div key={index} className="__wrap">
                  <p className="text-4xl md:text-6xl font-anton">{stat.value}</p>
                  <p className="text-xl">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Middle Bracket */}
      <div className="__midle hidden md:block">
        <code className="font-bold text-[18rem] text-stone-200">{`{`}</code>
      </div>

      {/* Right Side - Quote & Buttons */}
      <div className="__right max-w-full md:max-w-[55%]">
        <motion.div
          key={currentAnimate}
          initial={{ opacity: 0, x: +100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="p-0 md:p-4 rounded-lg"
        >
          <p className="mb-3">{company.category}</p>
          <h4 className="text-3xl md:text-4xl mb-10">“{company.quote}”</h4>
          <div className="flex gap-3">
            <Link
              href={company.website}
              target="_blank"
            
            >
              <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:from-primary/80 hover:to-primary/70 from-primary/90 to-primary/80 border-t-primary h-9 px-8 py-6 bg-indigo-600">{company.link_text}</Button>
            </Link>
            {/* <Button variant="outline" className="h-12 px-10 text-xl">
              Learn More
            </Button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CompanyDescription;
