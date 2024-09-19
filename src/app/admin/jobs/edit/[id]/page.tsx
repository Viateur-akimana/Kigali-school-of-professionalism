'use client';

import React, { useEffect, useState } from 'react';
import BackButton from '../../../components/BackButton';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import Job from '@/types/jobs';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  company: z.string().min(1, {
    message: 'Company is required',
  }),
  location: z.string().min(1, {
    message: 'Location is required',
  }),
  description: z.string().min(1, {
    message: 'Description is required',
  }),
  date: z.string().min(1, {
    message: 'Date is required',
  }),
  jobType: z.string().min(1, {
    message: 'Job Type is required',
  }),
});

interface JobEditPageProps {
  params: {
    id: string;
  };
}

const jobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
  'Temporary',
];

const JobsEditPage = ({ params }: JobEditPageProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job');
        }
        const data = await response.json();
        setJob(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching job details. Please try again later.');
        setLoading(false);
      }
    };

    fetchJob();
  }, [params.id]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      company: '',
      location: '',
      description: '',
      date: '',
      jobType: '',
    },
  });

  useEffect(() => {
    if (job) {
      form.reset({
        title: job.title,
        company: job.company,
        location: job.location,
        description: job.description,
        date: job.date,
        jobType: job.jobType,
      });
    }
  }, [job, form]);

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(`/api/jobs/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update job');
      }

      toast({
        title: 'Job has been updated successfully',
        description: `Updated by ${data.company} on ${data.date}`,
      });

      router.push('/admin/jobs');
    } catch (err) {
      toast({
        title: 'Update Failed',
        description: 'There was an error updating the job. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <BackButton text="Back To Jobs" link="/admin/jobs" />
      <h3 className="text-2xl mb-4">Edit Job</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Company
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Company"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Location
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Location"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Description
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                  Job Type
                </FormLabel>
                <FormControl>
                  <select
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    {...field}
                  >
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full dark:bg-slate-800 dark:text-white">
            Update Job
          </Button>
        </form>
      </Form>
    </>
  );
};

export default JobsEditPage;
