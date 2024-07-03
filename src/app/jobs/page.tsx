"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface JobListing {
  title: string;
  location: string;
  jobType: string;
  workspace: string;
}

const JobPage: React.FC = () => {
  const [jobType, setJobType] = useState('');
  const [workspace, setWorkspace] = useState('');
  const [filteredListings, setFilteredListings] = useState<JobListing[]>([]);

  const jobListings: JobListing[] = [
    { title: 'Solutions Architect', location: 'Eastern Province, Rwanda', jobType: 'Full time', workspace: 'Hybrid' },
    { title: 'IT & Security Lead', location: 'Eastern Province, Rwanda', jobType: 'Full time', workspace: 'Remote' },
    { title: 'Delivery Executives To Work Major Cities of Rwanda', location: 'Kigali, Rwanda', jobType: 'Part time', workspace: 'Site' },
    { title: 'Software Engr. Specialisation Coach (Low Level)', location: 'Kigali, Rwanda', jobType: 'Full time', workspace: 'Remote' },
    { title: 'Junior Software Developer', location: 'Western Province, Rwanda', jobType: 'Full time', workspace: 'Hybrid' },
    { title: 'Data Analyst', location: 'Southern Province, Rwanda', jobType: 'Full time', workspace: 'Site' },
  ];

  const handleSearch = () => {
    const filtered = jobListings.filter((job) => {
      const jobTypeMatch = jobType === 'All' || jobType === '' || job.jobType.toLowerCase() === jobType.toLowerCase();
      const workspaceMatch = workspace === 'All' || workspace === '' || job.workspace.toLowerCase() === workspace.toLowerCase();
      return jobTypeMatch && workspaceMatch;
    });
    setFilteredListings(filtered);
  };

  return (
    <div className="container mx-auto mt-40 px-4">
      <h1 className="text-3xl text-blue-700 font-bold mt-10 text-center">Job Listings</h1>
      <div className="flex justify-center">
        <div className="flex items-center my-4">
          <select
            className="m-4 border-2 rounded p-2"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select Job Type</option>
            <option value="All">All</option>
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
          </select>
          <select
            className="mr-2 rounded p-2"
            value={workspace}
            onChange={(e) => setWorkspace(e.target.value)}
          >
            <option value="">Select workspace</option>
            <option value="All">All</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="Site">Site</option>
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handleSearch}
          >
            Search Jobs
          </button>
        </div>
      </div>
      <p className="m-4 text-blue-500 text-2xl">
        Number of jobs found: {filteredListings.length || jobListings.length}
      </p>
      <div>
        {(filteredListings.length > 0 ? filteredListings : jobListings).map((job, index) => (
          <motion.div
            key={index}
            className="border rounded p-4 mb-4 flex justify-between items-center hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl text-gray-800">{job.title}</h2>
              <p className="text-blue-700">{job.location}</p>
              <p>
                Job Type: {job.jobType} | Workspace: {job.workspace}
              </p>
            </div>
            <Link href={`/job/${index}`} passHref>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                View Job
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobPage;
