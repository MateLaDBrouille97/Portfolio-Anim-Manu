import { NextResponse, NextRequest } from "next/server";

import { PrismaClient } from '@prisma/client';
import { NextApiRequest } from "next";

const prisma = new PrismaClient();



export async function GET(req) {
  try {
    
    const author = await prisma.portfolioPost.findMany({
      where: {
        authorId: "9bf6e7a7-a841-43ff-9bc2-44315d155604",
        type: 'DATA_ANALYSIS', 
      },
    
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json(author);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}