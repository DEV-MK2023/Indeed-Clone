import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JobFilterRow = ({ jobs = [], setFilteredJobs }) => {
  const [selected, setSelected] = useState({
    company: "",
    jobType: "",
    location: "",
    salary: ""
  });

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Memoize filter options
  const filterOptions = useMemo(() => {
    const uniqueCompanies = [...new Set(
      jobs.filter(j => j?.company).map(j => j.company.trim())
    )].sort();
    
    const uniqueLocations = [...new Set(
      jobs.filter(j => j?.city).map(j => j.city.trim())
    )].sort();

    return {
      salary: ["< 200,000 PKR", "200,000 - 500,000 PKR", "> 500,000 PKR"],
      company: uniqueCompanies,
      jobType: ["Full-time", "Part-time", "Contract", "Internship"],
      location: uniqueLocations
    };
  }, [jobs]);

  const handleSelect = (name, value) => {
    const updated = { ...selected, [name]: value };
    setSelected(updated);
    setActiveDropdown(null);

    const filtered = jobs.filter(job => {
      if (!job) return false;
      
      // Salary filter
      const salaryMatch = () => {
        if (!updated.salary) return true;
        
        const salaryStr = (job.salaryRs || job.salary || '').replace(/,/g, '');
        const numbers = salaryStr.match(/\d+/g)?.map(Number) || [];
        
        if (numbers.length === 0) return false;
        
        const minSalary = numbers[0];
        const maxSalary = numbers.length > 1 ? numbers[1] : numbers[0];
        
        switch (updated.salary) {
          case "< 200,000 PKR":
            return maxSalary < 200000;
          case "200,000 - 500,000 PKR":
            return (minSalary >= 200000 && minSalary <= 500000) || 
                   (maxSalary >= 200000 && maxSalary <= 500000) ||
                   (minSalary <= 200000 && maxSalary >= 500000);
          case "> 500,000 PKR":
            return minSalary > 500000;
          default:
            return true;
        }
      };

      // Other filters
      const companyMatch = !updated.company || 
        job.company?.toLowerCase().includes(updated.company.toLowerCase());
      const jobTypeMatch = !updated.jobType || 
        job.type?.toLowerCase() === updated.jobType.toLowerCase();
      const locationMatch = !updated.location || 
        job.city?.toLowerCase().includes(updated.location.toLowerCase());

      return companyMatch && jobTypeMatch && locationMatch && salaryMatch();
    });

    setFilteredJobs(filtered);
  };

  const clearFilters = () => {
    setSelected({
      company: "",
      jobType: "",
      location: "",
      salary: ""
    });
    setFilteredJobs(jobs);
  };

  if (!jobs || jobs.length === 0) return null;

  return (
    <div className="relative mb-4">
      <div className="flex flex-wrap gap-2 items-center p-2 bg-white rounded-lg shadow-xs border border-gray-100">
        {Object.keys(filterOptions).map((filterKey) => (
          <div key={filterKey} className="relative">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleDropdown(filterKey)}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-md ${
                selected[filterKey] 
                  ? "bg-blue-50 text-blue-600 border border-blue-200"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {selected[filterKey] || `All ${filterKey}`}
              <motion.span
                animate={{ rotate: activeDropdown === filterKey ? 180 : 0 }}
                className="text-xs"
              >
                ▼
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {activeDropdown === filterKey && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden"
                >
                  <div className="max-h-60 overflow-y-auto thin-scrollbar">
                    {filterOptions[filterKey].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect(filterKey, option)}
                        className={`block w-full text-left px-3 py-2 text-sm ${
                          selected[filterKey] === option
                            ? "bg-blue-50 text-blue-600"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {Object.values(selected).some(Boolean) && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearFilters}
            className="ml-auto px-2.5 py-1 text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <span>Clear all</span>
            <span>×</span>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default JobFilterRow;