import type { NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const middleware: NextMiddleware = (req: NextRequest) => {
  console.log("middleware.ts running");
  console.log(req.nextUrl.domainLocale)
  return NextResponse.next();
};


export default middleware;
