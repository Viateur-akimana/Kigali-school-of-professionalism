// components/Chatbot.tsx
'use client';

import React, { useState } from 'react';
import OpenAI from 'openai';


interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    if (userInput.trim() === '') return;

    setIsLoading(true);
    setChatHistory((prevChat) => [...prevChat, { role: 'user', content: userInput }]);

    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [...chatHistory, { role: 'user', content: userInput }],
        model: 'gpt-3.5-turbo',
      });

      const assistantContent = chatCompletion.choices[0].message.content ?? "I'm sorry, I couldn't understand that.";

      setChatHistory((prevChat) => [
        ...prevChat,
        { role: 'assistant', content: assistantContent },
      ]);
    } catch (error) {
      console.error('Error fetching chat completion:', error);
      setChatHistory((prevChat) => [
        ...prevChat,
        { role: 'assistant', content: 'There was an error processing your request.' },
      ]);
    }

    setUserInput('');
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">AI Chatbot</h1>
      <div className="border p-4 rounded-lg shadow-md">
        <div className="mb-4">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`mb-2 p-2 ${chat.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${chat.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {chat.content}
              </span>
            </div>
          ))}
        </div>
        {isLoading && <p className="text-center text-gray-500">Loading...</p>}
        <div className="flex">
          <input
            type="text"
            className="flex-1 border p-2 rounded-l-lg"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleUserInput()}
            disabled={isLoading}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-lg"
            onClick={handleUserInput}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
