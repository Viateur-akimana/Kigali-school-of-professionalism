'use client';

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./components/ThemeProvider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <div className="hidden md:flex md:flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-10 dark:bg-gray-800 p-4">
            <Navbar />
            <div className="mt-4">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
