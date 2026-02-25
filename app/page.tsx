"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const STARS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  top: `${Math.floor((i * 37 + 7) % 100)}%`,
  left: `${Math.floor((i * 53 + 13) % 100)}%`,
  duration: `${1.5 + (i % 5) * 0.7}s`,
  delay: `${(i % 7) * 0.4}s`,
}));

export default function Home() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow letters and symbols (no numbers)
    const filtered = e.target.value.replace(/[0-9]/g, "");
    setInput(filtered);
    if (error) setError("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
    if (e.key === "Enter") handleSubmit();
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      setError("ENTER A PASSWORD!");
      triggerShake();
      return;
    }
    if (input === "findme!") {
      setSuccess(true);
      setTimeout(() => router.push("/target"), 1000);
    } else {
      setError("WRONG PASSWORD. TRY AGAIN.");
      triggerShake();
      setInput("");
    }
  };

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  };

  return (
    <div
      className="scanlines relative min-h-screen pixel-grid overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      {/* Decorative pixel stars */}
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

      {/* Corner decorations */}
      <div
        className="absolute top-4 left-4 text-[10px] flicker"
        style={{
          color: "var(--mario-yellow)",
          fontFamily: "var(--font-pixel)",
        }}
      >
        PLAYER 1
      </div>
      <div
        className="absolute top-4 right-4 text-[10px] flicker"
        style={{
          color: "var(--mario-yellow)",
          fontFamily: "var(--font-pixel)",
        }}
      >
        2026
      </div>
      <div
        className="absolute bottom-4 left-4 text-[9px]"
        style={{ color: "var(--mario-blue)", fontFamily: "var(--font-pixel)" }}
      >
        &#9632;&#9632;&#9632;&#9632;&#9632;
      </div>
      <div
        className="absolute bottom-4 right-4 text-[9px]"
        style={{ color: "var(--mario-blue)", fontFamily: "var(--font-pixel)" }}
      >
        &#9632;&#9632;&#9632;&#9632;&#9632;
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-12 w-full max-w-xl">
        {/* Title block */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p
            className="text-[9px] tracking-[0.4em] flicker"
            style={{
              color: "var(--mario-yellow)",
              fontFamily: "var(--font-pixel)",
            }}
          >
            &#11088; WELCOME TO &#11088;
          </p>
          <h1
            className="glow-cyan flicker leading-loose"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(14px, 3.5vw, 22px)",
              color: "var(--cyan)",
              letterSpacing: "0.05em",
              lineHeight: 2,
            }}
          >
            CS SCAVENGER
            <br />
            HUNT 2026
          </h1>
          <div
            className="w-full h-px mt-1"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--cyan), transparent)",
            }}
          />
          <p
            className="text-[9px] mt-1"
            style={{ color: "var(--gold)", fontFamily: "var(--font-pixel)" }}
          >
            ENTER THE SECRET PASSWORD TO PROCEED
          </p>
        </div>

        {/* Input area */}
        <div
          className={`w-full flex flex-col gap-4 items-center ${shaking ? "shake" : ""}`}
        >
          <div
            className="w-full pixel-border p-1"
            style={{ background: "#0a0a1f" }}
          >
            <div className="flex items-center gap-2 px-3 py-2">
              <span
                className="text-[12px] blink"
                style={{
                  color: "var(--cyan)",
                  fontFamily: "var(--font-pixel)",
                }}
              >
                &#9658;
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="_ _ _ _ _ _ _"
                maxLength={30}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                disabled={success}
                className="w-full bg-transparent border-none outline-none text-[12px] tracking-widest placeholder-opacity-30"
                style={{
                  fontFamily: "var(--font-pixel)",
                  color: "var(--cyan)",
                  caretColor: "var(--cyan)",
                }}
              />
            </div>
          </div>

          {/* Error message */}
          <div className="h-5 text-center">
            {error && (
              <p
                className="text-[9px]"
                style={{
                  color: "var(--mario-red)",
                  fontFamily: "var(--font-pixel)",
                }}
              >
                &#10005; {error}
              </p>
            )}
            {success && (
              <p
                className="text-[9px] glow-cyan"
                style={{
                  color: "var(--cyan)",
                  fontFamily: "var(--font-pixel)",
                }}
              >
                &#10003; ACCESS GRANTED! LOADING...
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={success}
            className="pixel-btn w-full py-4 text-[11px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            SUBMIT
          </button>
        </div>

        {/* Bottom hint */}
        <p
          className="text-[8px] text-center opacity-40"
          style={{
            color: "var(--light-blue)",
            fontFamily: "var(--font-pixel)",
          }}
        >
          NO NUMBERS ALLOWED &bull; LETTERS &amp; SYMBOLS ONLY
        </p>
      </div>
    </div>
  );
}
