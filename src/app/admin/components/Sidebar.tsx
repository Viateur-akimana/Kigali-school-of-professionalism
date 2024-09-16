import React from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className='h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900'>
      <Command className='bg-secondary h-full w-80 p-4 rounded-lg shadow-md'>
        <CommandInput 
          placeholder="Type to search..." 
          className="mb-4 text-lg placeholder-gray-500 dark:placeholder-gray-300"
        />
        <CommandList className="overflow-hidden">
          <CommandEmpty className="text-gray-400 dark:text-gray-300">No results found.</CommandEmpty>
          
          <CommandGroup heading="Suggestions" className="text-4xl"> 
            <CommandItem className="flex items-center text-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              <LayoutDashboard className='mr-2 h-6 w-6 text-blue-500' />
              <Link href='/admin' className="text-gray-800 dark:text-gray-200">Dashboard</Link>
            </CommandItem>
            <CommandItem className="flex items-center text-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              <Newspaper className='mr-2 h-6 w-6 text-green-500' />
              <Link href='/admin/jobs' className="text-gray-800 dark:text-gray-200">Jobs</Link>
            </CommandItem>
            <CommandItem className="flex items-center text-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              <Folders className='mr-2 h-6 w-6 text-yellow-500' />
              <Link href='/admin/categories' className="text-gray-800 dark:text-gray-200">Categories</Link>
            </CommandItem>
            <CommandItem className="flex items-center text-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              <Folders className='mr-2 h-6 w-6 text-purple-500' />
              <Link href='/admin/courses' className="text-gray-800 dark:text-gray-200">Courses</Link>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings" className="text-xl"> 
            <CommandItem className="flex items-center text-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              <User className='mr-2 h-5 w-5 text-red-500' />
              <span className="text-gray-800 dark:text-gray-200">Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem className="flex items-center text-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              <CreditCard className='mr-2 h-5 w-5 text-blue-500' />
              <span className="text-gray-800 dark:text-gray-200">Comments</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem className="flex items-center text-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              <Settings className='mr-2 h-5 w-5 text-gray-500' />
              <span className="text-gray-800 dark:text-gray-200">Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default Sidebar;
