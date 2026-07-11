import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { companies } from '../data';
import { FaMoneyBillWave, FaChartLine, FaBuilding, FaLaptopCode, FaUserTie, FaTimes } from 'react-icons/fa';

const SalaryPage = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showSalaryForm, setShowSalaryForm] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const [salaryForm, setSalaryForm] = useState({
    jobTitle: '',
    salary: '',
    experience: '',
    location: '',
    anonymous: true,
    companyId: companyId
  });

  useEffect(() => {
    const foundCompany = companies.find(c => c.id === parseInt(companyId));
    setCompany(foundCompany);
  }, [companyId]);

  if (!company) {
    return <div className="text-center py-12">Loading company data...</div>;
  }

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSalaryForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmitSalary = (e) => {
    e.preventDefault();
    console.log('Submitted salary:', salaryForm);
    alert('Thank you for contributing! Your salary information has been submitted.');
    setShowSalaryForm(false);
    setSalaryForm({
      jobTitle: '',
      salary: '',
      experience: '',
      location: '',
      anonymous: true,
      companyId: companyId
    });
  };

  const getIconForJob = (jobTitle) => {
    if (jobTitle.toLowerCase().includes('engineer') || jobTitle.toLowerCase().includes('developer')) {
      return <FaLaptopCode className="text-blue-500" />;
    } else if (jobTitle.toLowerCase().includes('manager')) {
      return <FaUserTie className="text-green-500" />;
    }
    return <FaBuilding className="text-purple-500" />;
  };

  const allJobs = [
    ...(company.salaryData.average || []),
    ...(company.salaryData.engineering || []),
    ...(company.salaryData.management || [])
  ];

  const filteredJobs = activeTab === 'all' 
    ? allJobs
    : activeTab === 'engineering'
    ? company.salaryData.engineering || []
    : company.salaryData.management || [];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-12 rounded-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="relative z-10 p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Salary Insights</h1>
          <p className="text-xl md:text-2xl mb-6">Discover compensation at {company.name}</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-sm">Average Monthly Salary</p>
              <p className="text-2xl font-bold">
                {allJobs.length > 0 
                  ? `$${Math.floor(allJobs.reduce((sum, job) => {
                      const salaryNum = parseInt(job.salary.replace(/[^0-9]/g, ''));
                      return sum + (isNaN(salaryNum) ? 0 : salaryNum);
                    }, 0) / allJobs.length).toLocaleString()}`
                  : 'N/A'}
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-sm">Total Reported</p>
              <p className="text-2xl font-bold">
                {allJobs.reduce((sum, job) => {
                  const reports = parseInt(job.reported.replace(/[^0-9]/g, ''));
                  return sum + (isNaN(reports) ? 0 : reports);
                }, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className={`absolute inset-0 flex items-center justify-center ${company.iconBg}`}>
          <span className={`text-6xl font-bold ${company.iconColor}`}>{company.icon}</span>
        </div>
      </motion.section>

      {/* Salary Filter Tabs */}
      <div className="flex space-x-3 mb-8 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg font-medium shadow-sm whitespace-nowrap ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
        >
          All Roles
        </button>
        {company.salaryData.engineering && (
          <button 
            onClick={() => setActiveTab('engineering')}
            className={`px-4 py-2 rounded-lg font-medium shadow-sm whitespace-nowrap ${activeTab === 'engineering' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
          >
            Engineering
          </button>
        )}
        {company.salaryData.management && (
          <button 
            onClick={() => setActiveTab('management')}
            className={`px-4 py-2 rounded-lg font-medium shadow-sm whitespace-nowrap ${activeTab === 'management' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
          >
            Management
          </button>
        )}
      </div>

      {/* Salary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
                {getIconForJob(job.title)}
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-600 text-sm font-medium rounded-full">
                {job.reported}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
            <p className="text-gray-600 mb-2">Monthly salary</p>
            <p className="text-2xl font-bold text-blue-600">{job.salary}</p>
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
              <span className="text-sm text-gray-500">{job.experience}</span>
              <button 
                onClick={() => handleViewDetails(job)}
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                View details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Salary CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mb-16 rounded-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90"></div>
        <div className="relative z-10 p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Help us improve salary transparency</h2>
            <p className="text-lg mb-6">
              Share your salary anonymously and help others make better career decisions.
            </p>
            <button 
              onClick={() => setShowSalaryForm(true)}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition"
            >
              Add Your Salary Now
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </motion.div>

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedJob.title}</h3>
                    <p className="text-gray-600">{company.name}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Salary</p>
                    <p className="text-3xl font-bold text-blue-600">{selectedJob.salary}</p>
                  </div>
                  <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedJob.reported}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Job Description</h4>
                    <p className="text-gray-600">{selectedJob.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Experience Required</h4>
                    <p className="text-gray-600">{selectedJob.experience}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                    <p className="text-gray-600">{selectedJob.benefits}</p>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedJob(null);
                      setShowSalaryForm(true);
                    }}
                    className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Contribute Salary Data
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Salary Form Modal */}
      <AnimatePresence>
        {showSalaryForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowSalaryForm(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Add Your Salary</h3>
                    <p className="text-gray-600">{company.name}</p>
                  </div>
                  <button 
                    onClick={() => setShowSalaryForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>

                <form onSubmit={handleSubmitSalary}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={salaryForm.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Salary</label>
                      <input
                        type="text"
                        name="salary"
                        value={salaryForm.salary}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <input
                        type="text"
                        name="experience"
                        value={salaryForm.experience}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={salaryForm.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="anonymous"
                        id="anonymous"
                        checked={salaryForm.anonymous}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                        Submit anonymously
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                      Submit Salary
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SalaryPage;