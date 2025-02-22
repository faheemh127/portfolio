import React from "react";
import Navbar from "@/components/sections/navbar/default";
import PrivacyPolicy from "@/components/ui/privacy-policy";
import FooterSection from "@/components/sections/footer/default";

function page() {
  return (
    <>
      <div className="bg-slate-900">
        <Navbar />
        <PrivacyPolicy />
        <FooterSection />
      </div>
    </>
  );
}

export default page;
