import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { motion } from "framer-motion";

const companies = [
  {
    id: 1,
    logo: "/img/logo/aounsol-logo.svg",
    stats: [
      { value: "30%", description: "reduction in operating costs" },
      { value: "18k+", description: "global customers" },
    ],
    quote:
      "Atlas Vector Search was the solution to our problems. It simplifies a lot of the work that goes into making Okta Inbox super user friendly for customers.",
    category: "Software",
  },
  {
    id: 2,
    logo: "/img/logo/ar-webcrafts.png",
    stats: [
      { value: "50%", description: "increase in revenue" },
      { value: "25k+", description: "satisfied clients" },
    ],
    quote:
      "Our AI-powered solution transformed how businesses analyze customer data, making decision-making 40% faster.",
    category: "Artificial Intelligence",
  },
  {
    id: 3,
    logo: "/img/logo/lime-technologies.png.webp",
    stats: [
      { value: "50%", description: "increase in revenue" },
      { value: "25k+", description: "satisfied clients" },
    ],
    quote:
      "Our AI-powered solution transformed how businesses analyze customer data, making decision-making 40% faster.",
    category: "Artificial Intelligence",
  },
  {
    id: 4,
    logo: "/img/logo/cancerscan-uk.webp",
    stats: [
      { value: "50%", description: "increase in revenue" },
      { value: "25k+", description: "satisfied clients" },
    ],
    quote:
      "Our AI-powered solution transformed how businesses analyze customer data, making decision-making 40% faster.",
    category: "Artificial Intelligence",
  },
  {
    id: 5,
    logo: "/img/logo/gladstonemedia.jpg",
    stats: [
      { value: "50%", description: "increase in revenue" },
      { value: "25k+", description: "satisfied clients" },
    ],
    quote:
      "Our AI-powered solution transformed how businesses analyze customer data, making decision-making 40% faster.",
    category: "Artificial Intelligence",
  },
];

function CompanyDescription({ currentAnimate }: { currentAnimate: number }) {
  // Find the company based on currentAnimate
  const company =
    companies.find((c) => c.id === currentAnimate) || companies[0];

  return (
    <div className="flex justify-between items-center mt-[120px] px-10">
      {/* Left Side - Logo & Stats */}
      <div className="__left">
        <motion.div
          key={currentAnimate}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="p-4 rounded-lg"
        >
          <div className="flex flex-col gap-20">
            <Image
              src={company.logo}
              className="w-[18rem]"
              width={400}
              height={100}
              alt="Company Logo"
            />
            {company.stats.map((stat, index) => (
              <div key={index} className="__wrap">
                <p className="text-5xl font-anton">{stat.value}</p>
                <p className="text-xl">{stat.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Middle Bracket */}
      <div className="__midle">
        <code className="font-bold text-[18rem] text-stone-200">{`{`}</code>
      </div>

      {/* Right Side - Quote & Buttons */}
      <div className="__right max-w-[55%]">
        <motion.div
          key={currentAnimate}
          initial={{ opacity: 0, x: +100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="p-4 rounded-lg"
        >
          <p className="mb-3">{company.category}</p>
          <h4 className="text-4xl mb-10">“{company.quote}”</h4>
          <div className="flex gap-3">
            <Button className="h-12 px-10 text-xl">Read Case Study</Button>
            <Button variant="outline" className="h-12 px-10 text-xl">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CompanyDescription;
