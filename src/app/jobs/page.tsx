'use client';
import React, { useState } from 'react';

interface JobListing {
  title: string;
  location: string;
}

const JobPage: React.FC = () => {
  const [jobType, setJobType] = useState('');
  const [workspace, setWorkspace] = useState('');
  const jobListings: JobListing[] = [
    { title: 'Solutions Architect', location: 'Eastern Province, Rwanda' },
    { title: 'IT & Security Lead', location: 'Eastern Province, Rwanda' },
    { title: 'Delivery Executives To Work Major Cities of Rwanda', location: 'Kigali, Rwanda' },
    { title: 'Software Engr. Specialisation Coach (Low Level)', location: 'Kigali, Rwanda' },
    { title: 'Junior Software Developer', location: 'Western Province, Rwanda' },
    { title: 'Data Analyst', location: 'Southern Province, Rwanda' },
  ];

  return (
    <div className="container mx-auto px-4">
    <h1 className="text-3xl text-blue-700 font-bold m-10 text-center">Job Listings</h1>
    <div className="flex justify-center">
  <div className="flex items-center my-4">
    <select
      className="m-4 border rounded p-2"
      value={jobType}
      onChange={(e) => setJobType(e.target.value)}
    >
      <option value="">Select Job Type</option>
      <option value="All">All</option>
      <option value="Full time">Full time</option>
      <option value="Part time">Part time</option>
      <option value="full time">Full time</option>
    </select>
    <select
      className="mr-2 border rounded p-2"
      value={workspace}
      onChange={(e) => setWorkspace(e.target.value)}
    >
      <option value="">Select workspace</option>
      <option value="All">All</option>
      <option value="Hybrid">Hybrid</option>
      <option value="Remote">Remote</option>
      <option value="site">Site</option>
    </select>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Search Jobs
    </button>
  </div>
</div>

      <p className='m-4 text-blue-500 text-2xl'>Number of jobs found: {jobListings.length}</p>
      <div>
  {jobListings.map((job, index) => (
    <div key={index} className="border rounded p-4 mb-4 flex justify-between items-center">
      <div className='space-y-4'>
        <h2 className="text-3xl">{job.title}</h2>
        <p>{job.location}</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Job
      </button>
    </div>
  ))}
</div>

    </div>
  );
};

export default JobPage;
