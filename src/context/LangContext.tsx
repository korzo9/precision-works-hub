import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "hr";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, hr: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (en: string, hr: string) => (lang === "en" ? en : hr);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
