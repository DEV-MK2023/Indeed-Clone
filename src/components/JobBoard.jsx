import React, { useState } from "react";
import { filterJobs } from "../filterJobs";
import SearchBar from "./SearchBar";
import JobFilterRow from "./JobFilterRow";
import { jobs } from "../data"; // tumhari job array

const JobBoard = () => {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    salary: null,
    distance: null,
    company: null,
    jobType: null,
    jobLanguage: null,
    location: null,
    datePosted: null,
  });

  const filteredJobs = filterJobs(jobs, {
    jobQuery,
    locationQuery,
    filters: selectedOptions,
  });

  return (
    <div>
      <SearchBar
        jobQuery={jobQuery}
        setJobQuery={setJobQuery}
        locationQuery={locationQuery}
        setLocationQuery={setLocationQuery}
      />

      <JobFilterRow
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />

      <div className="px-6 pt-2">
        {filteredJobs.length ? (
          filteredJobs.map((job, idx) => (
            <div key={idx} className="border rounded-md p-4 my-2 shadow-sm">
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p>{job.company} — {job.city}</p>
              <p>{job.salaryRs || job.salary}</p>
              <p>{job.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">No matching jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
