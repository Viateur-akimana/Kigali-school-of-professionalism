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

const AddingNewJob: React.FC = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<JobForm>();
    const [error, setError] = useState<string>("");

    const onSubmit: SubmitHandler<JobForm> = async (data) => {
        try {
            const formattedDate = new Date(data.date).toISOString();
            await axios.post("/api/jobs", { ...data, date: formattedDate });
            router.push("/admin/jobs");
        } catch (error) {
            console.error("Error details:", error); // Log the error details
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.error || "An unexpected error occurred. Please try again.");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-12">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Create a New Job</h1>

                {error && (
                    <Alert variant="destructive" className="mb-6">
                        {error}
                    </Alert>
                )}

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input
                            placeholder="Job Title"
                            className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 p-3"
                            {...register("title", { required: "Job title is required" })}
                        />
                        {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
                    </div>
                    <div>
                        <Input
                            placeholder="Company"
                            className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 p-3"
                            {...register("company", { required: "Company is required" })}
                        />
                        {errors.company && <p className="text-red-600 text-sm">{errors.company.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">Job Type</label>
                        <select
                            className="w-full border border-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-indigo-500"
                            {...register("jobType", { required: "Job type is required" })}
                        >
                            <option value="">Select Job Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                        {errors.jobType && <p className="text-red-600 text-sm">{errors.jobType.message}</p>}
                    </div>

                    <div>
                        <Input
                            type="date"
                            className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 p-3"
                            {...register("date", { required: "Date is required" })}
                        />
                        {errors.date && <p className="text-red-600 text-sm">{errors.date.message}</p>}
                    </div>
                    <div>
                        <Input
                            placeholder="Location"
                            className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 p-3"
                            {...register("location", { required: "Location is required" })}
                        />
                        {errors.location && <p className="text-red-600 text-sm">{errors.location.message}</p>}
                    </div>

                    <div>
                        <textarea
                            placeholder="Job Description"
                            className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 p-3 h-24"
                            {...register("description", { required: "Description is required" })}
                        />
                        {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-md transition duration-200">
                        Submit New Job
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddingNewJob;
