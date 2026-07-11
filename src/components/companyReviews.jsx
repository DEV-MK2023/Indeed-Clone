import React, { useState, useEffect } from "react";
import { companies } from "../data"; // or fetch from jobs.json
import CompanyCard from "./CompanyCard";

const CompanyReviews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  useEffect(() => {
    const results = companies.filter((company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCompanies(results);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Find great places to work
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Get access to millions of company reviews
        </p>

        {/* Live Search */}
        <div className="mb-8">
          <p className="text-sm font-bold text-gray-700 mb-2">
            Company name
          </p>
          <input
            type="text"
            placeholder="Search companies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6">Popular companies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
            {filteredCompanies.length === 0 && (
              <p className="text-gray-500 col-span-full">
                No companies found.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompanyReviews;
