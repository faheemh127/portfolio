import React from "react";
import Image from "next/image";

const testimonials = [
  // Column 1
  [
    {
      id: 1,
      image:
        "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
      name: "Kanye West",
      role: "Rapper & Entrepreneur",
      text: "Find God.",
    },
    {
      id: 2,
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
      name: "Tim Cook",
      role: "CEO of Apple",
      text: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
    },
    {
      id: 3,
      image:
        "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
      name: "Kanye West",
      role: "Rapper & Entrepreneur",
      text: "Find God.",
    },
    {
      id: 4,
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
      name: "Tim Cook",
      role: "CEO of Apple",
      text: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
    },
  ],
  // Column 2
  [
    {
      id: 5,
      image:
        "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
      name: "Parag Agrawal",
      role: "CEO of Twitter",
      text: "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
    },
    {
      id: 6,
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
      name: "Tim Cook",
      role: "CEO of Apple",
      text: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
    },
    {
      id: 7,
      image:
        "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
      name: "Parag Agrawal",
      role: "CEO of Twitter",
      text: "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
    },
    {
      id: 8,
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
      name: "Tim Cook",
      role: "CEO of Apple",
      text: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
    },
  ],
  // Column 3
  [
    {
      id: 9,
      image:
        "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
      name: "Satya Nadella",
      role: "CEO of Microsoft",
      text: "Tortor dignissim convallis aenean et tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.",
    },
    {
      id: 10,
      image:
        "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
      name: "Dan Schulman",
      role: "CEO of PayPal",
      text: "Quam pellentesque nec nam aliquam sem et tortor consequat id. Enim sit amet venenatis urna cursus.",
    },
    {
      id: 11,
      image:
        "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
      name: "Satya Nadella",
      role: "CEO of Microsoft",
      text: "Tortor dignissim convallis aenean et tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.",
    },
    {
      id: 12,
      image:
        "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
      name: "Dan Schulman",
      role: "CEO of PayPal",
      text: "Quam pellentesque nec nam aliquam sem et tortor consequat id. Enim sit amet venenatis urna cursus.",
    },
  ],
];

function TestimonialsSection() {
  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It&apos;s not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here&apos;s what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
                <li key={testimonial.id} className="text-sm leading-6">
                  <div className="relative group">
                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                    <a href="#" className="cursor-pointer">
                      <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={testimonial.image}
                            className="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt={testimonial.name}
                            width={12}
                            height={12}
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
                        <p className="leading-normal text-gray-300 text-md">
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
    </section>
  );
}

export default TestimonialsSection;
