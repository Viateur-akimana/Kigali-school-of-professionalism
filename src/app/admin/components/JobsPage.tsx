import JobsTable from "../jobs/page";

const JobsPage: React.FC = () => {
  return <JobsTable limit={15} title="All Jobs" />;
};

export default JobsPage;