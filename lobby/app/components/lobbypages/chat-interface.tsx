"use client"

import { useState } from "react"
import { Smile, ChevronsRight, ChevronRight, MessageCircle, X } from "lucide-react"

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
  const [sidebarState, setSidebarState] = useState<"open" | "collapsed">("open")
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarState(sidebarState === "open" ? "collapsed" : "open")
  }

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const getSidebarStyles = () => {
    switch (sidebarState) {
      case "open":
        return "translate-x-0 w-[400px]"
      case "collapsed":
        return "translate-x-0 w-[60px]"
      default:
        return "translate-x-0 w-[400px]"
    }
  }

  return (
    <div className="relative">
      <div className="md:hidden h-16 border-b border-[#CED7FF]/10 z-50">
        <div className="flex items-center h-full px-4">
          <button
            onClick={toggleMobileSidebar}
            className="flex items-center gap-3 p-2 bg-[#CED7FF]/10 rounded-lg hover:bg-[#CED7FF]/15 transition-colors"
            aria-label="Open chat"
          >
            <MessageCircle className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300 font-medium">Chat</span>
          </button>

          {/* Navigation items */}
          <div className="flex items-center gap-6 ml-8">
            <span className="text-gray-400 text-sm font-medium">PREPARING</span>
            <span className="text-gray-400 text-sm font-medium">LIVE NOW</span>
            <span className="text-gray-400 text-sm font-medium">MY GAMES</span>
          </div>
        </div>
      </div>

      {isMobileSidebarOpen && (
        <div className="md:hidden inset-0 bg-black/50 z-40" onClick={toggleMobileSidebar} />
      )}

      {/* Chat Sidebar */}
      <div
        className={` right-0 top-0 h-full border-l-2 border-[#CED7FF]/10 transition-all duration-300 ease-in-out z-40 
          md:${getSidebarStyles()} 
          ${isMobileSidebarOpen ? "translate-x-0 w-full md:w-[400px]" : "translate-x-full md:translate-x-0"} 
          ${!isMobileSidebarOpen ? "md:block" : "block"}`}
      >
        <div className="md:hidden absolute top-4 left-4 z-10">
          <button
            onClick={toggleMobileSidebar}
            className="p-2 bg-[#CED7FF]/10 rounded-lg hover:bg-[#CED7FF]/15 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {sidebarState === "collapsed" && (
          <div className="hidden md:flex h-full items-start justify-center pt-5">
            <button
              onClick={toggleSidebar}
              className="p-3 bg-[#CED7FF]/10 rounded-lg hover:bg-[#CED7FF]/15 transition-colors"
              aria-label="Expand chat"
              type="button"
            >
              <ChevronsRight className="w-5 h-5 text-gray-400 rotate-180" />
            </button>
          </div>
        )}

        {(sidebarState === "open" || isMobileSidebarOpen) && (
          <>
            {/* Header with Room Chat title, indicator and collapse button */}
            <header className="flex items-center justify-between py-5 px-6 mt-0 md:mt-0">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center gap-3 bg-[#CED7FF]/10 rounded-xl px-3.5 py-2.5 flex-1">
                  <h2 className="text-white font-semibold text-[16px]">Room Chat</h2>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" aria-hidden="true" />
                    <span className="text-white text-sm font-medium">6</span>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleSidebar}
                className="hidden md:block ml-3 p-3 bg-[#CED7FF]/10 rounded-lg hover:bg-[#CED7FF]/15 transition-colors"
                aria-label="Collapse chat"
                type="button"
              >
                <ChevronsRight className="w-5 h-5 text-gray-400" />
              </button>
            </header>

            {/* Chat messages container */}
            <div className="absolute top-20 left-0 right-0 bottom-[84px] flex flex-col justify-end p-6 gap-4 overflow-y-auto">
              <div className="absolute z-20 inset-0 bg-gradient-to-b from-[#080A18] to-transparent pointer-events-none"></div>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${getMessageBgColor(msg.variant)} rounded-2xl p-4 text-white relative z-10`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-semibold text-gray-300">
                      <span className="w-[16px] h-[16px] bg-[#CED7FF]/10 inline-block rounded-full mr-2"></span>
                      {msg.username}
                    </span>
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
                    <Smile className="w-[20px] h-[20px] text-[#484B66]" />
                  </div>
                </div>

                <button className="w-11 h-11 bg-[#CED7FF]/10 rounded-lg flex items-center justify-center hover:bg-[#CED7FF]/15 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
