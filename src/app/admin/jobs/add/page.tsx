'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";

interface JobForm {
  id?: string;
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
      const formattedDate = new Date(data.date).toISOString();

      await axios.post("/api/jobs", { ...data, date: formattedDate });
      router.push("/admin/jobs");
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">New Job</h1>

      {error && (
        <Alert variant="destructive" className="mb-6">
          {error}
        </Alert>
      )}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            placeholder="Job Title"
            className="w-full"
            {...register("title", { required: "Job title is required" })}
          />
          {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
        </div>
        <div>
          <Input
            placeholder="Company"
            className="w-full"
            {...register("company", { required: "Company is required" })}
          />
          {errors.company && <p className="text-destructive text-sm">{errors.company.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Job Type</label>
          <select
            className="w-full bg-muted border border-muted-foreground rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("jobType", { required: "Job type is required" })}
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Freelance">Freelance</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          {errors.jobType && <p className="text-destructive text-sm">{errors.jobType.message}</p>}
        </div>

        <div>
          <Input
            type="date"
            placeholder="Date"
            className="w-full"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && <p className="text-destructive text-sm">{errors.date.message}</p>}
        </div>
        <div>
          <Input
            placeholder="Location"
            className="w-full"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && <p className="text-destructive text-sm">{errors.location.message}</p>}
        </div>

        <div>
          <textarea
            placeholder="Job Description"
            className="w-full bg-muted border border-muted-foreground rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <p className="text-destructive text-sm">{errors.description.message}</p>}
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded">
          Submit New Job
        </Button>
      </form>
    </div>
  );
};

export default AddingNewJob;
