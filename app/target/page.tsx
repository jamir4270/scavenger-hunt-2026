"use client";

import Image from "next/image";

const STARS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: `${Math.floor((i * 41 + 11) % 100)}%`,
  left: `${Math.floor((i * 67 + 5) % 100)}%`,
  duration: `${1.5 + (i % 5) * 0.7}s`,
  delay: `${(i % 6) * 0.5}s`,
}));

export default function TargetPage() {
  return (
    <div
      className="scanlines relative min-h-screen pixel-grid overflow-hidden flex flex-col items-center justify-center px-4 py-10"
      style={{ background: "var(--bg)" }}
    >
      {/* Stars */}
      {STARS.map((s) => (
        <span
          key={s.id}
          className="star"
          style={
            {
              top: s.top,
              left: s.left,
              "--duration": s.duration,
              "--delay": s.delay,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Corner labels */}
      <div
        className="corner-label absolute top-3 left-3 sm:top-4 sm:left-4 text-[8px] sm:text-[9px] alert-flash"
        style={{ fontFamily: "var(--font-pixel)" }}
      >
        &#9632; ALERT &#9632;
      </div>
      <div
        className="corner-label absolute top-3 right-3 sm:top-4 sm:right-4 text-[8px] sm:text-[9px] alert-flash"
        style={{ fontFamily: "var(--font-pixel)" }}
      >
        &#9632; ALERT &#9632;
      </div>

      {/* Bounty card */}
      <div
        className="relative z-10 w-full max-w-xs sm:max-w-sm flex flex-col items-center gap-0 zoom-in gold-glow-pulse"
        style={{
          border: "6px solid var(--gold)",
          background: "#0a0a1f",
        }}
      >
        {/* Header bar */}
        <div
          className="w-full flex items-center justify-center py-3 px-4"
          style={{
            background: "var(--mario-red)",
            borderBottom: "4px solid var(--gold)",
          }}
        >
          <h1
            className="glow-pulse text-center leading-relaxed"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(16px, 5vw, 26px)",
              color: "#fff",
              letterSpacing: "0.1em",
            }}
          >
            &#9888; TARGET &#9888;
          </h1>
        </div>

        {/* Sub-header */}
        <div
          className="w-full flex items-center justify-center py-2"
          style={{
            background: "#0d0d22",
            borderBottom: "2px solid var(--gold)",
          }}
        >
          <p
            className="text-[9px] tracking-widest"
            style={{
              fontFamily: "var(--font-pixel)",
              color: "var(--mario-yellow)",
            }}
          >
            &#11088; FIND HER &#11088;
          </p>
        </div>

        {/* Photo */}
        <div
          className="relative w-full overflow-hidden"
          style={{ borderBottom: "4px solid var(--gold)" }}
        >
          {/* Scan sweep line */}
          <div className="scan-sweep" />

          {/* Red corner overlays for effect */}
          <div
            className="absolute top-0 left-0 w-6 h-6 z-10"
            style={{
              borderTop: "4px solid var(--mario-red)",
              borderLeft: "4px solid var(--mario-red)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-6 h-6 z-10"
            style={{
              borderTop: "4px solid var(--mario-red)",
              borderRight: "4px solid var(--mario-red)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-6 h-6 z-10"
            style={{
              borderBottom: "4px solid var(--mario-red)",
              borderLeft: "4px solid var(--mario-red)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-6 h-6 z-10"
            style={{
              borderBottom: "4px solid var(--mario-red)",
              borderRight: "4px solid var(--mario-red)",
            }}
          />

          <Image
            src="/target.jpg"
            alt="Target"
            width={400}
            height={400}
            className="w-full object-cover"
            style={{
              imageRendering: "auto",
              filter: "contrast(1.05) saturate(0.95)",
              display: "block",
            }}
            priority
          />

          {/* Crosshair overlay */}
          <div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            style={{ opacity: 0.18 }}
          >
            <div style={{ width: 80, height: 80, position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: 2,
                  background: "var(--mario-red)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: "var(--mario-red)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 8,
                  border: "2px solid var(--mario-red)",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bounty section */}
        <div
          className="w-full flex flex-col items-center gap-3 sm:gap-4 py-4 sm:py-5 px-4 sm:px-6 fade-in-up delay-4"
          style={{ background: "#06060f" }}
        >
          <div className="w-full flex items-center justify-center gap-3">
            <div
              className="flex-1 h-px"
              style={{ background: "var(--gold)", opacity: 0.5 }}
            />
            <p
              className="text-[8px] tracking-widest px-2"
              style={{ fontFamily: "var(--font-pixel)", color: "var(--gold)" }}
            >
              BOUNTY
            </p>
            <div
              className="flex-1 h-px"
              style={{ background: "var(--gold)", opacity: 0.5 }}
            />
          </div>

          <p
            className="text-center leading-loose glow-pulse"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(9px, 2.5vw, 11px)",
              color: "var(--cyan)",
            }}
          >
            SCAVENGER HUNT
            <br />
            COMPLETION
          </p>

          <div className="w-full flex items-center justify-center gap-3">
            <div
              className="flex-1 h-px"
              style={{ background: "var(--gold)", opacity: 0.5 }}
            />
            <span style={{ color: "var(--mario-yellow)", fontSize: 10 }}>
              &#9670;
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "var(--gold)", opacity: 0.5 }}
            />
          </div>

          <p
            className="text-[7px] text-center opacity-60 leading-relaxed"
            style={{
              fontFamily: "var(--font-pixel)",
              color: "var(--light-blue)",
            }}
          >
            SUBJECT IDENTIFIED
            <br />
            MISSION COMPLETE
          </p>
        </div>

        {/* Footer bar */}
        <div
          className="w-full flex items-center justify-center py-2"
          style={{
            background: "var(--dark-brown)",
            borderTop: "4px solid var(--gold)",
          }}
        >
          <p
            className="text-[8px] tracking-widest flicker"
            style={{
              fontFamily: "var(--font-pixel)",
              color: "var(--mario-yellow)",
            }}
          >
            &#9632; CS SCAVENGER HUNT 2026 &#9632;
          </p>
        </div>
      </div>

      {/* Bottom text */}
      <p
        className="relative z-10 mt-8 text-[8px] text-center opacity-40"
        style={{ fontFamily: "var(--font-pixel)", color: "var(--light-blue)" }}
      >
        YOU FOUND THE TARGET &bull; CONGRATULATIONS
      </p>
    </div>
  );
}
