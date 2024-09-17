import { NextRequest, NextResponse } from "next/server";
import { Schema, z } from 'zod';
import prisma from "@/prisma/client";

const schema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
  duration: z.string(),
  status: z.string(),
  visibility: z.string(),
  enrollments: z.number(),
  price: z.string(),
  createdOn: z.string()
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format());
    }

    const newCourse = await prisma.course.create({ data: { title: body.title, description: body.description, company: body.company, date: body.date, location: body.location, jobTypes: body.jobTypes } })
    return NextResponse.json(newCourse, { status: 201 });
}
export async function GET() {
    try {
        const allCourses = await prisma.course.findMany();
        return NextResponse.json( allCourses, { status: 200 });
    } catch (error) {
        console.log(error);

    }

}