import KA_LANG from "./ka.json";
import EN_LANG from "./en.json";

import { useCallback, useEffect, useState } from "react";

const languageService = () => {
    const [language, setLanguage] = useState<string>(() => {
        const storedLanguage = localStorage.getItem("storedLanguage");

        return storedLanguage || "en";
    });

    const changeLanguage = useCallback(
        (keyCode: string) => {
            if (!keyCode) {
                throw new Error("Language code is required.");
            }

            if (keyCode.length != 2) return;

            setLanguage(keyCode);
        },

        [],
    );

    useEffect(() => {
        localStorage.setItem("storedLanguage", language);
    }, [language]);

    const translations = {
        en: EN_LANG,
        ka: KA_LANG,
    };

    type LanguageCode = keyof typeof translations;
    const isSupportedLanguage = Object.keys(translations) as LanguageCode[];

    return {
        isSupportedLanguage,
        language,
        translations: translations[language as keyof typeof translations],
        changeLanguage,
    };
};

export default languageService;
