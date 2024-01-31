import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

import prismadb from "../../../lib/prismadb"; // Import your Prisma client
import { NextApiRequest } from "next";

// eslint-disable-next-line import/no-anonymous-default-export

interface GetPorfolioPostProps {
   workId:string
  }


export default async function  getPorfolioPost  (req:NextApiRequest,) {


  const { workId } = req.query as unknown as GetPorfolioPostProps;

  try {
    const portfolio = await prismadb.portfolioPost.findUnique({
      where: {
        id: workId,
      },
      include: {
 
        author: true,
       
      },
    });

    return NextResponse.json(portfolio);
} catch (error) {
  return new NextResponse("Internal Error", { status: 500 });
}
};

 
