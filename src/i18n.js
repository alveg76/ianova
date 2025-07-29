import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importamos los archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next) // Conecta i18next con React
  .init({
    resources, // Los recursos (traducciones) que cargamos antes
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma a usar si el actual no tiene una clave
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;