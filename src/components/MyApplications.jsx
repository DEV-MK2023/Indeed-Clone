import { useEffect, useState } from "react";
import { FaBuilding, FaEnvelope, FaFileAlt, FaCalendarAlt } from "react-icons/fa";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(stored);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
        <h1 className="text-3xl font-extrabold mb-8 text-blue-900 border-b pb-3">
          My Applications
        </h1>

        {applications.length === 0 ? (
          <p className="text-gray-600 text-center py-8">
            You haven’t applied for any jobs yet. 🚀
          </p>
        ) : (
          <div className="space-y-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-200"
              >
                {/* Left: Logo + Job Info */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-700 font-bold text-xl rounded-full">
                    {app.company?.charAt(0) || "C"}
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl text-blue-900">
                      {app.title}
                    </h2>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <FaBuilding className="text-gray-500" /> {app.company}
                    </p>
                    <p className="text-sm text-gray-700 flex items-center gap-1 mt-2">
                      <FaEnvelope className="text-gray-500" /> {app.email}
                    </p>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-1"
                    >
                      <FaFileAlt className="text-gray-500" /> {app.resume}
                    </a>
                  </div>
                </div>

                {/* Right: Status & Date */}
                <div className="flex flex-col items-end gap-2">
                  <span className="px-4 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    Applied
                  </span>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    <FaCalendarAlt className="text-gray-400" /> {app.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
