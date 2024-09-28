"use client";
import React from "react";
import {
  LayoutDashboard,
  Briefcase,
  Folder,
  Newspaper,
  User,
  Settings,
  Folders,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../../public/Vector.png";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const currentPath = usePathname();

  return (
    <div className="h-screen w-80 bg-white dark:bg-gray-900 p-6 flex flex-col justify-between shadow-lg">
      <div>
        <div className="mb-6 flex items-center">
          <h1 className="ml-3 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4318FF] to-[#00BFA6] drop-shadow-md">
            IT Solutions Group
          </h1>
        </div>

        <div className="pt-10">
          <div className="space-y-4 text-lg">
            <Link
              href="/admin"
              className={`${currentPath === "/admin"
                ? "bg-[#4318FF] text-white"
                : "font-poppins font-normal text-gray-600 dark:text-gray-200"
                } flex items-center p-2 rounded transition-all`}
            >
              <LayoutDashboard className="mr-2 h-6 w-6" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/admin/jobs"
              className={`${currentPath === "/admin/jobs"
                ? "bg-[#4318FF] text-white"
                : "font-poppins font-normal text-gray-600 dark:text-gray-200"
                } flex items-center  p-2 rounded transition-all`}
            >
              <Briefcase className="mr-2 h-6 w-6" />
              <span>Jobs</span>
            </Link>

            <Link
              href="/admin/courses"
              className={`${currentPath === "/admin/courses"
                ? "bg-[#4318FF] text-white"
                : "font-poppins font-normal text-gray-600 dark:text-gray-200"
                } flex items-center p-2 rounded transition-all`}
            >
              <Newspaper className="mr-2 h-6 w-6" />
              <span>Courses</span>
            </Link>

            <Link
              href="/admin/categories"
              className={`${currentPath === "/admin/categories"
                ? "bg-[#4318FF] text-white"
                : "font-poppins font-normal text-gray-600 dark:text-gray-200"
                } flex items-center p-2 rounded transition-all`}
            >
              <Folder className="mr-2 h-6 w-6" />
              <span>Categories</span>
            </Link>

            <Link
              href="/admin/posts"
              className={`${currentPath === "/admin/posts"
                ? "bg-[#4318FF] text-white"
                : "font-poppins font-normal text-gray-600 dark:text-gray-200"
                } flex items-center  p-2 rounded transition-all`}
            >
              <Folders className="mr-2 h-6 w-6" />
              <span>Posts</span>
            </Link>

            <Link
              href="/admin/users"
              className={`${currentPath === "/admin/users"
                ? "bg-[#4318FF] text-white"
                : "font-poppins font-normal text-gray-600 dark:text-gray-200"
                } flex items-center  p-2 rounded transition-all`}
            >
              <User className="mr-2 h-6 w-6" />
              <span>Users</span>
            </Link>

            <Link
              href="/admin/projects"
              className={`${currentPath === "/admin/projects"
                ? "bg-[#4318FF] text-white"
                : "font-poppins font-normal text-gray-600 dark:text-gray-200"
                } flex items-center p-2 rounded transition-all`}
            >
              <Folders className="mr-2 h-6 w-6" />
              <span>Projects</span>
            </Link>

            <Link
              href="/admin/settings"
              className={`${currentPath === "/admin/settings"
                ? "bg-[#4318FF] text-white"
                : "font-poppins font-normal text-gray-600 dark:text-gray-200"
                } flex items-center  p-2 rounded transition-all`}
            >
              <Settings className="mr-2 h-6 w-6" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center pb-10 rounded-lg shadow-sm">
        <Image
          src={profile}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full object-cover border-2 border-blue-600"
        />
        <div className="ml-4">
          <h3 className="text-md text-[#2B3674] dark:text-gray-100 font-bold">
            Alex Smith
          </h3>
          <button className="text-sm text-[#A3AED0] dark:text-gray-400 hover:text-blue-600 transition font-bold">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
