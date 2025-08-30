import Image from "next/image"

function PicksCard({
  playerName,
  color,
  backgroundColor,
}: {
  playerName: string
  color: string
  backgroundColor: string
}) {
  const picks = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Solana", symbol: "SOL" },
    { name: "Cardano", symbol: "ADA" },
    { name: "Polkadot", symbol: "DOT" },
  ]

  return (
    <div className="relative w-[192px] h-[254px] ">
      {/* Main card container */}
      <div className=" border-2 border-[#CED7FF]/10 rounded-xl p-1">
      <div
        className="w-full h-full rounded-[10px] flex flex-col relative z-10 overflow-hidden"
        style={{
          background: backgroundColor,
        }}
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-2.5 z-20 -translate-y-1/2">
          <div className="absolute inset-0 rounded-[5px] bg-[#CED7FF]/10" style={{ backgroundColor: color }} />
          <div className="absolute inset-0 rounded-[5px] blur-[8px] opacity-60" style={{ backgroundColor: color }} />
          <div className="absolute inset-0 rounded-[5px] blur-[16px] opacity-40" style={{ backgroundColor: color }} />
        </div>

        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div
              className="w-[22px] h-[22px] bg-[#CED7FF] flex items-center justify-center overflow-hidden"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                borderRadius: "4px",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk4BFXnO3mO7RQdsgicjzpAtZX7zbU.png"
                alt={`${playerName}'s avatar`}
                width={22}
                height={22}
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-white font-semibold text-xs leading-[18px]"
              style={{ fontFamily: "Bai Jamjuree, sans-serif" }}
            >
              {playerName}'S PICKS
            </span>
          </div>
        </div>

        {/* Picks list */}
        <div className="flex-1">
          {picks.map((pick, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-3 py-2.5 ${
                index < picks.length - 1 ? "border-b border-[#CED7FF]/10" : ""
              }`}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#CED7FF]/10" />
                <span
                  className="text-white font-semibold text-xs leading-[18px]"
                  style={{ fontFamily: "Bai Jamjuree, sans-serif" }}
                >
                  {pick.name}
                </span>
              </div>
              <span
                className="text-[#9C9EB3] font-semibold text-xs leading-[18px] uppercase"
                style={{ fontFamily: "Bai Jamjuree, sans-serif" }}
              >
                {pick.symbol}
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

function WaitingCard() {
  return (
    <div className="relative w-full h-[60px] md:w-[192px] md:h-[254px] ">
      {/* Main card container */}
      <div
        className="w-full h-full rounded-xl flex flex-col items-center justify-center relative z-10 overflow-hidden bg-[#CED7FF]/5"
      >
        <span
          className="text-[#9C9EB3] font-semibold text-xs leading-[18px] text-center"
          style={{ fontFamily: "Bai Jamjuree, sans-serif" }}
        >
          WAITING FOR PLAYER
        </span>
      </div>
    </div>
  )
}

export default function DavidsPicks() {
  return (
    <div className=" relative w-full flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4 justify-evenly">
      {/* Player cards - side by side on all screen sizes */}
      <div className="flex flex-row gap-4 justify-center md:contents">
        <PicksCard playerName="DAVID" color="#FF52E8" backgroundColor="rgba(255, 82, 232, 0.08)" />
        <PicksCard playerName="PLAYER 2" color="#7852FF" backgroundColor="rgba(120, 82, 255, 0.08)" />
      </div>

      <div className=" flex flex-col gap-2 md:gap-4 w-full md:contents">
        
          <WaitingCard />
        
        
          <WaitingCard />
        
          <WaitingCard />
        
      </div>
    </div>
  )
}
