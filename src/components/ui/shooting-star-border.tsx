const ShootingStarBorder = () => {
  return (
    <button className="group relative grid overflow-hidden rounded-md px-10 py-4 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,#9799F4_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-[1px] rounded-md bg-black transition-colors duration-200 group-hover:bg-slate-800" />
      <span className="text z-10 text-[#cbd5e1] text-lg font-bold">Book a call</span>
    </button>
  );
};

export default ShootingStarBorder;
