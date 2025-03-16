import React from "react";
// import ExpandingBoxes from './ExpandingBoxes';
import ExpandingBoxes from "./gsap-expanding-boxes-animation";

const WebDesignSection: React.FC = () => {
  // Sample images - replace with your actual web design images
  const webDesignImages = [
    "/img/landing-page-5.jpg",
    "/img/landing-page-003.png",
    "/img/landing-page-002.png",
    "/img/landing-page-001.png",
    "/img/landing-page-5.jpg",
  ];

  return (
    <section className="bg-slate-900 h-auto md:h-full w-full bg-stone-950 min-h-auto md:min-h-screen">
      <div className="h-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.15)_1px,transparent_1px)] bg-[size:35px_35px]">
        <div className="mx-auto h-full w-full bg-stone-950 md:min-h-screen pb-10">
          {/* <h2 className="text-3xl font-bold text-center mb-1 text-white">
          Our Web Design Portfolio
        </h2> */}
          <div className="h-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(79,79,79,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,79,79,0.15)_1px,transparent_1px)] bg-[size:35px_35px]">
            <ExpandingBoxes images={webDesignImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;
