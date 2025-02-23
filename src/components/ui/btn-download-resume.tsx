import React from "react";
import { Button } from "./button";
import { CloudDownload } from "lucide-react";

function BtnDownloadResume() {
  return (
    <Button className="bg-stone-900 border border-stone-200 px-4 md:px-5 py-5 md:py-6 hover:bg-slate-800 flex gap-2 text-base md:text-lg w-[45%] md:w-auto h-[50px]">
      <CloudDownload size={20} />
      <a href="/pdf/FaheemHassanResume.pdf" className="text-stone-200">Resume</a>
    </Button>
  );
}

export default BtnDownloadResume;
