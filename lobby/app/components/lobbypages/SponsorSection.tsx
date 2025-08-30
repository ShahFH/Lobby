"use client"
import SVGBackground from './svg-background'
import "../../globals.css"
import { ChevronLeft, Copy, Settings } from "lucide-react";
import DavidsPicks from './davids-picks'
import { motion } from "framer-motion"

const playersData = [
  {
    id: 1,
    name: "DAVID",
    status: "PICKING TOKENS..",
    isActive: true,
    isSponsor: true,
    avatarBg: "https://c.animaapp.com/2s7BMdxA/img/polygon-2.svg",
    avatarImg: "https://c.animaapp.com/2s7BMdxA/img/polygon-3@2x.png",
  },
  {
    id: 2,
    name: "PLAYER 2",
    status: "PICKING TOKENS..",
    isActive: true,
    isSponsor: false,
    avatarBg: "https://c.animaapp.com/2s7BMdxA/img/polygon-2-1.svg",
    avatarImg: "https://c.animaapp.com/2s7BMdxA/img/polygon-3-1.svg",
  },
  {
    id: 3,
    name: "PLAYER 3",
    status: "WAITING FOR PLAYER",
    isActive: false,
    isSponsor: false,
    avatarImg: "/PolygonShap.png",
  },
  {
    id: 4,
    name: "PLAYER 4",
    status: "WAITING FOR PLAYER",
    isActive: false,
    isSponsor: false,
    avatarImg: "/PolygonShap.png",
  },
  {
    id: 5,
    name: "PLAYER 5",
    status: "WAITING FOR PLAYER",
    isActive: false,
    isSponsor: false,
    avatarImg: "/PolygonShap.png",
  },
]

const vsImages = [
  "https://c.animaapp.com/2s7BMdxA/img/vs.svg",
  "https://c.animaapp.com/2s7BMdxA/img/vs-1.svg",
  "https://c.animaapp.com/2s7BMdxA/img/vs-3.svg",
  "https://c.animaapp.com/2s7BMdxA/img/vs-3.svg",
]

const playSound = (file: string) => {
  const audio = new Audio(file);
  audio.currentTime = 0; // restart if spam-click
  audio.play();
};


const PlayerAvatar = ({ player }) => {

  if (player.avatarBg) {
    return (
      <div
        className="relative w-[53px] h-[58px] md:w-[62px] md:h-[67px] lg:w-[71px] lg:h-[77px] top-0.5 left-[3px] md:left-[4px] lg:left-[5px] z-10"
        style={{
          backgroundImage: `url(${player.avatarBg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <img
          className="absolute w-[42px] h-[46px] md:w-[50px] md:h-[54px] lg:w-[57px] lg:h-[62px] top-1.5 md:top-1.5 lg:top-2 left-[5px] md:left-[6px] lg:left-[7px] object-cover"
          alt="Player Avatar"
          src={player.avatarImg}
        />
      </div>
    )
  }

  return (
    <img
      className="relative w-[58px] h-[63px] md:w-[67px] md:h-[73px] lg:w-[77.08px] lg:h-[84.05px] z-10"
      alt="Player Avatar"
      src={player.avatarImg}
    />
  )
}

// Manual button components for each player
const DavidButton = () => {
  return (
    <div 
    onClick={() => playSound("/audio/david.wav")}
    className="btn-accent-pink2 btn text-white cursor-pointer">
      Place a bet
    </div>
  )
}

const Player2Button = () => {
  return (
    <div 
    onClick={() => playSound("/audio/pl2.wav")}
    className=" text-white btn btn-accent-violet cursor-pointer">
      Place a bet
    </div>
  )
}

const InactivePlayerButton = () => {
  return (
    <motion.div className="inline-flex items-center cursor-pointer btn btn-primary text-white justify-center gap-[var(--3-spacing-spacing-xs)] pt-[var(--3-spacing-spacing-md)] pr-[var(--3-spacing-spacing-lg)] pb-[var(--3-spacing-spacing-md)] pl-[var(--3-spacing-spacing-lg)] rounded-[var(--2-radius-radius-lg)] overflow-hidden shadow-[inset_0px_1px_0px_#ffffff63,inset_0px_-2px_0px_#00000038] bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(120,82,255,1)_0%,rgba(120,82,255,1)_100%)]"
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(120, 82, 255, 0.5)" }}
    whileTap={{ scale: 0.95 }}
    onClick={() => playSound("/audio/player.wav")}
    >
      Join 100$
    </motion.div>
  )
}

const getPlayerButton = (player) => {
  switch (player.id) {
    case 1:
      return <DavidButton />
    case 2:
      return <Player2Button />
    default:
      return <InactivePlayerButton />
  }
}

export const SponsorSection = () => {
  return (
    <section className=" w-full flex flex-col px-1 md:px-[36px] py-4 gap-4">
      {/* Header */}
      <div className="w-full px-4 sm:px-6 py-4 flex bg-[#CED7FF]/7 items-center justify-between sm:justify-evenly cut-corners-all">
      {/* Back Button - Only arrow on mobile */}
      <button className="btn btn-secondary flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
        <ChevronLeft className="w-5 h-5 text-[#757995]" />
        <span className="font-medium hidden sm:inline">Back</span>
      </button>

      {/* Divider - Hidden on mobile */}
      <div className="w-px h-12 bg-gradient-to-b from-white/15 to-transparent hidden sm:block"></div>
      
      {/* Game ID - Hidden on mobile */}
      <div className="flex flex-col items-start hidden sm:flex">
        <div className="text-gray-400 text-[12px] font-semibold">Game Id:</div>
        <div className="text-white font-semibold text-[18px]">#G1A2B3</div>
      </div>

      {/* Divider - Hidden on mobile */}
      <div className="w-px h-12 bg-gradient-to-b from-white/15 to-transparent hidden sm:block"></div>

      {/* Waiting Timer - Always visible, centered on mobile */}
      <div className="flex flex-col items-center text-center flex-1 sm:flex-initial">
        <div className="text-purple-400 font-bold text-sm tracking-wider">WAITING</div>
        <div className="text-white text-xl font-bold text-[22px]">1m 34s</div>
      </div>

      {/* Divider - Hidden on mobile */}
      <div className="w-px h-12 bg-gradient-to-b from-white/15 to-transparent hidden sm:block"></div>

      {/* Stake - Hidden on mobile */}
      <div className="flex flex-col items-end text-center hidden sm:flex">
        <div className="text-gray-400 font-semibold text-[12px]">Stake:</div>
        <div className="text-white font-semibold text-[18px]">100$</div>
      </div>

      {/* Divider - Hidden on mobile */}
      <div className="w-px h-12 bg-gradient-to-b from-white/15 to-transparent hidden sm:block"></div>

      {/* Referral Link (Desktop) / Settings Icon (Mobile) */}
      <button className="btn btn-accent-cyan flex items-center gap-2">
        {/* Mobile: Settings Icon */}
        <Settings className="w-5 h-5 sm:hidden" />
        
        {/* Desktop: Referral Link */}
        <span className="hidden sm:inline">Referral link</span>
        <Copy className="w-4 h-4 hidden sm:inline" />
      </button>
    </div>

      {/* Players Section */}
      <div className="w-full mx-auto ">
        <div className="relative w-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <SVGBackground className="w-full h-full" preserveAspectRatio="none" />
          </div>

          <div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            
          />

          <div className="relative z-10 p-4">
            <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 lg:gap-0"
            
            >
              {playersData.map((player, index) => (
                <div key={player.id} className="relative">
                  <div className="flex md:flex-col lg:flex-col items-center md:justify-center lg:justify-center gap-4 md:gap-[18px] lg:gap-[18px] py-4 md:py-8 lg:py-16 px-4">
                    {/* Avatar */}
                    <div className="relative w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[82px] lg:h-[82px] flex-shrink-0">
                      <PlayerAvatar player={player} />
                    </div>

                    {/* Name and Status */}
                    <div className="flex flex-col md:items-center lg:items-center gap-1 flex-grow md:flex-grow-0 lg:flex-grow-0">
                      <div className="[font-family:'Bai_Jamjuree',Helvetica] font-bold text-white text-sm md:text-sm lg:text-base tracking-[0] leading-6 lg:leading-7 whitespace-nowrap">
                        {player.name}
                      </div>
                      <div className="[font-family:'Bai_Jamjuree',Helvetica] font-medium text-gray-400 text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                        {player.status}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">{getPlayerButton(player)}</div>

                    {/* Sponsor Badge */}
                    {player.isSponsor && (
                      <div className="absolute -top-2 left-4 md:top-2 md:left-1/2 md:transform md:-translate-x-1/2 lg:top-4 lg:left-1/2 lg:transform lg:-translate-x-1/2">
                        <div className="inline-flex items-center justify-center gap-2.5 px-2 py-1 bg-1-color-colors-background-bg-brand-secondary rounded">
                          <div className="font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[color:var(--1-color-colors-foreground-fg-brand)] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                            SPONSOR
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* VS Dividers */}
                  {index < playersData.length - 1 && (
                    <>
                      {/* Desktop dividers */}
                      <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-[#ced7ff0d]" />
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <img className="w-[31px] h-[31px]" alt="VS" src={vsImages[index] || "/placeholder.svg"} />
                      </div>

                      {/* Tablet dividers */}
                      <div className="hidden md:block lg:hidden absolute top-0 right-0 w-px h-full bg-[#ced7ff0d]" />
                      <div className="hidden md:block lg:hidden absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <img className="w-[25px] h-[25px]" alt="VS" src={vsImages[index] || "/placeholder.svg"} />
                      </div>

                      {/* Mobile dividers */}
                      <div className="md:hidden relative w-full h-px bg-[#ced7ff0d] mx-4">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 rounded-full">
                          <img className="w-[31px] h-[31px]" alt="VS" src={vsImages[index] || "/placeholder.svg"} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          </div>
      </div>
      <DavidsPicks />

    </section>
  )
}