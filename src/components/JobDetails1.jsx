import { useState, useEffect } from "react";
import {
  FaStar,
  FaExternalLinkAlt,
  FaRegBookmark,
  FaBookmark,
  FaLink,
} from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import ApplyModal from "./ApplyModal"; 
import { useNavigate } from "react-router-dom";

const JobDetails1 = ({ job, onClose, loggedInUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  if (!job) return null;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const found = stored.some((j) => j.id === job.id);
    setIsSaved(found);
  }, [job, loggedInUser]);

  const handleSave = () => {
    if (!loggedInUser) {
      alert("⚠️ Please login/register to save jobs!");
      navigate("/login");
      return;
    }
    const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
    if (isSaved) {
      const updated = stored.filter((j) => j.id !== job.id);
      localStorage.setItem("savedJobs", JSON.stringify(updated));
      setIsSaved(false);
    } else {
      localStorage.setItem("savedJobs", JSON.stringify([...stored, job]));
      setIsSaved(true);
    }
  };

  const handleApply = () => {
    if (!loggedInUser) {
      alert("⚠️ Please login/register to apply for jobs!");
      navigate("/login");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="w-full sticky top-0 self-start h-[100vh] bg-white p-8 rounded-3xl shadow-lg border border-blue-200 md:flex flex-col overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold md:hidden"
        aria-label="Close"
      >
        ×
      </button>

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{job.title}</h2>
          <div className="flex items-center gap-2 text-base text-gray-900 mt-2">
            <a
              href="#"
              className="hover:underline flex items-center gap-1 text-blue-700 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {job.company} <FaExternalLinkAlt className="w-3 h-3" />
            </a>
            <span className="text-gray-700 flex items-center gap-1 ml-2">
              · {job.rating || 3.8} <FaStar className="text-yellow-500 w-4 h-4" />
            </span>
          </div>
          <p className="text-gray-600 text-base mt-1">
            {job.city}, {job.location}
          </p>
          <span className="text-xl block mt-2 font-bold text-gray-700">{job.salary}</span>
        </div>

        <button
          onClick={onClose}
          className="hidden md:block text-gray-400 hover:text-red-500 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 pt-5 pb-6 flex-wrap">
        <button
          onClick={handleApply}
          className={`text-base font-bold py-2 px-5 rounded-xl flex items-center gap-2 shadow-md ${
            loggedInUser
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Apply Now <FaExternalLinkAlt className="w-3 h-3" />
        </button>

        <button
          onClick={handleSave}
          className={`p-2 rounded-lg border border-blue-300 ${
            loggedInUser
              ? "hover:bg-blue-50 cursor-pointer"
              : "bg-gray-100 cursor-not-allowed"
          }`}
          aria-label="Bookmark"
        >
          {isSaved ? (
            <FaBookmark className="w-5 h-5 text-blue-600" />
          ) : (
            <FaRegBookmark className="w-5 h-5 text-gray-600" />
          )}
        </button>

        <button
          className="p-2 rounded-lg border border-blue-300 hover:bg-blue-50"
          aria-label="Copy Link"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("Job link copied!");
          }}
        >
          <FaLink className="w-5 h-5 text-blue-600" />
        </button>
      </div>

      {showModal && <ApplyModal job={job} onClose={() => setShowModal(false)} />}

      <hr className="border-blue-200 my-4" />

      <div className="flex flex-col gap-7 overflow-y-auto thin-scroll pr-2 flex-grow">
        <div className="pt-5">
          <h1 className="font-bold text-lg text-blue-800">Job Details</h1>
          <div className="flex gap-4 pt-6">
            <BsCashStack className="text-blue-600 h-6" />
            <div className="flex flex-col gap-2">
              <span className="font-bold text-gray-700">Pay</span>
              <span className="bg-blue-50 p-1 rounded-md text-sm font-bold">{job.salary}</span>
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <BsCashStack className="text-blue-600 h-6" />
            <div className="flex flex-col gap-2">
              <span className="font-bold text-gray-700">Job Type</span>
              <span className="bg-blue-50 p-1 rounded-md text-sm font-bold">{job.type}</span>
            </div>
          </div>
        </div>

        <hr className="border-blue-200" />

        <div>
          <h1 className="font-bold text-lg text-blue-800">Location</h1>
          <div className="flex gap-4 pt-6">
            <IoLocationSharp className="text-blue-600 h-6" />
            <span className="font-bold text-gray-700">{job.city}</span>
          </div>
        </div>

        <hr className="border-blue-200" />

        <div>
          <h1 className="font-bold text-lg text-blue-800">Full Job Description</h1>
          <div className="flex flex-col gap-4 pt-6">
            <h2 className="font-bold text-gray-700">Job Summary:</h2>
            <p className="text-sm text-gray-700">{job.description || "No job description available."}</p>

            <h2 className="font-bold text-gray-700">Key Responsibilities:</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {job.requirements?.map((req, i) => (
                <li key={i}>{req}</li>
              )) || <li>No specific requirements listed.</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails1;
