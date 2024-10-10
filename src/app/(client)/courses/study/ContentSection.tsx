import React from 'react';
import { ContentSectionProps } from '../../types/courseDevelopment';

const ContentSection: React.FC<ContentSectionProps> = ({ title, content, list, code, explanation }) => (
    <section className="p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">{title}</h2>
        <p className="mb-4">{content}</p>
        {list && (
            <ul className="list-disc pl-6 mb-4">
                {list.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                ))}
            </ul>
        )}
        {code && (
            <pre className="p-4 rounded-md overflow-x-auto bg-gray-100">
                <code>{code}</code>
            </pre>
        )}
        {explanation && <p className="mt-4 text-sm text-gray-600">{explanation}</p>}
    </section>
);

export default ContentSection;