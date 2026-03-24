import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { BotIcon } from "./ChatBotIcon";
import { axiosInstance } from "../lib/axios.js";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "model",
      text: "Hi, I am Nor. Ask me anything about Ron's projects, stack, or availability.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  const chatBodyRef = useRef(null);

  const renderTextWithLinks = (text) => {
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
            className="text-neutral-100 underline"
          >
            {part}
          </a>
        );
      }

      return part;
    });
  };

  const generateBotResponse = async (history) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/chat", {
        message: history,
      });

      const apiResponseText = response.data?.reply || "I could not generate a response right now.";

      setChatHistory((prev) => [...prev, { role: "model", text: apiResponseText.trim() }]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [...prev, { role: "model", text: "I cannot connect to the API at the moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    if (isLoading) return;

    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    const newHistory = [...chatHistory, { role: "user", text: userMessage }];
    setChatHistory(newHistory);
    generateBotResponse(newHistory);
  };

  useEffect(() => {
    if (isOpen && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatHistory, isLoading, isOpen]);

  return (
    <div className="fixed bottom-6 right-4 z-[130] sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {isOpen ? (
          <Motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-neutral-700 bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
              <p className="text-sm font-extrabold uppercase tracking-wide text-white">Nor AI Assistant</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-wide text-neutral-300 transition hover:text-white"
              >
                Close
              </button>
            </div>

            <div ref={chatBodyRef} className="h-72 space-y-3 overflow-y-auto px-4 py-4">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                      msg.role === "user"
                        ? "bg-white text-black"
                        : "border border-neutral-700 bg-black text-neutral-100"
                    }`}
                  >
                    {msg.role === "model" ? renderTextWithLinks(msg.text) : msg.text}
                  </div>
                </div>
              ))}

              {isLoading ? (
                <div className="flex justify-start">
                  <div className="rounded-2xl border border-neutral-700 bg-black px-3 py-2 text-sm text-neutral-200">
                    Thinking...
                  </div>
                </div>
              ) : null}
            </div>

            <div className="border-t border-neutral-800 px-4 py-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  ref={inputRef}
                  disabled={isLoading}
                  placeholder="Ask about projects, stack, or experience"
                  className="w-full rounded-full border border-neutral-700 bg-black px-4 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none disabled:opacity-50"
                  onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="rounded-full bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-neutral-200 disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-700 bg-white text-black shadow-[0_18px_40px_rgba(0,0,0,0.55)] transition hover:scale-[1.03]"
        aria-label="Toggle chat assistant"
      >
        <BotIcon className="h-9 w-9" />
      </button>
    </div>
  );
}

export default ChatBot;
