import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/db';

const courseSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  duration: z.string().min(1, 'Duration is required'),
  status: z.string().min(1, 'Status is required'),
  visibility: z.string().min(1, 'Visibility is required'),
  enrollments: z.number().int().nonnegative(),
  price: z.string().min(1, 'Price is required'),
  createdOn: z.string().min(1, 'Creation date is required') 
});

interface RouteParams {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Course ID' }, { status: 400 });
    }

    const course = await prisma.course.findUnique({
      where: { id },
    });

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function PUT(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Course ID' }, { status: 400 });
    }

    const body = await req.json();
    const validation = courseSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const { title, duration, status, visibility, enrollments, price, createdOn } = validation.data;

    const updatedCourse = await prisma.course.update({
      where: { id },
      data: { title, duration, status, visibility, enrollments, price, createdOn },
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Course ID' }, { status: 400 });
    }

    const deletedCourse = await prisma.course.delete({
      where: { id },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
