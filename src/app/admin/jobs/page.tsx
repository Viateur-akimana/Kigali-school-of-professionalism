import React from 'react'
import JobsTable from '../components/JobsTable'

const JobPage = () => {
  return (
    <div>
        <JobsTable limit={10} title='All jobs'/>
    </div>
  )
}

export default JobPage