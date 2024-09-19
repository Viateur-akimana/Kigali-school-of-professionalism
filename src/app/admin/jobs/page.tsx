'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import BackButton from '../components/BackButton';

interface Job {
  id: number;
  title: string;
  company: string;
  date: Date; 
  jobType: string;
  location: string;
}

interface JobsTableProps {
  limit?: number;
  title?: string;
}

const JobsTable = ({ limit, title }: JobsTableProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs'); 
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching jobs. Please try again later.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        const response = await fetch(`/api/jobs/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete job');
        }

        setJobs(jobs.filter(job => job.id !== id));
      } catch (err) {
        setError('Error deleting job. Please try again later.');
      }
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const filteredJobs = jobs
    .filter((job) => {
      if (filterType === 'All') return true;
      return job.jobType === filterType;
    })
    .filter((job) => {
      if (!searchTerm) return true;
      return job.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const displayedJobs = limit ? filteredJobs.slice(0, limit) : filteredJobs;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="mt-10">
      <BackButton text="Go back" link="/" />
      <h3 className="text-2xl mb-4 font-semibold">{title || 'Jobs'}</h3>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg p-2 w-1/2"
        />
        <div className="space-x-4">
          <select
            value={filterType}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="All">All Job Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
          <Link href="/admin/jobs/add">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Job
            </button>
          </Link>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Company</TableHead>
            <TableHead className="hidden md:table-cell text-right">Date</TableHead>
            <TableHead className="hidden md:table-cell">Job Type</TableHead>
            <TableHead className="hidden md:table-cell">Location</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell className="hidden md:table-cell">{job.company}</TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {new Intl.DateTimeFormat('en-US').format(new Date(job.date))}
              </TableCell>
              <TableCell className="hidden md:table-cell">{job.jobType}</TableCell>
              <TableCell className="hidden md:table-cell">{job.location}</TableCell>
              <TableCell>
                <div className="flex space-x-4">
                  <Link href={`/admin/jobs/edit/${job.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                      Edit
                    </button>
                  </Link>
                  <button

                  onClick={() => handleDelete(job.id)} 
                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Delete
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const JobsPage: React.FC = () => {
  return <JobsTable limit={15} title="All Jobs" />;
};

export default JobsPage;
