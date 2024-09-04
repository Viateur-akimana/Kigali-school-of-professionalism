'use client';
/* eslint-disable */
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
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import jobs from '../../../../utils/data';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

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
});

interface JobEditPageProps {
  params: {
    id: string;
  };
}

const JobsEditPage = ({ params }: JobEditPageProps) => {
  const { toast } = useToast();
  const router = useRouter();

  const job = jobs.find((job) => job.id === params.id);

  if (!job) {
    return <p>Job not found</p>;
  }


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
      date: job.date,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    // Perform your update logic here

    toast({
      title: 'Job has been updated successfully',
      description: `Updated by ${data.company} on ${data.date}`,
    });

    // Optional: Redirect back to jobs list after submission
    router.push('/admin/jobs');
  };

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

          <Button type="submit" className="w-full dark:bg-slate-800 dark:text-white">
            Update Job
          </Button>
        </form>
      </Form>
    </>
  );
};

export default JobsEditPage;
