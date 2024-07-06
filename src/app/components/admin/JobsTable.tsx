import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '../ui/table';
import Link from 'next/link';
import jobs from '../../data/jobszz';
import { Job } from '../../types/jobs';

interface JobsTableProps {
  limit?: number;
  title?: string;
}

const JobsTable = ({ limit, title }: JobsTableProps) => {
  const sortedJobs: Job[] = [...jobs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredJobs = limit ? sortedJobs.slice(0, limit) : sortedJobs;

  return (
    <div className='mt-10'>
      <h3 className='text-2xl mb-4 font-semibold'>{title ? title : 'Jobs'}</h3>
      <Table>
        <TableCaption>A list of recent job postings</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.description}</TableCell>
              <TableCell>{job.jobType}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell className='text-right hidden md:table-cell'>{job.date}</TableCell>
              <TableCell>
                <Link href={`/jobs/edit/${job.id}`}>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>
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
