import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        detection:{
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
        resources: {
            es: {
                translation: {
                    "author": "Autor",
                    "title": "Título"
                }
            },
            en: {
                translation: {
                    "author": "Author",
                    "title": "Title"
                }
            }
        }
    });




export default i18n