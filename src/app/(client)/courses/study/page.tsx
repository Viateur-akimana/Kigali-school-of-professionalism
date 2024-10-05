'use client'
import React, { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import CourseSection from './CourseSection';
import ContentSection from './ContentSection';
import { CourseSectionType } from '../../types/courseDevelopment';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type SectionKeys = 'gettingStarted' | 'components' | 'hooks' | 'advanced';

const ReactCourseStudyPage: React.FC = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;
        if (status === 'unauthenticated') {
            router.push('/join');
        }
    }, [status, router]);

    const [expandedSections, setExpandedSections] = useState<Record<SectionKeys, boolean>>({
        gettingStarted: true,
        components: false,
        hooks: false,
        advanced: false,
    });

    const [searchQuery, setSearchQuery] = useState('');

    const toggleSection = (section: SectionKeys) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section],
        }));
    };


    const courseSections: CourseSectionType[] = useMemo(() => [
        {
            id: 'gettingStarted',
            icon: 'Book',
            title: 'Getting Started',
            items: ['Introduction to React', 'Setting Up', 'JSX Basics'],
            activeItem: 'Setting Up',
        },
        {
            id: 'components',
            icon: 'Layout',
            title: 'Components',
            items: ['Functional Components', 'Class Components', 'Props & State'],
        },
        {
            id: 'hooks',
            icon: 'RefreshCw',
            title: 'Hooks',
            items: ['useState', 'useEffect', 'Custom Hooks'],
        },
        {
            id: 'advanced',
            icon: 'Code',
            title: 'Advanced Topics',
            items: ['Context API', 'Redux', 'Performance Optimization'],
        },
    ], []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
          <div className="flex flex-grow mt-24">
            <aside className="w-72 bg-white shadow-lg overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">React Mastery</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search lessons..."
                    className="w-full p-2 pl-8 rounded-md bg-gray-100"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search lessons"
                  />
                  <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" aria-hidden="true" />
                </div>
              </div>
              <nav className="mt-4" aria-label="Course sections">
                {courseSections.map((section) => (
                  <CourseSection
                    key={section.id}
                    {...section}
                    isExpanded={expandedSections[section.id as SectionKeys]}
                    onToggle={() => toggleSection(section.id as SectionKeys)}
                  />
                ))}
              </nav>
            </aside>
    
            <main className="flex-1 p-8 overflow-y-auto">
              <div className="max-w-3xl mx-auto">
                <nav aria-label="Breadcrumb">
                  <p className="text-sm text-gray-500 mb-2">Getting Started &gt; Setting Up</p>
                </nav>
                <h1 className="text-4xl font-bold mb-6 text-blue-600">Setting Up Your React Environment</h1>
                <div className="space-y-6">
                  {/* Content Sections */}
                  <ContentSection
                    title="Why use Create React App?"
                    content="Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration, allowing developers to focus on code rather than build tools. Key benefits include:"
                    list={[
                      "Integrated development environment with hot reloading",
                      "Optimized production builds out of the box",
                      "Sensible defaults for tools like Babel and webpack",
                      "Built-in ESLint configuration for code quality",
                    ]}
                  />
                  <ContentSection
                    title="Installing Node.js"
                    content="To begin your React journey, you'll need Node.js installed on your machine. Follow these steps:"
                    list={[
                      "Visit the official Node.js website (https://nodejs.org)",
                      "Download the LTS (Long Term Support) version for your operating system",
                      "Run the installer and follow the prompts",
                      "Verify the installation by opening a terminal and running: node --version",
                    ]}
                  />
                  <ContentSection
                    title="Creating a new React project"
                    content="With Node.js installed, you can now create a new React project using Create React App. Open your terminal and run the following commands:"
                    code={`npx create-react-app my-react-app
    cd my-react-app
    npm start`}
                  />
                  <ContentSection
                    title="Project structure"
                    content="After creating your project, you'll see a directory structure like this:"
                    code={`my-react-app/
      README.md
      node_modules/
      package.json
      public/
        index.html
        favicon.ico
      src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg`}
                    explanation="The src/ directory is where you'll spend most of your time, writing your React components and application logic."
                  />
                </div>
                <nav className="mt-8 flex justify-between" aria-label="Lesson navigation">
                  <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">← Introduction to React</button>
                  <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">JSX Basics →</button>
                </nav>
              </div>
            </main>
          </div>
        </div>
      );
    };
    
    export default ReactCourseStudyPage;