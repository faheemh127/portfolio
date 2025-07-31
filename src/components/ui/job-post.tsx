"use client";
import React from "react";

const JobPost = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14 bg-white rounded-xl shadow-md mt-10 border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        📢 We&#39;re Hiring – Data Entry Operator
      </h1>

      <p className="mb-3 text-gray-700">
        We are looking to hire a <strong>Male or Female</strong> Data Entry
        Operator for an on-site position.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <strong>Salary:</strong> PKR 18,000 – 22,000
        </li>
        <li>
          <strong>Timings:</strong> 9:00 AM – 5:00 PM (Monday to Saturday)
        </li>
        <li>
          <strong>Saturday:</strong> May be a half-day
        </li>
        <li>
          <strong>Job Duration:</strong> 3 to 5 Months Contract
        </li>
        <li>
          <strong>Qualification Required:</strong> Minimum 12th Grade /
          Intermediate
        </li>
        <li>
          <strong>Job Nature:</strong> On-Site
        </li>
        <li>
          <strong>Location:</strong> D-Ground Near Kohinoor Plaza, Faisalabad,
          Pakistan
        </li>
        <li>
          <strong>Job Role:</strong> Entering data into a custom software being
          developed
        </li>
      </ul>

      <p className="text-gray-800 font-medium mb-4">
        📄 If you&#39;re interested and meet the criteria, please send your CV now!
      </p>

      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Contact Number:</strong>{" "}
          <a href="tel:03068493810" className="text-indigo-700 hover:underline">
            0306 8493810
          </a>
        </p>
        <p className="text-gray-700">
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/923068493810"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Chat on WhatsApp
          </a>
        </p>
      </div>

      <div className="text-center mt-6">
        <a
          href="https://wa.me/923068493810"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-700 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition"
        >
          📩 Send Your CV Now
        </a>
      </div>
    </div>
  );
};

export default JobPost;
