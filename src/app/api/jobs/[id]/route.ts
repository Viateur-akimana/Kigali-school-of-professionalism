import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { z } from 'zod';


const jobSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().min(1, 'Description is required'),
  company: z.string().min(1, 'Company name is required').max(50),
  location: z.string().min(1, 'Location is required').max(50),
  jobType: z.enum(['Part-time', 'Full-time', 'Freelance', 'Hybrid']),
  date: z.string().transform((val) => new Date(val)),
});

interface RouteParams {
  id: string;
}


export async function GET(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Job ID' }, { status: 400 });
    }

    const job = await prisma.job.findUnique({
      where: { id },
    });

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function PUT(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Job ID' }, { status: 400 });
    }

    const body = await req.json();
    const validation = jobSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }


    const updatedJob = await prisma.job.update({
      where: { id },
      data: validation.data,
    });

    return NextResponse.json(updatedJob);
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function DELETE(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Job ID' }, { status: 400 });
    }

    const deletedJob = await prisma.job.delete({
      where: { id },
    });

    return NextResponse.json(deletedJob);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
