"use client";
import { Computer } from "lucide-react";
import { useRef, useEffect } from "react";
export const HeroBoxes: React.FC<{
  children: React.ReactNode;
}> = ({ children, subText, icon }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      // style={
      //   {
      //     "--angle": "10deg",
      //     "--border-color":
      //       "linear-gradient(var(--angle),#6366F1,#1E293B)",
      //     "--bg-color": "linear-gradient(#1E293B,#1E293B",
      //   } as CSSProperties
      // }
      className="flex h-[auto] w-full md:w-1/4 items-center justify-center rounded-lg border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)] py-4 border border-indigo-600 bg-dark"
      style={{
        backgroundColor: "rgb(79, 70, 229,0.1)",
      }}
    >
      <div className="flex items-center w-full">
        <div
          className="icon border-r-2 border-indigo-500 px-6"
        >
          {icon}
          
        </div>
        <div className="flex flex-col text-left pl-4">
          <h3 className="text-indigo-100 text-3xl font-bold">{children}</h3>
          <p className="text-stone-300">{subText}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBoxes;
