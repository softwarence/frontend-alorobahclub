"use client";

const COLORS = {
  // Visually extracted from the image
  DEEP_BLACK: "#121212",
  HIGHLIGHT_YELLOW: "#FFD700",
  ACCENT_GREEN: "#00A651",
  ACCENT_BLUE: "#005A9C",
  CARD_DARK_BG: "#1E1E1E",
  TEXT_GRAY: "#AAAAAA",
  LOGO_BG: "#2A2A2A",
};

const matches = [
  {
    date: "21ST NOVEMBER",
    time: "1:45 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: true,
    logoA: "url(/logo-ur-blue.png)",
    logoB: "url(/logo-red.png)",
  },
  {
    date: "20TH DECEMBER",
    time: "5:30 PM AST",
    venue: "Al Hazm Club Stadium",
    isHighlighted: false,
    logoA: "url(/logo-ur-blue.png)",
    logoB: "url(/logo-yellow.png)",
  },
  {
    date: "23RD DECEMBER",
    time: "6:15 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: false,
    logoA: "url(/logo-ur-yellow.png)",
    logoB: "url(/logo-black.png)",
  },
  {
    date: "27TH DECEMBER",
    time: "5:30 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: false,
    logoA: "url(/logo-ur-yellow.png)",
    logoB: "url(/logo-white.png)",
  },
  {
    date: "27TH DECEMBER",
    time: "5:30 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: false,
    logoA: "url(/logo-ur-yellow.png)",
    logoB: "url(/logo-white.png)",
  },
];

// --- Match Card Component ---
const MatchCard = ({ match }) => {
  const isHighlighted = match.isHighlighted;

  const cardStyle = isHighlighted
    ? `bg-[${COLORS.HIGHLIGHT_YELLOW}] text-black border-none transform scale-105 shadow-2xl shadow-yellow-500/50 cut-corner`
    : `bg-[${COLORS.CARD_DARK_BG}] text-white border border-gray-800 hover:bg-gray-800 transition-colors cut-corner`;

  const vColor = isHighlighted ? "text-black" : "text-yellow-400";
  const timeColor = isHighlighted ? "text-gray-900" : "text-gray-400";
  const venueColor = isHighlighted ? "text-gray-700" : `text-[${COLORS.TEXT_GRAY}]`;

  return (
    <div
      className={`rounded-xl overflow-hidden cursor-pointer w-[240px] h-[200px] flex-shrink-0 ${cardStyle} transition-all duration-300`}
    >
      <div className="p-4 pt-6 flex flex-col justify-between h-full">
        {/* Logos Section */}
        <div className="flex justify-center items-center h-1/2">
          {/* Logo A */}
          <div
            className={`w-12 h-12 rounded-full border-2 border-gray-700`}
            style={{
              backgroundImage: match.logoA,
              backgroundColor: isHighlighted ? "rgba(0,0,0,0.1)" : COLORS.LOGO_BG,
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <span className={`text-xl font-extrabold mx-3 ${vColor}`}>V</span>

          {/* Logo B */}
          <div
            className={`w-12 h-12 rounded-full border-2 border-gray-700`}
            style={{
              backgroundImage: match.logoB,
              backgroundColor: isHighlighted ? "rgba(0,0,0,0.1)" : COLORS.LOGO_BG,
              backgroundSize: "80%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Details Section */}
        <div className="text-center h-1/2 flex flex-col justify-end pb-2">
          <p
            className={`text-sm font-extrabold tracking-wider uppercase ${isHighlighted ? "text-black" : "text-white"}`}
          >
            {match.date}
          </p>
          <p className={`text-xs font-semibold mt-1 ${timeColor}`}>{match.time}</p>
          <p className={`text-[10px] font-light mt-1 ${venueColor}`}>{match.venue}</p>
        </div>
      </div>
    </div>
  );
};

function MatchSchedule() {
  return (
    <div className="hero flex justify-center">
      {/* Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto p-4 sm:p-8 pt-10 text-white">
        {/* Header Section */}
        <div className="text-center mb-10 pt-10">
          <h1 className={`text-3xl font-extrabold tracking-[5px] uppercase`}>UPCOMING MATCH</h1>
        </div>

        {/* Featured Match Section */}
        <div className="flex flex-col items-center mb-12">
          {/* Featured Logos */}
          <div className="flex items-center space-x-10 mb-4">
            <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-gray-600 shadow-lg">
              {/* Logo A */}
            </div>
            <span className="text-4xl font-bold text-gray-300">V</span>
            <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-gray-600 shadow-lg">
              {/* Logo B */}
            </div>
          </div>

          {/* Featured Details */}
          <p className={`text-lg font-medium`}>
            6th November | <span className="text-yellow-400 font-bold">5:00 PM AST</span> | King
            Abdullah Sport City
          </p>

          {/* Countdown Timer (using the bright style from the image) */}
          <div className="flex space-x-6 text-center mt-6">
            {["02", "23", "20", "56"].map((value, index) => (
              <div key={index} className="flex flex-col">
                <span className={`text-3xl font-bold`}>{value}</span>
                <span className={`text-xs uppercase mt-1`}>
                  {["DAYS", "HRS", "MIN", "SEC"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Match Cards Scroller */}
        <div className="flex overflow-x-auto space-x-5 pb-4 px-4 -mx-4">
          {matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </div>
      </div>

      {/* Custom style to hide scrollbar */}
      <style jsx global>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default MatchSchedule;
