import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

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

    const { title, description,company,location,jobType,date } = await req.json();

    const updatedJob = await prisma.job.update({
      where: { id },
      data: { title, description,company,location,jobType,date },
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