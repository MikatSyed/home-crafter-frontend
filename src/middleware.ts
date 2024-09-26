
import { withAuth } from "next-auth/middleware"


export default withAuth(
  function middleware(req) {
    const {pathname,origin} = req.nextUrl;
    const {token} = req.nextauth;
    console.log({token})

  },
  {
    callbacks: {
      authorized: ({ token }) =>{
        return !!token
      }
    },
  }
)
export const config = { matcher: [ "/services","/profile","/service-details/:path*","/dashboard","/provider/:path*","/admin/:path*"] }