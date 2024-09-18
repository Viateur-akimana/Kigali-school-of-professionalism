'use client';

import { TextField, Button, Callout } from "@shadcn/ui";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface JobForm {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  jobType: 'Part-time' | 'Full-time' | 'Freelance' | 'Hybrid';
  location: string;
}

const AddingNewJob = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<JobForm>();
  const [error, setError] = useState<string>("");

  const onSubmit: SubmitHandler<JobForm> = async (data) => {
    try {
      await axios.post("http://localhost:3000/api/jobs", data);
      router.push("/jobs/issueList");
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">New Job</h1>

      {error && (
        <Callout variant="destructive" className="mb-6">
          {error}
        </Callout>
      )}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            placeholder="Job Title"
            className="w-full"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="text-red-500 text-sm">Job title is required</p>}
        </div>
        <div>
          <TextField
            placeholder="Company"
            className="w-full"
            {...register("company", { required: true })}
          />
          {errors.company && <p className="text-red-500 text-sm">Company is required</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
          <select
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("jobType", { required: true })}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Freelance">Freelance</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          {errors.jobType && <p className="text-red-500 text-sm">Job type is required</p>}
        </div>

        <div>
          <TextField
            type="date"
            placeholder="Date"
            className="w-full"
            {...register("date", { required: true })}
          />
          {errors.date && <p className="text-red-500 text-sm">Date is required</p>}
        </div>
        <div>
          <TextField
            placeholder="Location"
            className="w-full"
            {...register("location", { required: true })}
          />
          {errors.location && <p className="text-red-500 text-sm">Location is required</p>}
        </div>

        <div>
          <textarea
            placeholder="Job Description"
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("description", { required: true })}
          />
          {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit New Job
        </Button>
      </form>
    </div>
  );
};

export default AddingNewJob;
