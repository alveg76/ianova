// src/App.jsx

import React from 'react';
// 1. Importaciones necesarias
import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import { Layout } from './components/Layout';
import { BackToTopButton } from './components/BackToTopButton';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { SuccessCasesSection } from './sections/SuccessCasesSection';
import { ContactSection } from './sections/ContactSection';
import { CtaSection } from './sections/CtaSection';

function App() {
  // 2. El hook de traducción se inicializa DENTRO del componente
  const { t } = useTranslation();

  // 3. Hay un único 'return' que contiene toda la aplicación
  return (
    // 4. HelmetProvider envuelve todo
    <HelmetProvider>
      {/* 5. Helmet define las etiquetas <head> dinámicamente */}
      <Helmet>
        <title>{t('meta.title', 'IAnova Labs - Soluciones con Inteligencia')}</title> 
        <meta name="description" content={t('meta.description', 'Diseñamos e integramos software impulsado por IA que transforma industrias.')} />
      </Helmet>

      {/* 6. Layout contiene todas las secciones de la página */}
      <Layout>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SuccessCasesSection />
        <ContactSection />
        <CtaSection />
        <BackToTopButton />
      </Layout>
    </HelmetProvider>
  );
}

export default App;