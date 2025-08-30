"use client"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, Wallet, ChevronDown, Menu, X } from "lucide-react"
import type { JSX } from "react"
import "../../globals.css"

export const Header = (): JSX.Element => {
  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const walletBalance = "1435 USDT"
  const userAddress = "0×422...e7d"

  return (
    <>
      <motion.header
        className="flex items-center justify-between py-6 px-1.5 md:px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <div >
          <h1 className="text-2xl font-bold text-white tracking-tight hidden md:block">DASH MARKETS</h1>
        </div>

        {/* Desktop Right side controls */}
        <div className="hidden min-[780px]:flex items-center justify-center gap-4">
          {/* Wallet section */}
          <div className="flex items-center gap-[40px] py-1 pl-3 pr-1 rounded-[12px] border border-[#CED7FF]/10">
            <div className="flex items-center gap-2">
              <Image 
                src="/tether.png" 
                alt="USDT Icon"
                width={16}
                height={16}
                className=""  
              />
              <span className="text-white font-medium text-[14px]">{walletBalance}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="p-1 bg-[#CED7FF]/10 rounded-full"
                onClick={() => setIsWalletDropdownOpen(!isWalletDropdownOpen)}
              >
                <motion.div animate={{ rotate: isWalletDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-[18px] h-[18px] text-white" />
                </motion.div>
              </button>

              <motion.button
                className="flex items-center justify-center leading-5 gap-2 btn btn-primary px-[12px] py-2 rounded-[10px] text-[14px] text-white font-semibold"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(120, 82, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src="/Wallet.png" 
                  alt="Arrow Icon"
                  width={14}
                  height={14}
                  className=""
                />
                Deposit
              </motion.button>
            </div>
          </div>

          {/* Notifications */}
          <motion.div className="relative">
            <motion.button className="">
              <Image
                src="/Belll.png" 
                alt="Notifications"
                width={34}
                height={34}
                className="relative"
              />
            </motion.button>
          </motion.div>

          {/* Profile */}
          <div className="flex items-center gap-1.5 pr-2 pl-1.5 py-2 bg-[#CED7FF]/15 rounded-full">
            <Image
              src="/profile.png"
              alt="User Avatar"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-white font-semibold text-[14px]">{userAddress}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <motion.div animate={{ rotate: isProfileDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4 text-white" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Wallet section (centered) */}
        <div className="flex min-[780px]:hidden items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-3 py-1 pl-2 pr-1 rounded-[12px] border border-[#CED7FF]/10">
            <div className="flex items-center gap-2">
              <Image 
                src="/tether.png" 
                alt="USDT Icon"
                width={16}
                height={16}
                className=""  
              />
              <span className="text-white font-medium text-[14px]">{walletBalance}</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                className="p-1 bg-[#CED7FF]/10 rounded-full"
                onClick={() => setIsWalletDropdownOpen(!isWalletDropdownOpen)}
              >
                <motion.div animate={{ rotate: isWalletDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-[16px] h-[16px] text-white" />
                </motion.div>
              </button>

              <motion.button
                className="flex items-center justify-center btn btn-primary p-2 rounded-[8px] text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src="/Wallet.png" 
                  alt="Wallet Icon"
                  width={14}
                  height={14}
                  className=""
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button (right side) */}
        <motion.button
          className="flex min-[780px]:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 min-[780px]:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-[#1a1d3a] to-[#0f1123] z-50 min-[780px]:hidden border-l border-[#CED7FF]/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 space-y-6">
                {/* Close button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white/70 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Profile Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-[#CED7FF]/15 rounded-xl">
                    <Image
                      src="/profile.png"
                      alt="User Avatar"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-white font-medium text-sm">{userAddress}</p>
                      <p className="text-white/70 text-xs">Connected</p>
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                <div className="space-y-3">
                  <button className="flex items-center gap-3 w-full p-3 text-white hover:bg-[#CED7FF]/10 rounded-xl transition-colors">
                    <Image
                      src="/Belll.png" 
                      alt="Notifications"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-medium">Notifications</span>
                  </button>
                </div>

                {/* Full Deposit Button */}
                <motion.button
                  className="flex items-center justify-center w-full gap-2 btn btn-primary px-4 py-3 rounded-xl text-white font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image 
                    src="/Wallet.png" 
                    alt="Wallet Icon"
                    width={16}
                    height={16}
                  />
                  Deposit Funds
                </motion.button>

                {/* Additional Menu Items */}
                <div className="space-y-1 pt-4 border-t border-[#CED7FF]/10">
                  <button className="flex items-center gap-3 w-full p-3 text-white/70 hover:text-white hover:bg-[#CED7FF]/10 rounded-xl transition-colors text-sm">
                    Settings
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 text-white/70 hover:text-white hover:bg-[#CED7FF]/10 rounded-xl transition-colors text-sm">
                    Help & Support
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 text-white/70 hover:text-white hover:bg-[#CED7FF]/10 rounded-xl transition-colors text-sm">
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}