import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Import necessary modules

export async function GET(req:NextRequest) {
 
  try {
    const author = await prisma.qualification.findMany({
      where: {
        authorId: "9bf6e7a7-a841-43ff-9bc2-44315d155604",
      },
    
      orderBy:{
        createdAt:"desc"
      }
    });

    return NextResponse.json(author);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}