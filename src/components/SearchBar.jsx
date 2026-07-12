import React from "react";
import { Search, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = ({ jobs, setFilteredJobs }) => {
  const [jobQuery, setJobQuery] = React.useState("");
  const [locationQuery, setLocationQuery] = React.useState("");
  const [showJobs, setShowJobs] = React.useState(false);
  const [showLocations, setShowLocations] = React.useState(false);

  const suggestedJobs = [
    ...new Set(
      jobs
        .map((job) => job?.title)
        .filter(
          (title) =>
            title &&
            title.toLowerCase().includes(jobQuery.toLowerCase())
        )
    ),
  ].slice(0, 5);

  const locations = [
    ...new Set(
      jobs
        .map((job) => job?.city)
        .filter(
          (city) =>
            city &&
            city.toLowerCase().includes(locationQuery.toLowerCase())
        )
    ),
  ].slice(0, 5);

  const handleSearch = () => {
    if (!jobQuery && !locationQuery) {
      setFilteredJobs(jobs);
      return;
    }

    const filtered = jobs.filter((job) => {
      const matchesJob = jobQuery
        ? job.title?.toLowerCase().includes(jobQuery.toLowerCase()) ||
          job.company?.toLowerCase().includes(jobQuery.toLowerCase()) ||
          job.description?.toLowerCase().includes(jobQuery.toLowerCase())
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
    const timer = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [jobQuery, locationQuery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mb-8"
    >
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-900">
          Find Your Dream Job
        </h2>

        <p className="text-gray-500 mt-1">
          Search by job title, company or location.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">

        {/* Job Search */}

        <div className="flex-1 relative">

          <div
            className="
            flex
            items-center
            h-14
            px-4
            rounded-xl
            border
            border-gray-300
            bg-white
            shadow-sm
            focus-within:border-blue-500
            focus-within:ring-2
            focus-within:ring-blue-100
            transition
            "
          >
            <Search
              size={19}
              className="text-gray-400 mr-3"
            />

            <input
              type="text"
              placeholder="Search jobs or companies..."
              className="w-full outline-none bg-transparent text-gray-700"
              value={jobQuery}
              onFocus={() => setShowJobs(true)}
              onBlur={() =>
                setTimeout(() => setShowJobs(false), 200)
              }
              onChange={(e) => setJobQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>

          <AnimatePresence>

            {showJobs && suggestedJobs.length > 0 && (

              <motion.ul
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="
                absolute
                top-full
                left-0
                w-full
                mt-2
                bg-white
                rounded-xl
                shadow-xl
                border
                border-gray-200
                overflow-hidden
                z-20
                "
              >

                {suggestedJobs.map((job, index) => (

                  <li
                    key={index}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setJobQuery(job);
                      setShowJobs(false);
                    }}
                    className="
                    px-4
                    py-3
                    cursor-pointer
                    hover:bg-blue-50
                    transition
                    "
                  >
                    {job}
                  </li>

                ))}

              </motion.ul>

            )}

          </AnimatePresence>

        </div>

        {/* Location */}

        <div className="flex-1 relative">

          <div
            className="
            flex
            items-center
            h-14
            px-4
            rounded-xl
            border
            border-gray-300
            bg-white
            shadow-sm
            focus-within:border-blue-500
            focus-within:ring-2
            focus-within:ring-blue-100
            transition
            "
          >
            <MapPin
              size={19}
              className="text-gray-400 mr-3"
            />

            <input
              type="text"
              placeholder="City or Location"
              className="w-full outline-none bg-transparent text-gray-700"
              value={locationQuery}
              onFocus={() => setShowLocations(true)}
              onBlur={() =>
                setTimeout(() => setShowLocations(false), 200)
              }
              onChange={(e) => setLocationQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>

          <AnimatePresence>

            {showLocations && locations.length > 0 && (

              <motion.ul
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="
                absolute
                top-full
                left-0
                w-full
                mt-2
                bg-white
                rounded-xl
                shadow-xl
                border
                border-gray-200
                overflow-hidden
                z-20
                "
              >

                {locations.map((location, index) => (

                  <li
                    key={index}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setLocationQuery(location);
                      setShowLocations(false);
                    }}
                    className="
                    px-4
                    py-3
                    cursor-pointer
                    hover:bg-blue-50
                    transition
                    "
                  >
                    {location}
                  </li>

                ))}

              </motion.ul>

            )}

          </AnimatePresence>

        </div>

        {/* Button */}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleSearch}
          className="
          h-14
          px-8
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-blue-700
          text-white
          font-semibold
          shadow-lg
          hover:shadow-xl
          transition
          "
        >
          Find Jobs
        </motion.button>

      </div>
    </motion.div>
  );
};

export default SearchBar;