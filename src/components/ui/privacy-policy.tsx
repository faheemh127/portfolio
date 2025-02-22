import React from "react";
import { config } from "@/lib/config";


const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-gray-300 bg-slate-900 py-[10rem] max-w-7xl">
      <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="mb-4 text-gray-400">Last updated: 22 Feb,2025</p>

      <h2 className="text-2xl font-semibold text-white mt-6">1. Introduction</h2>
      <p className="mb-4 text-gray-400">
        Welcome to <span className="text-blue-400">{config.siteName}</span>! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website 
        <a href={config.siteUrl} className="text-blue-500 hover:underline"> {config.siteUrl}</a>.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6">2. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-400">
        <li><span className="text-blue-400 font-semibold">Personal Data:</span> Name, email address, phone number, etc.</li>
        <li><span className="text-blue-400 font-semibold">Usage Data:</span> Information about your interactions with our website.</li>
        <li><span className="text-blue-400 font-semibold">Cookies & Tracking:</span> We use cookies to enhance user experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-6">3. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-400">
        <li>To provide and maintain our services.</li>
        <li>To improve website performance and user experience.</li>
        <li>To send marketing emails (if consented).</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-6">4. Data Protection & Security</h2>
      <p className="mb-4 text-gray-400">
        We implement industry-standard security measures to protect your data.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6">5. Third-Party Services</h2>
      <p className="mb-4 text-gray-400">
        We may use third-party services (e.g., analytics tools, payment gateways) that collect and process user data under their respective privacy policies.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6">6. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-400">
        <li><span className="text-blue-400 font-semibold">Access:</span> Request a copy of the data we hold about you.</li>
        <li><span className="text-blue-400 font-semibold">Correction:</span> Request to update inaccurate information.</li>
        <li><span className="text-blue-400 font-semibold">Deletion:</span> Request deletion of your personal data.</li>
        <li><span className="text-blue-400 font-semibold">Opt-out:</span> You can opt-out of marketing emails at any time.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-6">7. Changes to This Policy</h2>
      <p className="mb-4 text-gray-400">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6">8. Contact Us</h2>
      <p className="mb-4 text-gray-400">
        If you have any questions about this policy, please contact us at 
        <a href={`mailto:${config.contactEmail}`} className="text-blue-500 hover:underline"> {config.contactEmail}</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
