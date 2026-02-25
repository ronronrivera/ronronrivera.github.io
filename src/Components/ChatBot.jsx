import React, { useRef, useState, useEffect } from "react";
import { BotIcon } from "./ChatBotIcon";
import { axiosInstance } from "../lib/axios.js";

function ChatBot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  const chatBodyRef = useRef(null);

  /* -------------------- Render Text (Safe Links) -------------------- */
  const renderTextWithHTML = (text) => {
    if (!text) return text;

    const linkRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(linkRegex).map((part, index) => {
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
  };

  /* -------------------- Bot Response -------------------- */
  const generateBotResponse = async (history) => {
    try {
      setIsLoading(true);

      const response = await axiosInstance.post("/chat", {
        message: history,
      });

      const apiResponseText =
        response.data?.reply ||
        "Hmm... I couldn't generate a response.";

      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: apiResponseText.trim() },
      ]);
    } catch (error) {
      console.error(error);

      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: "Failed to connect to Gemini API." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  /* -------------------- Submit Handler -------------------- */
  const handleSubmit = () => {
    if (isLoading) return;

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    const newHistory = [
      ...chatHistory,
      { role: "user", text: userMessage },
    ];

    setChatHistory(newHistory);
    generateBotResponse(newHistory);
  };

  /* -------------------- Auto Scroll -------------------- */
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory, isLoading]);

  return (
    <div className="flex justify-center my-10">
      <div className="w-full max-w-2xl">
        {/* HEADER */}
        <div className="flex items-center space-x-2 mb-4">
          <BotIcon className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold uppercase">
            Ask Nor About Me
          </h2>
        </div>

        {/* MESSAGE AREA */}
        <div
          ref={chatBodyRef}
          className="h-64 overflow-y-auto border border-white dark:border-gray-900 rounded-lg p-3 mb-3"
        >
          {/* Initial Greeting */}
          <div className="my-2 flex justify-start">
            <div className="px-3 py-2 rounded-lg text-sm bg-gray-700 dark:bg-gray-200">
              Hello! 👋 My Name is Nor and I'm Ron-ron Rivera's assistant.
              Ask me anything about him.
            </div>
          </div>

          {/* Chat Messages */}
          {chatHistory.map((msg, i) => (
            <div
              key={i}
              className={`my-2 flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 dark:bg-gray-200 dark:text-black"
                }`}
              >
                {msg.role === "model"
                  ? renderTextWithHTML(msg.text)
                  : msg.text}
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="my-2 flex justify-start">
              <div className="px-3 py-2 rounded-lg text-sm bg-gray-700 dark:bg-gray-200 dark:text-black animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="flex">
          <input
            type="text"
            ref={inputRef}
            disabled={isLoading}
            placeholder="Ask anything..."
            className="flex-1 px-3 py-2 rounded-l-lg border border-white dark:border-gray-900 placeholder:text-gray-700 dark:bg-white text-black focus:outline-none disabled:opacity-50"
            onKeyDown={(e) =>
              e.key === "Enter" && handleSubmit()
            }
          />

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 active:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
