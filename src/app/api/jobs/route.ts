import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/lib/db";

const schema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    description: z.string().min(1, 'Description is required'),
    company: z.string(),
    date: z.string().transform((val) => {
        const parsedDate = new Date(val);
        if (isNaN(parsedDate.getTime())) {
            throw new Error('Invalid date format');
        }
        return parsedDate.toISOString();
    }),
    jobType: z.enum(['Part-time', 'Full-time', 'Freelance', 'Hybrid']),
    location: z.string()
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    try {
        const newJob = await prisma.job.create({
            data: {
                title: body.title,
                description: body.description,
                company: body.company,
                date: body.date, 
                jobType: body.jobType,
                location: body.location
            }
        });

        return NextResponse.json(newJob, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const allJobs = await prisma.job.findMany();
        return NextResponse.json(allJobs, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}
