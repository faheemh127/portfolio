import React from "react";
import { config } from "@/lib/config";

const TermsOfService: React.FC = () => {
  return (
    <div className="w-screen bg-slate-900">
      <div className="container mx-auto p-6 text-gray-300 bg-slate-900 py-[10rem] max-w-7xl">
        <h1 className="text-3xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="mb-4 text-gray-400">Last updated: 22 Feb, 2025</p>

        <h2 className="text-2xl font-semibold text-white mt-6">
          1. Introduction
        </h2>
        <p className="mb-4 text-gray-400">
          Welcome to <span className="text-blue-400">{config.siteName}</span>!
          These Terms of Service govern your use of my personal portfolio
          website located at{" "}
          <a href={config.siteUrl} className="text-blue-500 hover:underline">
            {config.siteUrl}
          </a>
          . By accessing or using the Site, you agree to be bound by these
          Terms.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">
          2. Intellectual Property
        </h2>
        <p className="mb-4 text-gray-400">
          All content on this Site, including but not limited to code examples,
          project designs, articles, and graphics, is the exclusive property of
          Faheem Hassan unless otherwise stated. You may not reproduce,
          distribute, or modify any content without explicit written permission.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">
          3. User Responsibilities
        </h2>
        <ul className="list-disc ml-6 mb-4 text-gray-400">
          <li>Use the Site only for lawful purposes</li>
          <li>Do not attempt to disrupt or compromise Site security</li>
          <li>Do not use automated systems to access the Site</li>
          <li>Any form of spam or unauthorized communication is prohibited</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6">
          4. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-400">
          The information on this Site is provided as is without warranties of
          completeness, accuracy, or reliability. As a freelance developer, I
          reserve the right to modify or remove content at any time without
          notice.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">
          5. Governing Law
        </h2>
        <p className="mb-4 text-gray-400">
          These Terms shall be governed by and construed in accordance with the
          laws of Pakistan. Any disputes relating to these Terms will be subject
          to the exclusive jurisdiction of the courts of Pakistan.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">
          6. Changes to Terms
        </h2>
        <p className="mb-4 text-gray-400">
          I may revise these Terms at any time by updating this page. You should
          check this page periodically to ensure you agree with any changes.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">
          7. Contact Information
        </h2>
        <p className="mb-4 text-gray-400">
          For any questions regarding these Terms, please contact me at
          <a
            href={`mailto:${config.contactEmail}`}
            className="text-blue-500 hover:underline"
          >
            {" "}
            {config.contactEmail}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
