import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-hello-from-middleware1', 'hello')

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })
    response.headers.set('Cache-Control', 'no-store');
    return response
}

export const config = {
    matcher: "/",
};
