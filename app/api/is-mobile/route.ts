import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
  const userAgent = req.headers.get("user-agent");
  console.log("userAgent: " + userAgent);
  const isMobile = /Mobi|Android/i.test(userAgent || '');
  console.log("isMobile: " + isMobile);

  return NextResponse.json(isMobile);
}
