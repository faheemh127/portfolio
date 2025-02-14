import React from "react";
import { Button } from "./button";
import { CloudDownload } from "lucide-react";

function BtnDownloadResume() {
  return (
    <Button className="bg-transparent border border-stone-200 px-3 md:px-5 py-3 md:py-6 hover:bg-slate-900 flex gap-2 text-base md:text-lg">
      <CloudDownload size={20} />
      <a href="/pdf/FaheemHassanResume.pdf" className="text-stone-200">Resume</a>
    </Button>
  );
}

export default BtnDownloadResume;
