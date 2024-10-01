"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import axios from "axios";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
  status: z.enum(["Active", "Inactive"]),
  visibility: z.enum(["Public", "Private"]),
  enrollments: z
    .string()
    .min(1, { message: "Enrollments is required" })
    .transform((val) => parseInt(val, 10)),
  price: z
  .string()
  .min(1,{message: "Price is required"}),
  createdOn: z.string().min(1, { message: "Creation date is required" }),
});

const statusOptions = ["Active", "Inactive"];
const visibilityOptions = ["Public", "Private"];

interface CourseData {
  title: string;
  duration: string;
  status: typeof statusOptions[number];
  visibility: typeof visibilityOptions[number];
  enrollments: number;
  price: string;
  createdOn: string;
}

export default function AddCoursePage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      duration: "",
      status: statusOptions[0],
      visibility: visibilityOptions[0],
      enrollments: 0,
      price: "",
      createdOn: new Date().toISOString().slice(0, 10),
    },
  });

  const router = useRouter();

  const onSubmit = async (data: CourseData) => {
    try {
      const updatedData = {
        ...data,
        createdOn: new Date(data.createdOn).toISOString(), 
      };
      await axios.post(`/api/courses`, updatedData);
      router.push("/admin/courses");
    } catch (error) {
      console.error("Failed to create course", error);
      alert("Failed to create course. Please try again.");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-indigo-600 text-white p-6">

        <h3 className="text-2xl font-semibold">Add New Course</h3>
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
                    placeholder="Enter Course Title"
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
              name="duration"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <Input
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter Course Duration"
                  />
                  {errors.duration && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.duration.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  {errors.status && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.status.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="visibility"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visibility
                  </label>
                  <select
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {visibilityOptions.map((visibility) => (
                      <option key={visibility} value={visibility}>
                        {visibility}
                      </option>
                    ))}
                  </select>
                  {errors.visibility && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.visibility.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <Controller
            name="enrollments"
            control={control}
            render={({ field }) => (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enrollments
                </label>
                <Input
                  {...field}
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Number of Enrollments"
                />
                {errors.enrollments && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.enrollments.message}
                  </p>
                )}
              </div>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>
                  <Input
                    {...field}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter Course Price"
                  />
                  {errors.price && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.price.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="createdOn"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Created On
                  </label>
                  <Input
                    {...field}
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.createdOn && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.createdOn.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <CardFooter className="flex justify-end">
            <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700">
              Add Course
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
