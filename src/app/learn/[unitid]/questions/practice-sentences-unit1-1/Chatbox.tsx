'use client';

import { useState } from 'react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, `You: ${message}`]);
      setMessage('');
      setIsLoading(true);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }),
        });
        const data = await response.json();
        setChatHistory([...chatHistory, `You: ${message}`, `ChatGPT: ${data.reply}`]);
      } catch (error) {
        setChatHistory([...chatHistory, `You: ${message}`, 'ChatGPT: Error occurred']);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChatbox}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        Chat
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white border border-gray-300 shadow-lg rounded-lg">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Chat with us</h2>
          </div>
          <div className="p-4 h-60 overflow-y-scroll">
            {chatHistory.map((msg, index) => (
              <p key={index} className="mb-2">{msg}</p>
            ))}
            {isLoading && <p className="mb-2">ChatGPT is typing...</p>}
          </div>
          <div className="p-4 border-t border-gray-200 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 p-2 rounded-lg mr-2"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
