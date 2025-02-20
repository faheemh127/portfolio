import { PhoneCall } from "lucide-react";
const BookACall = () => {
  return (
    <div className="shadow-[2px_3px_50px_theme(colors.indigo.700) w-[40%] md:w-auto h-[50px]">
      <button className="group relative grid overflow-hidden rounded-md px-5 md:px-7 py-3 md:py-3 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 w-full h-full">
        <span>
          <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-[1px] rounded-md bg-indigo-600 transition-colors duration-200 group-hover:bg-indigo-700 " />
        <span className="text z-10 text-stone-100 text-base md:text-lg flex gap-2 items-center">
          <PhoneCall size={15} />
          <span className="text-stone-200 text-base">Book a call</span>
        </span>
      </button>
    </div>
  );
};
export default BookACall;
