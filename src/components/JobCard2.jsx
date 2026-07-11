import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IoSendSharp } from "react-icons/io5";


export default function JobCard2({ job,onDetailsClick }) {
  const [showOptions, setShowOptions] = useState(false);



  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSaveJob = () => {
    console.log("Job saved:", id);
    setShowOptions(false);
  };

  const handleReportJob = () => {
    console.log("Job reported:", id);
    setShowOptions(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 w-[100%]  rounded-lg shadow-lg border border-gray-300  hover:shadow-xl transition-shadow relative"
    >
      {/* Three dots menu */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleOptions}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Job options"
        >
          <FiMoreVertical size={20} />
        </button>
        
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 pt-2 pb-2  w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200"
          >
            <div className="py-1">
              <button
                onClick={handleSaveJob}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Save Job
              </button>
              <button
                onClick={handleReportJob}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Report Job
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {job?.isNew && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full"
        >
          ⭐ New Job
        </motion.span>
      )}

      <h2 className="text-lg font-bold mt-2">{job?.title}</h2>
      <p className="text-sm text-gray-500 font-semibold">{job?.company}</p>

      <p className="text-sm text-gray-500 mt-2">
        <span className="font-semibold">{job?.city}{job?.location && `, ${job?.location}`}</span>
      </p>
      <p className="text-sm text-gray-700 font-bold">{job?.salary}</p>

      {/* Job Type */}
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-bold">{job?.type === "full-time" ? "Full-Time" : "Part-Time"}</span>
      </p>
      <div className="flex gap-1 items-center">
<IoSendSharp className="text-xl text-blue-700" />

        <p className="text-sm text-gray-600 mt-2  font-bold">Easy Apply</p>
      </div>

      {/* Job Description */}
      <p className="text-gray-600 mt-4 text-sm font-medium line-clamp-3">
        {job?.description}
      </p>

      {/* Job Requirements */}
      {job?.requirements.length > 0 && (
        <ul className="text-gray-600 mt-4 text-sm list-disc pl-5 font-medium">
          {job.requirements.slice(0, 3).map((req, index) => (
            <motion.li key={index} whileHover={{ scale: 1.05 }} className="line-clamp-1">
              {req}
            </motion.li>
          ))}
        </ul>
      )}

      {/* More link */}
      <div className="mt-4 text-right">
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          onClick={() => onDetailsClick(job)}  // 👈 send selected job
        >
          More...
        </a>
      </div>
    </motion.div>
  );
}