import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function ApplyModal({ job, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0].name : value, // just store file name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("applications")) || [];
    const newApplication = {
      jobId: job.id,
      title: job.title,
      company: job.company,
      ...formData,
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem("applications", JSON.stringify([...existing, newApplication]));

    alert("Application submitted successfully!");
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-xl w-11/12 max-w-md p-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          aria-label="Close"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Apply for <span className="text-blue-600">{job.title}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block text-sm text-gray-600">
            Upload Resume
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2"
              required
            />
          </label>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default ApplyModal;
