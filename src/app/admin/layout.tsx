'use client';

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./components/ThemeProvider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push('/auth'); 
    } else if (!(session.user as any).isAdmin) {
      router.push('/');
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; 
  }

  if (!session || !(session.user as any).isAdmin) {
    return null;
  }

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem={true}
      storageKey='dashboard-theme'
    >
      <div>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <Sidebar />
          </div>
          <main>{children}</main>
        </div>
      </div>
      <Toaster/>
    </ThemeProvider>
  )
}