import { NextRequest, NextResponse } from "next/server";
import { Schema, z } from 'zod';
import prisma from "@/prisma/client";

const schema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    description: z.string().min(1, 'Description is required'),
    company: z.string(),
    date: z.date(),
    jobType: 'Part-time' | 'Full-time' | 'Freelance' | 'Hybrid',
    location: z.string()
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format());
    }

    const newJob = await prisma.job.create({ data: { title: body.title, description: body.description, company: body.company, date: body.date, location: body.location, jobTypes: body.jobTypes } })
    return NextResponse.json(newJob, { status: 201 });
}
export async function GET() {
    try {
        const allJobs = await prisma.job.findMany();
        return NextResponse.json(allJobs, { status: 200 });
    } catch (error) {
        console.log(error);

    }

}