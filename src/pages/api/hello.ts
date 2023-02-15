import type { NextRequest } from "next/server";

export default async function handler(
    req: NextRequest
): Promise<Response> {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
