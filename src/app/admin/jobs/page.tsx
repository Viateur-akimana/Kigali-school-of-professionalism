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
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select, SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
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

  const handleFilterChange = (value: string) => {
    setFilterType(value);
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
    <div className="mt-10 mr-7 p-6 bg-white text-[#2B3674] rounded-lg shadow-md">
      <h3 className="text-2xl mb-6 text-[#1B2559] p-5 font-bold font-serifs">{title || 'List of recent jobs'}</h3>
      <div className="flex flex-row justify-between mb-6 mx-4">
        <Input
          type="text"
          placeholder="Search jobs..." 
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/2"
        />
        <div className="space-x-4 mr-4 flex flex-row ">
          <Select onValueChange={handleFilterChange} defaultValue={filterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select job type" className="text-[#2B3674]" />
            </SelectTrigger>
            <SelectContent className="text-[#2B3674]">
              <SelectItem value="All">All Job Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
            </SelectContent>
          </Select>
          <Link href="/admin/jobs/add">
            <Button variant="purple">Add Job</Button>
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-300"></div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Company</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="hidden md:table-cell">Job Type</TableHead>
            <TableHead className="hidden md:table-cell">Location</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell className="hidden md:table-cell">{job.company}</TableCell>
              <TableCell className="hidden md:table-cell">
                {new Intl.DateTimeFormat('en-US').format(new Date(job.date))}
              </TableCell>
              <TableCell className="hidden md:table-cell">{job.jobType}</TableCell>
              <TableCell className="hidden md:table-cell">{job.location}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Link href={`/admin/jobs/edit/${job.id}`}>
                    <Button variant="outline" size="sm" >Edit</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(job.id)}
                    className="bg-[#EE5D50] hover:bg-[#d95540]" 
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobsTable;