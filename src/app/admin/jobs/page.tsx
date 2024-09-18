'use client'
import React, { useState } from "react";
import Link from "next/link";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import jobs from "../../utils/data";
import BackButton from "../components/BackButton";

interface JobsTableProps {
  limit?: number;
  title?: string;
}

const JobsTable = ({ limit, title }: JobsTableProps) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const filteredJobs = jobs
    .filter((job) => {
      if (filterType === "All") return true;
      return job.jobType === filterType;
    })
    .filter((job) => {
      if (!searchTerm) return true;
      return job.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const displayedJobs = limit ? filteredJobs.slice(0, limit) : filteredJobs;

  return (
    <div className="mt-10">
      <BackButton text="Go back" link="/" />

      <h3 className="text-2xl mb-4 font-semibold">{title || "Jobs"}</h3>

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
              <TableCell className="text-right hidden md:table-cell">{job.date}</TableCell>
              <TableCell className="hidden md:table-cell">{job.jobType}</TableCell>
              <TableCell className="hidden md:table-cell">{job.location}</TableCell>
              <TableCell>
                <Link href={`/admin/jobs/edit/${job.id}`} className="flex space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Delete
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Page component that uses the JobsTable
const JobsPage: React.FC = () => {
  return <JobsTable limit={15} title="All Jobs" />;
};

export default JobsPage;
