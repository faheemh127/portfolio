import React from "react";
import Link from "next/link";
import { Contact } from "lucide-react";

function BtnBookCall() {
  // const whatsappNumber = "923068493810"; // Replace with your actual WhatsApp number
  // const message = encodeURIComponent(
  //   "Hello, I want to discuss a web project. Can you please provide more details?"
  // );
  // const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
  const calDotCom = `https://cal.com/muhammad-faheem-hassan`;

  return (
    <>
      <Link href={calDotCom} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="text-stone-200 bg-indigo-600 hover:bg-indigo-600/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-base md:text-lg  px-3 md:px-5 py-2 md:py-3 inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 border border-solid border-gray-600 w-[150px] md:min-w-[180px] text-center flex justify-center items-center gap-1"
        >
          <Contact size={20} />
          Book Meeting
        </button>
      </Link>
    </>
  );
}

export default BtnBookCall;
