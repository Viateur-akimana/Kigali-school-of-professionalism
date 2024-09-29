'use client'
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  jobType: z.string().min(1, { message: "Job Type is required" }),
});

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Temporary",
];

interface EnhancedJobEditFormProps {
  onSubmit: (data: any) => void;
  initialData?: {
    title?: string;
    company?: string;
    location?: string;
    description?: string;
    date?: string;
    jobType?: string;
  };
}

const EnhancedJobEditForm: React.FC<EnhancedJobEditFormProps> = ({
  onSubmit,
  initialData = {},
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData.title || "",
      company: initialData.company || "",
      location: initialData.location || "",
      description: initialData.description || "",
      date: initialData.date || new Date().toISOString().slice(0, 10), // Default to today's date
      jobType: initialData.jobType || jobTypes[0], // Default to first job type
    },
  });

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
          <Controller
            name="jobType"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <div className="relative">
                  <Select {...field}>
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Select>
                </div>
                {errors.jobType && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.jobType.message}
                  </p>
                )}
              </div>
            )}
          />
          <CardFooter className="p-6">
            <Button type="submit" className="bg-indigo-600 text-white">
              Save Changes
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnhancedJobEditForm;
