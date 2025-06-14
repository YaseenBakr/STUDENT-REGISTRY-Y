import { NextRequest, NextResponse } from 'next/server';

// Example GET handler
export async function GET(request: NextRequest) {
  // You can fetch data from a database or return static data
  return NextResponse.json({ message: 'Hello from /api/student!' });
}

// Example POST handler
export async function POST(request: NextRequest) {
  const data = await request.json();
  // You can process the data here (e.g., save to DB)
  return NextResponse.json({ received: data });
}
