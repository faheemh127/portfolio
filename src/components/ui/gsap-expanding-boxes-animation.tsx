"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ExpandingBoxesProps {
  images: string[];
}

const ExpandingBoxes: React.FC<ExpandingBoxesProps> = ({ images }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || isMobile) return;

    gsap.set(boxRefs.current[0], { x: 0, y: 0, scale: 1 });
    gsap.set(boxRefs.current[1], { x: 0, y: 0, scale: 1 });
    gsap.set(boxRefs.current[2], { x: 0, y: 0, scale: 1 });
    gsap.set(boxRefs.current[3], { x: 0, y: 0, scale: 1 });
    gsap.set(boxRefs.current[4], { x: 0, y: 0, scale: 1 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 10%",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    timeline
      .to(boxRefs.current[0], { x: -450, y: 130, scale: 1 }, 0)
      .to(boxRefs.current[1], { x: -230, y: 80, scale: 1 }, 0)
      .to(boxRefs.current[2], { x: 0, y: 0, scale: 1 }, 0)
      .to(boxRefs.current[3], { x: 230, y: 80, scale: 1 }, 0)
      .to(boxRefs.current[4], { x: 450, y: 130, scale: 1 }, 0);

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="w-[90vw] mx-auto">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000, // 1 second auto slide
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-3/4 sm:w-1/2">
              <Image
                src={image}
                alt={`Web design ${index + 1}`}
                className="w-full object-cover shadow-lg shadow-lg transform will-change-transform w-full max-w-[455px] [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border"
                width={500}
                height={500}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="h-[50rem] w-full flex items-center justify-center relative"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="relative w-full h-full flex items-center justify-center pt-6">
        {images.slice(0, 5).map((image, index) => (
          <div
            key={index}
            ref={(el) => {
              boxRefs.current[index] = el;
            }}
            className="absolute w-[25%] shadow-lg transform will-change-transform w-full max-w-[455px] [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border"
            style={{
              zIndex: index === 2 ? 30 : index === 1 || index === 3 ? 20 : 10,
              animationDelay: `${index * 0.5}s`, // Delay increases for each box (border animation)
            }}
          >
            <ChevronUp
              className="lucide lucide-chevron-up absolute -left-[6px] -top-[6px] translate-x-[-13px] translate-y-[-13px] -rotate-45 text-indigo-700"
              size={40}
            />
            <ChevronUp
              className="lucide lucide-chevron-up absolute -right-[6px] -top-[6px]  translate-x-[13px] translate-y-[-13px] rotate-45 text-indigo-700"
              size={40}
            />
            <Image
              src={image}
              alt={`Web design ${index + 1}`}
              className="w-full object-cover"
              width={500}
              height={500}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
              {/* Design {index + 1} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingBoxes;
