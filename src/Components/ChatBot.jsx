import React, { useRef, useState, useEffect } from "react";
import { BotIcon } from "./ChatBotIcon";
import { axiosInstance } from "../lib/axios.js";

function ChatBot() {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: "" 
    }
  ]);
  const inputRef = useRef();
  const chatBodyRef = useRef();

  const renderTextWithHTML = (text) => {
    if (!text) return text;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const withLinks = plainText.split(linkRegex).map((part, index) => {
      if (part.match(linkRegex)) {
        return (
          <a 
            key={index}
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });

    return withLinks;
  };

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };
    try {
      const response = await axiosInstance.post("/chat", {message: history})
      const data = response.data;
      console.log("API response:", data);
     
      const apiResponseText =
        data.reply ||
        "Hmm... I couldn't generate a response.";
      updateHistory(apiResponseText.trim());
    } catch (error) {
      console.error(error);
      updateHistory("Failed to connect to Gemini API.");
    }
  };

  const handleSubmit = () => {
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    const newHistory = [...chatHistory, { role: "user", text: userMessage }];

    setChatHistory([...newHistory, { role: "model", text: "Thinking..." }]);

    generateBotResponse(newHistory);
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"})
  }, [chatHistory])

  return (
    <div className="flex justify-center">
      <div className="my-5 w-full max-w-2xl ">
        {/* HEADER */}
        <div className="flex items-center space-x-2 mb-4">
          <BotIcon className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold uppercase">Ask Nor About Me</h2>
        </div>

        {/* MESSAGE AREA */}
        <div ref={chatBodyRef} className="h-64 overflow-y-auto border border-white dark:border-gray-900 rounded-lg p-3 mb-3">
          {/* Initial bot message */}
          <div className="my-2 flex justify-start">
            <div className="px-3 py-2 rounded-lg text-sm bg-gray-700 dark:bg-gray-200">
              Hello! <span className="wave-hover">👋</span> My Name is Nor and I'm Ron-ron Rivera's assistant. Ask me anything about him.
            </div>
          </div>

          {/* Render chat history */}
          {chatHistory.filter((msg)=> !msg.hideInChat).map((msg, i) => (
            <div
              key={i}
              className={`my-2 flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 dark:bg-gray-200 dark:text-black"
                }`}
              >
                {msg.role === "model" && msg.text !== "Thinking..." 
                  ? renderTextWithHTML(msg.text)
                  : msg.text
                }
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
        {/* INPUT */}
          <div className="flex sm:w-full w-auto">
          <input
            type="text"
            ref={inputRef}
            placeholder="Ask anything..."
            className=" flex-1 px-3 py-2 rounded-l-lg border border-white dark:border-gray-900 placeholder:text-gray-700 dark:bg-white text-black focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            onClick={handleSubmit}
            className=" px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 active:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
 
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
