import { useContext } from "react";
import { LanguageContext, translations } from "./LanguageContext";

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Dev-time fallback to prevent blank-screen loops during HMR
    if (import.meta.env.DEV) {
      console.warn("useLanguage: context unavailable (HMR). Falling back to English.");
      return {
        language: "en" as const,
        setLanguage: () => {},
        t: (key: string) => translations[key]?.en || key,
        isRTL: false,
      };
    }
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
