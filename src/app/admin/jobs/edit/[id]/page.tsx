import BackButton from '@/app/admin/components/BackButton'
import { Form } from '@/components/ui/form';
import React from 'react'

const JobsEditPage = () => {
  return (
    
    <div>
        <BackButton text={'Go to jobs'} link={'/admin/jobs'}/>
        <h3 className='text-2xl mb-4'>Edit Post</h3>
        <Form >

        </Form>
     </div>
  )
}

export default JobsEditPage;