import { useEffect, useState } from "react";

export type HubLanguage = "cs" | "en";

export const HUB_LANGUAGE_KEY = "hub-language";
export const HUB_LANGUAGE_EVENT = "hub-language-change";

export function readHubLanguage(): HubLanguage {
  if (typeof window === "undefined") return "cs";
  return window.localStorage.getItem(HUB_LANGUAGE_KEY) === "en" ? "en" : "cs";
}

export function applyHubLanguage(language: HubLanguage) {
  if (typeof document === "undefined") return;
  document.body.classList.toggle("lang-en", language === "en");
  document.documentElement.lang = language;
}

export function persistHubLanguage(language: HubLanguage) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(HUB_LANGUAGE_KEY, language);
  applyHubLanguage(language);
  window.dispatchEvent(new CustomEvent(HUB_LANGUAGE_EVENT, { detail: language }));
}

export function useHubLanguage() {
  const [language, setLanguageState] = useState<HubLanguage>("cs");

  useEffect(() => {
    const sync = () => {
      const nextLanguage = readHubLanguage();
      setLanguageState(nextLanguage);
      applyHubLanguage(nextLanguage);
    };

    sync();
    window.addEventListener(HUB_LANGUAGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(HUB_LANGUAGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const setLanguage = (nextLanguage: HubLanguage) => {
    setLanguageState(nextLanguage);
    persistHubLanguage(nextLanguage);
  };

  return [language, setLanguage] as const;
}
