import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import jobs from "./JobList"; // Import job listings

export default function JobDetails() {
  const { jobId } = useParams();
  const job = jobs.find((j) => j.id === parseInt(jobId));

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 w-1/2 h-full bg-gray-100 p-6 shadow-lg overflow-y-auto"
    >
      <h2 className="text-xl font-bold text-blue-600">{job.title}</h2>
      <p className="text-gray-500 text-sm">{job.company} - {job.city}, {job.location}</p>

      <p className="text-gray-700 mt-4">{job.fullDetails}</p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-4 bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-600"
        onClick={() => window.history.back()}
      >
        Close Details
      </motion.button>
    </motion.div>
  );
}
