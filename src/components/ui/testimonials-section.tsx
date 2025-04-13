"use client";
import React from "react";
import Image from "next/image";

// ... (keep your testimonials array exactly the same)
const testimonials = [
  // Column 1
  [
    {
      id: 8,
      image: "/img/testimonials/damien.png",
      name: "Damien Robert James D",
      role: "Director techomatic.co.uk",
      text: "The website not only looks great but also performs exceptionally well. It has greatly boosted our online presence!",
      link: "https://www.techomatic.co.uk/",
    },
    {
      id: 3,
      image: "/img/testimonials/tobias.png",
      name: "Tobias B. Conrad",
      role: "CEO of saleswonder.biz",
      text: "The level of professionalism and expertise displayed in web development was impressive. Our website was built exactly to our requirements!",
      link: "https://saleswonder.biz/",
    },
    {
      id: 1,
      image: "/img/testimonials/noman-ghaffar.png",
      name: "Noman Ghaffar",
      role: "CEO of Finegap",
      text: "Working with Muhammad Faheem Hassan has been an absolute pleasure! They developed a high-quality, fully optimized website for FineGap, exceeding our expectations. Their expertise in WordPress, custom plugins, and responsive design made a huge difference. We highly recommend their services to anyone looking for a top-notch web development partner!",
      link: "https://finegap.com/",
    },
  ],
  // Column 2
  [
    {
      id: 4,
      image: "/img/testimonials/arman.png",
      name: "Arman Naseer",
      role: "CEO of AR-Webcrafts",
      text: "Amazing work! The attention to detail and smooth functionality of our website have significantly improved user engagement. Thank you!",
      link: "https://www.arwebcrafts.com/",
    },
    {
      id: 5,
      image: "/img/testimonials/asad.png",
      name: "Asad",
      role: "CEO of easemartus.com",
      text: "Incredible service! The website was delivered on time and exceeded all expectations in terms of design and functionality.",
      link: "https://www.easemartus.com/",
    },
    {
      id: 6,
      image: "/img/testimonials/asim-ghaffar.png",
      name: "Asim Ghaffar",
      role: "CEO of cubixsol.com",
      text: "The creativity and technical expertise in the development of our platform were phenomenal. We received great feedback from users!",
      link: "https://cubixsol.com/",
    },
  ],
  // Column 3
  [
    {
      id: 2,
      image: "/img/testimonials/murtaza.png",
      name: "Murtaza",
      role: "CEO of Aoun Solutions",
      text: "Muhammad Faheem Hassan delivered an outstanding website for our company. The design was sleek, and the performance was top-notch. Highly recommended!",
      link: "https://aounsolutions.com/",
    },
    {
      id: 7,
      image: "/img/testimonials/arif.png",
      name: "Muhammad Arif",
      role: "Director (IELTS/PTE Trainer)",
      text: "A seamless experience from start to finish. The team was very professional and handled every request with great care.",
      link: "https://4skills.co/",
    },
    {
      id: 11,
      image: "/img/testimonials/noman-ghaffar.png",
      name: "Bilal Ahmed",
      role: "Project Coordinator",
      text: "Fantastic collaboration! The website's responsiveness and usability have greatly improved our customer engagement.",
      link: "https://finegap.com/",
    },
  ],
];

function TestimonialsSection() {
  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        {/* ... (keep your header section exactly the same) */}
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-left">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="text-indigo-600 mb-0 text-5xl font-semibold md:text-left md:text-6xl font-anton ">
              It&apos;s not <span className="text-white">just me</span>.
            </h1>
            <p
              className="text-lg text-gray-300 md:text-left md:text-xl mt-[3px]"
              style={{ marginTop: "3px" }}
            >
              Here&apos;s what others have to say about my services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 testimonials-container">
          {testimonials.map((column, columnIndex) => (
            <ul
              key={columnIndex}
              className={
                columnIndex === 0
                  ? "space-y-8"
                  : columnIndex === 1
                  ? "hidden space-y-8 sm:block"
                  : "hidden space-y-8 lg:block"
              }
            >
              {column.map((testimonial) => (
                <li
                  key={testimonial.id}
                  className="text-sm leading-6 testimonial-item transition-[filter] duration-400"
                >
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-indigo-600 to-indigo-800 blur duration-400 group-hover:opacity-100 group-hover:duration-200 "></div>
                    <a href={testimonial.link} className="cursor-pointer">
                      <div className="group-hover:scale-[1.1] relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={testimonial.image}
                            className="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt={testimonial.name}
                            width={12}
                            height={12}
                            unoptimized
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-500 text-md">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-[16px]">
                          {testimonial.text}
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .testimonials-container:hover .testimonial-item:not(:hover) {
          filter: blur(3px);
          transition: filter 0.2s ease;
          transition-duration: 300ms;
          scale: 0.98;
          transition: scale 0.3s ease;
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;
