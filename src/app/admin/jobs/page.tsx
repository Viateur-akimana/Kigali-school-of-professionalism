import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import React from "react";
import Link from "next/link";
import jobs from "../../utils/data";
import Job from "../types/jobs";
import BackButton from "../components/BackButton";

interface JobsTableProps {
  limit?: number;
  title?: string;
}

const JobsTable = ({ limit, title }: JobsTableProps) => {
  return (
    <div className="mt-10">
      <BackButton text="Go back" link="/"/>
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        <TableCaption>A list of recent jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Company</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>JobsType</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {job.company}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {job.date}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {job.jobType}
              </TableCell>
              <TableCell className="text-right hidden md:table-cell">
                {job.location}
              </TableCell>
              <TableCell>
                <Link href={`/jobs/edit/`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
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

export default JobsTable;
