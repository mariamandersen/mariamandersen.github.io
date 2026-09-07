import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

type Lang = "no" | "en";

function getSavedLang(): Lang {
  try {
    return localStorage.getItem("preferredLanguage") === "en" ? "en" : "no";
  } catch {
    return "no";
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getSavedLang);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  function handleToggleLang(l: Lang) {
    setLang(l);
    document.documentElement.setAttribute("lang", l);
    try { localStorage.setItem("preferredLanguage", l); } catch {}
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} onToggleLang={handleToggleLang} />} />
        <Route path="/prosjekt/:slug" element={<ProjectPage lang={lang} onToggleLang={handleToggleLang} />} />
        <Route path="*" element={<HomePage lang={lang} onToggleLang={handleToggleLang} />} />
      </Routes>
    </BrowserRouter>
  );
}
