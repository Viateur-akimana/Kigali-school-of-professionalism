'use client'
import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);

    // Add the user's message to the chat history
    const updatedChatHistory = [
      ...chatHistory,
      { role: 'user', content: userInput },
    ];
    setChatHistory(updatedChatHistory);

    try {
      // Make a request to OpenAI for the chat completion
      const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: updatedChatHistory,
      });

      // Add the assistant's response to the chat history
      setChatHistory([
        ...updatedChatHistory,
        { role: 'assistant', content: chatCompletion.choices[0].message.content },
      ]);
    } catch (error) {
      console.error('Error fetching chat completion:', error);
      setChatHistory([
        ...updatedChatHistory,
        { role: 'assistant', content: 'Sorry, I am unable to process your request right now.' },
      ]);
    }

    setUserInput('');
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Chatbot</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md h-96 overflow-y-auto">
        {chatHistory.map((message, index) => (
          <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-md ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-md"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button
          onClick={handleUserInput}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
