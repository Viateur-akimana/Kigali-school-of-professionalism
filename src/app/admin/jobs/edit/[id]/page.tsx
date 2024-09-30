'use client';

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import axios from "axios";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  jobType: z.enum(["Full-time", "Part-time", "Internship", "Hybrid"]),
});

const jobTypes = [
  "Full-time",
  "Part-time",
  "Internship",
  "Hybrid",
];

interface JobData {
  title: string;
  company: string;
  location: string;
  description: string;
  date: string;
  jobType: typeof jobTypes[number];
}
export default function EditJobPage({ params }: { params: { id: string } }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      date: new Date().toISOString().slice(0, 10),
      jobType: jobTypes[0],
    },
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (!id) {
      setError("Job ID is missing.");
      setLoading(false);
      return;
    }

    const fetchJob = async () => {
      try {
        const response = await axios.get(`/api/jobs/${id}`);
        const jobData: JobData = response.data;

        reset({
          title: jobData.title,
          company: jobData.company,
          location: jobData.location,
          description: jobData.description,
          date: jobData.date.split("T")[0],
          jobType: jobData.jobType || jobTypes[0],
        });
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch job details:", error);
        setError("Failed to load job details. Please try again.");
        setLoading(false);
      }
    };

    fetchJob();
  }, [id, reset]);

  const onSubmit = async (data: JobData) => {
    try {
      await axios.put(`/api/jobs/${id}`, data);
      router.push("/admin/jobs");
    } catch (error) {
      console.error("Failed to update job", error);
      setError("Failed to update job. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading job details...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-indigo-600 text-white p-6">
        <h3 className="text-2xl font-semibold">Edit Job</h3>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <Input
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter Title"
                  />
                  {errors.title && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.title.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter Company"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.company.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <Input
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter Location"
                  />
                  {errors.location && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <Input
                    {...field}
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.date && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.date.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Job Type
            </label>
            <Controller
              name="jobType"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full border border-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Job Type</option>
                  {jobTypes.map((jobType) => (
                    <option key={jobType} value={jobType}>
                      {jobType}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.jobType && (
              <p className="text-red-600 text-sm">{errors.jobType.message}</p>
            )}
          </div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Description"
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>
            )}
          />
        </form>
      </CardContent>
      <CardFooter className="p-6">
        <Button
          onClick={handleSubmit(onSubmit)}
          className="bg-indigo-600 text-white"
        >
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}
