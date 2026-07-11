import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegBookmark, FaLink } from "react-icons/fa";
import ApplyModal from "./ApplyModal";

export default function JobCard({ job, onDetailsClick, onSaveJob, onShareJob, loggedInUser }) {
  const [showModal, setShowModal] = useState(false);

  // ✅ Apply click
  const handleApply = () => {
    if (!loggedInUser) {
      alert("⚠️ Please login/register to apply for jobs!");
      window.location.href = "/login";
      return;
    }
    setShowModal(true);
  };

  // ✅ Save click
  const handleSave = () => {
    if (!loggedInUser) {
      alert("⚠️ Please login/register to save jobs!");
      window.location.href = "/login";
      return;
    }
    if (onSaveJob) {
      onSaveJob(job);
    } else {
      const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
      const exists = stored.some((j) => j.id === job.id);
      if (!exists) {
        stored.push(job);
        localStorage.setItem("savedJobs", JSON.stringify(stored));
        alert("Job saved ✅");
      } else {
        alert("Already saved ⚠️");
      }
    }
  };

  // ✅ Share / copy link
  const handleShare = () => {
    if (onShareJob) {
      onShareJob(job);
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/job-details/${job.id}`);
      alert("Job link copied 📋");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-3xl shadow-lg border border-blue-200 hover:shadow-xl transition-shadow mb-6"
    >
      {job?.isNew && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block"
        >
          ⭐ New Job
        </motion.span>
      )}

      <h2 className="text-xl font-bold mt-3 text-gray-900">{job?.title}</h2>
      <p className="text-sm text-blue-700 font-semibold">{job?.company}</p>
      <p className="text-sm text-gray-600 mt-1">
        <span className="font-medium">{job?.city}, {job?.location}</span>
      </p>
      <p className="text-sm text-gray-800 font-bold mt-1">{job?.salary}</p>
      <p className="text-sm text-blue-600 font-semibold mt-1">
        {job?.type === "full-time" ? "Full-Time" : "Part-Time"}
      </p>
      <p className="text-gray-700 mt-3 text-sm font-medium line-clamp-2">{job?.description}</p>

      <ul className="text-gray-700 mt-3 text-sm list-disc pl-5 font-medium">
        {job?.requirements?.slice(0, 2).map((req, index) => (
          <motion.li key={index} whileHover={{ scale: 1.05 }} className="line-clamp-1">
            {req}
          </motion.li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-between items-center mt-6 gap-3">
        {/* Apply */}
        <motion.button
          whileHover={{ scale: loggedInUser ? 1.05 : 1 }}
          whileTap={{ scale: loggedInUser ? 0.95 : 1 }}
          className={`font-bold px-5 py-2 rounded-xl text-sm shadow-md ${
            loggedInUser
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleApply}
          disabled={!loggedInUser}
        >
          Apply Now
        </motion.button>

        {/* Details */}
        <motion.button
          onClick={() => onDetailsClick(job)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-xl hover:bg-blue-200 text-sm shadow-sm"
        >
          Job Details
        </motion.button>

        {/* Save */}
        <motion.button
          whileHover={{ scale: loggedInUser ? 1.1 : 1 }}
          whileTap={{ scale: loggedInUser ? 0.9 : 1 }}
          onClick={handleSave}
          className={`p-2 rounded-lg border border-blue-300 ${
            loggedInUser
              ? "hover:bg-blue-50 cursor-pointer"
              : "bg-gray-100 cursor-not-allowed"
          }`}
          aria-label="Save Job"
          disabled={!loggedInUser}
        >
          <FaRegBookmark className="w-5 h-5 text-blue-600" />
        </motion.button>

        {/* Share */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShare}
          className="p-2 rounded-lg border border-blue-300 hover:bg-blue-50"
          aria-label="Copy Link"
        >
          <FaLink className="w-5 h-5 text-blue-600" />
        </motion.button>
      </div>

      {showModal && <ApplyModal job={job} onClose={() => setShowModal(false)} />}
    </motion.div>
  );
}
