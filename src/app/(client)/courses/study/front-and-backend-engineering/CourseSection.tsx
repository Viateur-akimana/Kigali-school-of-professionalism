import React from 'react';
import { ChevronRight, ChevronDown, Book, Code, Layout, RefreshCw } from 'lucide-react';
import { CourseSectionProps } from '../../../types/courseDevelopment';

const iconComponents = {
    Book,
    Code,
    Layout,
    RefreshCw
};

const CourseSection: React.FC<CourseSectionProps> = ({ icon, title, isExpanded, onToggle, items, activeItem }) => {
    const IconComponent = iconComponents[icon as keyof typeof iconComponents];

    return (
        <div className="mb-4 text-gray-800">
            <button
                className="flex items-center w-full px-6 py-3 text-left hover:bg-gray-100"
                onClick={onToggle}
                aria-expanded={isExpanded}
                aria-controls={`section-${title}`}
            >
                <IconComponent className="w-5 h-5 mr-2" aria-hidden="true" />
                <span className="font-medium">{title}</span>
                {isExpanded ? <ChevronDown className="ml-auto" aria-hidden="true" /> : <ChevronRight className="ml-auto" aria-hidden="true" />}
            </button>
            {isExpanded && (
                <ul id={`section-${title}`} className="ml-6">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`px-6 py-2 cursor-pointer ${item === activeItem
                                ? 'bg-blue-100 text-blue-800'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CourseSection;