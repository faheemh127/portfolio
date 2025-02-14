"use client";
import { Computer } from "lucide-react";
import { useRef, useEffect } from "react";
export const HeroBoxes: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
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
      className="flex h-[auto] w-full md:w-1/5 items-center justify-center rounded-lg border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)] py-4"
    >
      <div className="flex items-center">
        <div
          className="icon"
          style={{
            paddingRight: "20px",
          }}
        >
          <Computer className="text-white" size={28} />
        </div>
        <div
          style={{
            borderLeft: "1px solid white",
            paddingRight: "20px",
          }}
          className="flex flex-col text-left pl-4"
        >
          <h3 className="text-stone-200 text-3xl">{children}</h3>
          <p className="text-stone-300">Trusted Clients</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBoxes;
