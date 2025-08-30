"use client"

import Image from "next/image"
import { Header } from "./lobbypages/header"
import { SectionDivider } from "./lobbypages/SectionDivider"
import ChatInterface from "./lobbypages/chat-interface"
import { SponsorSection } from "./lobbypages/SponsorSection"

export const LobbyMain = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bg.webp" 
        alt="Background"
        fill
        className="object-cover object-top"
        priority 
      />

      {/* Main content container */}
      <div className="relative z-10">
        <Header />
        <SectionDivider />
        <div className=" relative flex flex-col md:flex-row -top-3 sm:-top-6">
        <SponsorSection />
        <ChatInterface />
        </div>
      </div>
    </div>
  )
}
