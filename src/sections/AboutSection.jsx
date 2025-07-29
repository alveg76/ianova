// src/sections/AboutSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about" // <-- El único 'id' necesario, en el lugar correcto.
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-8 md:px-20 bg-gradient-to-b from-black via-cyan-950 to-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t('about.title')}
        </h2>
        <p className="text-xl text-cyan-200 leading-relaxed">
          {t('about.description')}
        </p>
      </div>
    </motion.section>
  );
}