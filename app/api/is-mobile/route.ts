import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
  const userAgent = req.headers.get("user-agent");
  const isMobile = /Mobi|Android/i.test(userAgent || '');

  return NextResponse.json(isMobile);
}
