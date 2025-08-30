interface SectionDividerProps {
}

export function SectionDivider({ }: SectionDividerProps) {
  return (
    <div className="relative flex items-center justify-center w-full gap-4 sm:gap-[44px] -top-3 sm:-top-6">
      {/* Left line - mobile version on small screens, original on larger screens */}
      <div className="w-full max-w-[94px] sm:max-w-[300px] md:max-w-[428px] h-6 relative overflow-hidden">
        {/* Mobile SVG */}
        <svg
          className="absolute inset-0 w-full h-full sm:hidden"
          width="94"
          height="22"
          viewBox="0 0 94 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M82.5283 19.8021H79.417L90.6162 0.404686H93.7266L82.5283 19.8021Z" fill="#7852FF"/>
          <path d="M64.0107 21.5953H-855V20.5182H63.3887L74.0684 2.0211H75.3115L64.0107 21.5953Z" fill="#CED7FF" fillOpacity="0.1"/>
        </svg>
        
        {/* Desktop SVG */}
        <svg
          className="absolute inset-0 w-full h-full hidden sm:block"
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
      <div className="flex gap-4 sm:gap-[34px]">
        <h2 className="text-xs sm:text-[14px] uppercase font-bold text-center text-white tracking-wider whitespace-nowrap">
          Waiting Room
        </h2>
        <h2 className="text-xs sm:text-[14px] uppercase font-bold text-[#606481] text-center tracking-wider whitespace-nowrap">
            BETS
        </h2>
      </div>

      {/* Right line - mobile version on small screens, original on larger screens */}
      <div className="w-full max-w-[94px] sm:max-w-[250px] md:max-w-full h-[23px] relative overflow-hidden">
        {/* Mobile SVG */}
        <svg
          className="absolute inset-0 w-full h-full sm:hidden"
          width="94"
          height="22"
          viewBox="0 0 94 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.9248 19.8021H15.0361L3.83691 0.404686H0.726562L11.9248 19.8021Z" fill="#7852FF"/>
          <path d="M30.4424 21.5953H949.453V20.5182H31.0645L20.3848 2.0211H19.1416L30.4424 21.5953Z" fill="#CED7FF" fillOpacity="0.1"/>
        </svg>
        
        
        {/* Desktop SVG */}
        <svg
          className="absolute inset-0 w-full h-full hidden sm:block"
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