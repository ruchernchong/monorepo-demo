import { type NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  console.log(request.nextUrl.pathname);
  return NextResponse.next();
};

export default middleware;
