import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/db';

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  duration: z.string().min(1, 'Duration is required'),
  status: z.enum(['Active', 'Inactive'], { errorMap: () => ({ message: 'Status is required' }) }),
  visibility: z.enum(['Public', 'Private'], { errorMap: () => ({ message: 'Visibility is required' }) }),
  enrollments: z.number().int().nonnegative(),
  price: z.string().min(1, 'Price is required'),
  createdOn: z.string().min(1, 'Creation date is required'),
});


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const { title, duration, status, visibility, enrollments, price, createdOn } = validation.data;


    const newCourse = await prisma.course.create({
      data: {
        title,
        duration,
        status,
        visibility,
        enrollments,
        price,
        createdOn,
      },
    });

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const allCourses = await prisma.course.findMany();
    return NextResponse.json(allCourses, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
