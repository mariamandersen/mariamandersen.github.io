import { useState } from "react";
import HjemSkjerm from "@/imports/HjemSkjerm";
import ForecastAir from "@/imports/ForecastAir";
import ForecastGround from "@/imports/ForecastGround";
import GreenScreen from "@/imports/GreenScreen";
import YellowScreen from "@/imports/YellowScreen";
import RedScreen from "@/imports/RedScreen";

const screens = [
  { id: "home", label: "Home", sublabel: "Launch overview", component: HjemSkjerm },
  { id: "forecast-air", label: "Forecast", sublabel: "Air conditions", component: ForecastAir },
  { id: "forecast-ground", label: "Forecast", sublabel: "Ground conditions", component: ForecastGround },
  { id: "green", label: "Ready to Launch", sublabel: "Go decision", component: GreenScreen },
  { id: "yellow", label: "Reevaluate", sublabel: "Hold decision", component: YellowScreen },
  { id: "red", label: "Do Not Launch", sublabel: "No-go decision", component: RedScreen },
];

// The imported screens are 412px × ~916px
const SCREEN_W = 412;
const SCREEN_H = 917;

export default function App() {
  const [active, setActive] = useState(0);
  const Screen = screens[active].component;

  return (
    <div
      className="skybound-embed"
      style={{
        background: "linear-gradient(135deg, #0a0a14 0%, #0f0f23 40%, #0d1a2e 70%, #080c18 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.25em] uppercase text-indigo-400/70 mb-3 font-medium">
          Portfolio · Mobile App Design
        </p>
        <h1 className="text-white text-3xl font-semibold tracking-tight mb-2">
          Rocket Launch Planner
        </h1>
        <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
          A weather-aware scheduling app for planning safe rocket launches at Ole-Johan Dahls hus.
        </p>
      </div>

      {/* Phone mockup + screen tabs laid out side by side on wide screens */}
      <div className="mockup-layout">

        {/* Android phone frame */}
        <div className="relative flex-shrink-0 mockup-phone" style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(99,102,241,0.15))" }}>
          {/* Outer shell */}
          <div
            className="relative"
            style={{
              width: 448,
              height: 964,
              borderRadius: 52,
              background: "linear-gradient(160deg, #2a2a3e 0%, #18182a 50%, #111120 100%)",
              boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.08), inset 2px 2px 8px rgba(255,255,255,0.03)",
              padding: "14px 18px",
            }}
          >
            {/* Side buttons */}
            <div className="absolute" style={{ left: -4, top: 120, width: 4, height: 36, background: "#1e1e30", borderRadius: "3px 0 0 3px" }} />
            <div className="absolute" style={{ left: -4, top: 170, width: 4, height: 64, background: "#1e1e30", borderRadius: "3px 0 0 3px" }} />
            <div className="absolute" style={{ left: -4, top: 248, width: 4, height: 64, background: "#1e1e30", borderRadius: "3px 0 0 3px" }} />
            <div className="absolute" style={{ right: -4, top: 180, width: 4, height: 80, background: "#1e1e30", borderRadius: "0 3px 3px 0" }} />

            {/* Inner bezel */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 40,
                background: "#000",
              }}
            >
              {/* Status bar */}
              <div
                className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6"
                style={{ height: 36, background: "rgba(255,255,255,0.97)" }}
              >
                <span className="text-[11px] font-semibold text-black">9:41</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal */}
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                    <rect x="0" y="6" width="3" height="6" rx="0.5" fill="#1a1a1a"/>
                    <rect x="4.5" y="4" width="3" height="8" rx="0.5" fill="#1a1a1a"/>
                    <rect x="9" y="2" width="3" height="10" rx="0.5" fill="#1a1a1a"/>
                    <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#1a1a1a"/>
                  </svg>
                  {/* Wifi */}
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#1a1a1a"/>
                    <path d="M3.5 6.5a6.5 6.5 0 0 1 9 0" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M1 3.5a10 10 0 0 1 14 0" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {/* Battery */}
                  <div className="flex items-center">
                    <div style={{ width: 22, height: 11, border: "1.2px solid #1a1a1a", borderRadius: 2.5, padding: "1.5px", position: "relative" }}>
                      <div style={{ position: "absolute", right: -4, top: "50%", transform: "translateY(-50%)", width: 2.5, height: 5, background: "#1a1a1a", borderRadius: "0 1px 1px 0" }} />
                      <div style={{ width: "80%", height: "100%", background: "#1a1a1a", borderRadius: 1 }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Punch-hole camera */}
              <div
                className="absolute z-20"
                style={{ top: 8, left: "50%", transform: "translateX(-50%)", width: 14, height: 14, background: "#000", borderRadius: "50%" }}
              />

              {/* App screen rendered at 412×916, scaled to fit phone interior */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: 36,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: SCREEN_W,
                    height: SCREEN_H,
                    transform: `scale(${(448 - 36) / SCREEN_W})`,
                    transformOrigin: "top left",
                  }}
                >
                  <Screen />
                </div>
              </div>

              {/* Home indicator bar */}
              <div
                className="absolute bottom-2 left-1/2 z-20"
                style={{ transform: "translateX(-50%)", width: 120, height: 4, background: "rgba(0,0,0,0.3)", borderRadius: 2 }}
              />
            </div>
          </div>
        </div>

        {/* Screen picker tabs */}
        <div className="mockup-picker flex flex-col gap-2 w-full max-w-xs">
          <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-2 font-medium">App Screens</p>
          {screens.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              aria-label={`${s.label}: ${s.sublabel}`}
              className="text-left px-4 py-3 rounded-xl transition-all duration-200 group"
              style={{
                background: active === i
                  ? "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.15) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: active === i
                  ? "1px solid rgba(99,102,241,0.4)"
                  : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all"
                  style={{ background: active === i ? "#818cf8" : "rgba(255,255,255,0.15)" }}
                />
                <div>
                  <p className={`text-sm font-medium transition-colors ${active === i ? "text-indigo-300" : "text-slate-400 group-hover:text-slate-300"}`}>
                    {s.label}
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">{s.sublabel}</p>
                </div>
              </div>
            </button>
          ))}

          {/* Dot nav */}
          <div className="flex gap-2 mt-4 px-4">
            {screens.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`${s.label}: ${s.sublabel}`}
                aria-pressed={active === i}
                className="transition-all duration-300"
                style={{
                  width: active === i ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: active === i ? "#818cf8" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer tag */}
      <p className="mt-12 text-[11px] tracking-widest uppercase text-slate-700">
        React · Figma · Material Design 3
      </p>
    </div>
  );
}
