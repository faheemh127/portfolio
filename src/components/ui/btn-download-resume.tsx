import React from "react";
import Link from "next/link";
import { FileUser } from "lucide-react";
function BtnDownloadResume() {
  return (
    <>
      <Link href="/pdf/FaheemHassanResume.pdf">
        <button
          type="button"
          className="w-[150px] md:w-auto md:min-w-[180px] text-gray-900 bg-stone-200 hover:bg-stone-200/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-sm md:text-lg px-4 md:px-5 py-2 md:py-3 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 border border-solid border-gray-600 justify-center gap-1"
        >
          <FileUser size={20} />
          <span className="hidden md:inline-block">Download</span>
          <span>Resume</span>
           
        </button>
      </Link>
    </>
  );
}

export default BtnDownloadResume;
