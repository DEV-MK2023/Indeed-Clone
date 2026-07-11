import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaExternalLinkAlt, FaRegBookmark, FaBookmark, FaLink } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import ApplyModal from "./ApplyModal";

const JobDetailsPage = ({ jobs }) => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (jobs && jobs.length) {
      const foundJob = jobs.find((j) => j.id === parseInt(jobId));
      setJob(foundJob);
    }
  }, [jobId, jobs]);

  useEffect(() => {
    if (job) {
      const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
      const found = stored.some((j) => j.id === job.id);
      setIsSaved(found);
    }
  }, [job]);

  const handleSave = () => {
    if (!job) return;
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Job link copied!");
  };

  if (!job) return <p className="text-center py-8 text-gray-600">Job not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-8 bg-gray-50 rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold flex items-center gap-1 hover:underline"
            >
              {job.company} <FaExternalLinkAlt className="w-4 h-4" />
            </a>
            <span className="flex items-center text-gray-700 gap-1">
              · 3.8 <FaStar className="text-yellow-400 w-4 h-4" />
            </span>
            <span className="text-gray-600">· {job.city}, {job.location}</span>
          </div>
          <span className="block text-2xl font-bold text-gray-900 mt-2">{job.salary}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-3 md:mt-0">
          <button
            onClick={handleSave}
            className="p-3 rounded-lg border hover:bg-gray-100 transition"
            title={isSaved ? "Unsave Job" : "Save Job"}
          >
            {isSaved ? <FaBookmark className="text-blue-600 w-5 h-5" /> : <FaRegBookmark className="text-gray-600 w-5 h-5" />}
          </button>
          <button
            onClick={handleCopyLink}
            className="p-3 rounded-lg border hover:bg-gray-100 transition"
            title="Copy Job Link"
          >
            <FaLink className="text-gray-600 w-5 h-5" />
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            Apply Now <FaExternalLinkAlt className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showModal && <ApplyModal job={job} onClose={() => setShowModal(false)} />}

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-lg mb-2">Job Details</h2>
          <div className="flex items-center gap-4 mt-2">
            <BsCashStack className="text-gray-600 w-6 h-6" />
            <div>
              <span className="block font-semibold">Pay</span>
              <span className="block bg-gray-100 px-2 py-1 rounded text-sm font-bold">{job.salaryRs}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <BsCashStack className="text-gray-600 w-6 h-6" />
            <div>
              <span className="block font-semibold">Job Type</span>
              <span className="block bg-gray-100 px-2 py-1 rounded text-sm font-bold">{job.type}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-lg mb-2">Location</h2>
          <div className="flex items-center gap-4 mt-2">
            <IoLocationSharp className="text-gray-600 w-6 h-6" />
            <span className="font-semibold">{job.city}, {job.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
        <h2 className="font-bold text-xl mb-4">Job Description</h2>
        <p className="text-gray-700">{job.description || "No job description available."}</p>

        <h3 className="font-bold text-lg mt-6">Key Responsibilities</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          {job.requirements?.map((req, i) => <li key={i}>{req}</li>) || <li>No specific requirements listed.</li>}
        </ul>
      </div>
    </div>
  );
};

export default JobDetailsPage;
