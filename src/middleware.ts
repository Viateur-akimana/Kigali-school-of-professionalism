// src/middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth", // Redirect to the login page if not authenticated
  },
});

export const config = {
  matcher: ["/admin/:path*"], // Protect all admin routes
};
