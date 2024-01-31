import { NextResponse, NextRequest } from "next/server";

import { PrismaClient,PortfolioType } from '@prisma/client';
import { NextApiRequest } from "next";

const prisma = new PrismaClient();



export async function GET (req:NextRequest){
  try {
    
    const portf = await prisma.portfolioPost.findMany({
      where: {
        authorId: "9bf6e7a7-a841-43ff-9bc2-44315d155604",
        type:"AI" , 

      },
    
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json(portf);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

