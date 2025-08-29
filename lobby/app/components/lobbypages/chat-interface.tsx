"use client"

import { useState } from "react"
import { Smile, ChevronRight as ChevronDoubleRight } from 'lucide-react';

const messages = [
  { id: 1, username: "Username", message: "Message", time: "08:22", variant: "lightest" },
  { id: 2, username: "Username", message: "Message", time: "08:22", variant: "light" },
  { id: 3, username: "Username", message: "Message", time: "08:22", variant: "medium" },
  { id: 4, username: "Username", message: "Message", time: "08:22", variant: "dark" },
  { id: 5, username: "Username", message: "Message", time: "08:22", variant: "darker" },
  { id: 6, username: "Username", message: "Message", time: "08:22", variant: "darkest" },
  { id: 7, username: "Username", message: "Message", time: "08:22", variant: "darkest" },
  { id: 8, username: "Username", message: "Message", time: "08:22", variant: "darkest" },
]

const getMessageBgColor = (variant: string) => {
  switch (variant) {
    case "lightest":
      return "bg-[#161928]"
    case "light":
      return "bg-[#161928]"
    case "medium":
      return "bg-[#161928]"
    case "dark":
      return "bg-[#161928]"
    case "darker":
      return "bg-[#161928]"
    case "darkest":
      return "bg-[#161928]"
    default:
      return "bg-[#161928]"
  }
}

export default function ChatInterface() {
  const [message, setMessage] = useState("")

  return (
    <div className="relative w-[325px] border-l-2 border-[#CED7FF]/10">
      {/* Header with Room Chat title, indicator and button */}
      <header className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2 flex-1">
            <h2 className="text-white font-semibold text-sm">Room Chat</h2>
            <div className="flex items-center gap-1.5 ml-auto">
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" aria-hidden="true" />
              <span className="text-white text-sm font-medium">6</span>
            </div>
          </div>
        </div>
        <button
          className="ml-3 p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          aria-label="Expand chat"
          type="button"
        >
          <ChevronDoubleRight className="w-5 h-5 text-gray-400" />
        </button>
      </header>

      {/* Chat messages container */}
      <div className="absolute top-20 left-0 right-0 bottom-[84px] flex flex-col justify-end p-6 gap-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`${getMessageBgColor(msg.variant)} rounded-2xl p-4 text-white`}>
            <div className="flex justify-between items-start mb-1">
              <span className="text-sm font-semibold text-gray-300">{msg.username}</span>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </div>
            <div className="text-lg font-semibold">{msg.message}</div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="absolute bottom-0 left-0 right-0 h-[84px]">
        <div className="flex items-center p-6 gap-2.5">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type Message here..."
              className="w-full h-11 px-3.5 py-2.5 bg-[#161928] rounded-xl text-white placeholder-[#606481] font-medium text-base border-0 outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              <Smile className=" w-[20px] h-[20px] text-[#484B66]" />
            </div>
          </div>

          <button className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <path d="M7 10L13 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path
                d="M10 7L13 10L10 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
