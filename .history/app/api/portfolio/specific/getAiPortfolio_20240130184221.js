import { NextResponse, NextRequest } from "next/server";

import { PrismaClient } from '@prisma/client';
import { NextApiRequest } from "next";

const prisma = new PrismaClient();



export async function getAiPortfolio(req) {
  try {
    
    const author = await prisma.portfolioPost.findMany({
      where: {
        
        type: 'AI', 
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