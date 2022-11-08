import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import flagArm from "../public/Image/am.svg";
import flagRus from "../public/Image/ru.svg";
import flagEng from "../public/Image/us.svg";

import msgEng from "./messages/eng.json";
import msgRus from "./messages/rus.json";
import msgArm from "./messages/arm.json";

export const flags = {
    en: flagEng,
    ru: flagRus,
    am: flagArm,
};

const messages = {
    en: msgEng,
    ru: msgRus,
    am: msgArm,
};
export const languages = {
    en: "END",
    ru: "РУС",
    am: "ՀԱՅ",
};

const LOCAL_STORAGE_KEY = "app_lang_key";
export const availableLocales = Object.keys(messages);
export const defaultLocale = "en";

const putIntoStorage = (value) => {
    if ("undefined" !== typeof window && window.localStorage) {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, value);
    }

    return value;
};

const getFromStorage = () => {
    if ("undefined" !== typeof window && window.localStorage) {
        return window.localStorage.getItem(LOCAL_STORAGE_KEY) || defaultLocale;
    }

    return defaultLocale;
};

export const setLocale = (locale) => {
    if (!availableLocales.includes(locale)) {
        locale = defaultLocale;
    }

    i18next.changeLanguage(locale);
    return putIntoStorage(locale);
};

export const t = (key, args = {}) => {
    return i18next.t(key, args);
};

export const configure = () => {
    const translations = availableLocales.reduce((data, locale) => {
        data[locale] = {
            translation: messages[locale],
        };

        return data;
    }, {});

    const storageValue = getFromStorage();
    const currentLocale = storageValue || i18next.language || defaultLocale;

    i18next.use(initReactI18next).init({
        fallbackLng: defaultLocale,
        interpolation: {
            escapeValue: false,
        },
        ns: ["translation"],
        defaultNS: "translation",
        resources: translations,
    });

    setLocale(currentLocale);
    return i18next;
};
