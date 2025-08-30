
interface SectionDividerProps {
}

export function SectionDivider({ }: SectionDividerProps) {
  return (
    <div className=" relative flex items-center justify-center w-full gap-[44px] -top-6">
      {/* Left line - only visible on larger screens and limited to 428px */}
      <div className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[428px] h-6 relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 427 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M415.528 20.3021H412.417L423.616 0.904686H426.727L415.528 20.3021Z" fill="#7852FF" />
          <path
            d="M397.011 22.0953H-522V21.0182H396.389L407.068 2.5211H408.312L397.011 22.0953Z"
            fill="#CED7FF"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      {/* Centered text */}
      <div className=" flex gap-[34px]">
        <h2 className="text-[14px] uppercase font-bold text-center text-white tracking-wider whitespace-nowrap">
          Waiting Room
        </h2>
        <h2 className="text-[14px] uppercase font-bold text-[#606481] text-center tracking-wider whitespace-nowrap">
            BETS
        </h2>
      </div>

      {/* Right line - full width on larger screens */}
      <div className="w-full max-w-[120px] sm:max-w-[250px] md:max-w-full h-[23px] relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 949 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M11.1982 19.3975H14.3096L3.11035 0H0L11.1982 19.3975Z" fill="#7852FF" />
          <path
            d="M29.7158 21.1906H948.727V20.1135H30.3379L19.6582 1.61641H18.415L29.7158 21.1906Z"
            fill="#CED7FF"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </div>
  )
}
