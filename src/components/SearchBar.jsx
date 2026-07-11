import React from "react";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = ({ jobs, setFilteredJobs }) => {
  const [jobQuery, setJobQuery] = React.useState("");
  const [locationQuery, setLocationQuery] = React.useState("");
  const [showJobs, setShowJobs] = React.useState(false);
  const [showLocations, setShowLocations] = React.useState(false);

  const suggestedJobs = [...new Set(
    jobs
      .map(job => job?.title)
      .filter(title =>
        title && title.toLowerCase().includes(jobQuery.toLowerCase())
      )
  )].slice(0, 3);

  const locations = [...new Set(
    jobs
      .map(job => job?.city)
      .filter(city =>
        city && city.toLowerCase().includes(locationQuery.toLowerCase())
      )
  )].slice(0, 3);

  const handleSearch = () => {
    if (!jobQuery && !locationQuery) {
      setFilteredJobs(jobs);
      return;
    }

    const filtered = jobs.filter(job => {
      const matchesJob = jobQuery
        ? job.title?.toLowerCase().includes(jobQuery.toLowerCase()) ||
          job.description?.toLowerCase().includes(jobQuery.toLowerCase()) ||
          job.company?.toLowerCase().includes(jobQuery.toLowerCase())
        : true;

      const matchesLocation = locationQuery
        ? job.city?.toLowerCase().includes(locationQuery.toLowerCase()) ||
          job.country?.toLowerCase().includes(locationQuery.toLowerCase())
        : true;

      return matchesJob && matchesLocation;
    });

    setFilteredJobs(filtered);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => handleSearch(), 300);
    return () => clearTimeout(timer);
  }, [jobQuery, locationQuery]);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-blue-200">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        
        {/* Job Input */}
        <div className="flex-1 relative">
          <input
            className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none transition duration-150 shadow-sm"
            placeholder="Job title, keywords, or company"
            value={jobQuery}
            onFocus={() => setShowJobs(true)}
            onBlur={() => setTimeout(() => setShowJobs(false), 200)}
            onChange={(e) => setJobQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />

          <AnimatePresence>
            {showJobs && suggestedJobs.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute top-full left-0 w-full bg-white border border-blue-200 rounded-lg mt-1 shadow z-10"
              >
                {suggestedJobs.map((job, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setJobQuery(job);
                      setShowJobs(false);
                    }}
                  >
                    {job}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Location Input */}
        <div className="flex-1 relative">
          <div className="flex items-center border border-blue-200 rounded-lg px-4 py-3 bg-white transition duration-150 shadow-sm">
            <MapPin className="text-blue-400 mr-2" size={18} />
            <input
              className="w-full outline-none bg-transparent"
              placeholder="City or Location"
              value={locationQuery}
              onFocus={() => setShowLocations(true)}
              onBlur={() => setTimeout(() => setShowLocations(false), 200)}
              onChange={(e) => setLocationQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>

          <AnimatePresence>
            {showLocations && locations.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute top-full left-0 w-full bg-white border border-blue-200 rounded-lg mt-1 shadow z-10"
              >
                {locations.map((loc, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setLocationQuery(loc);
                      setShowLocations(false);
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full md:w-auto h-12 px-6 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 shadow transition duration-200"
        >
          Find Jobs
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
