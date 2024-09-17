import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

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

    const { title, description,company,location,jobType,date } = await req.json();

    const updatedCourse = await prisma.course.update({
      where: { id },
      data: { title, description,company,location,jobType,date },
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