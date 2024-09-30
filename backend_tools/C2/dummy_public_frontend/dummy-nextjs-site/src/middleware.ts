import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if(navigator.userAgent === "Mozilla/5.0 (Windows; Windows NT 10.0;) AppleWebKit/535.4 (KHTML, like Gecko) Chrome/51.0.2574.341 () Safari/602.1 Edge/17.86861")
    return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/*',
}