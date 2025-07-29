// src/sections/ServicesSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  CubeIcon, ScaleIcon, UserGroupIcon, PhotoIcon, WrenchScrewdriverIcon,
  TruckIcon, ChartBarIcon, BookOpenIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  WrenchScrewdriverIcon: <WrenchScrewdriverIcon />,
  ScaleIcon: <ScaleIcon />,
  UserGroupIcon: <UserGroupIcon />,
  PhotoIcon: <PhotoIcon />,
  CubeIcon: <CubeIcon />,
  TruckIcon: <TruckIcon />,
  ChartBarIcon: <ChartBarIcon />,
  BookOpenIcon: <BookOpenIcon />,
};

export function ServicesSection() {
    const { t } = useTranslation();
    const servicesList = t('services.list', { returnObjects: true });

    return (
        <motion.section
            id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 px-8 md:px-20"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                    {t('services.title')}
                </h2>
                
                {Array.isArray(servicesList) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {servicesList.map((service, i) => {
                            const IconComponent = iconMap[service.icon];

                            return (
                                // === LA SOLUCIÓN DEFINITIVA ESTÁ AQUÍ ===
                                // Cambiamos la 'key' para que use el índice 'i'.
                                // El índice no cambia entre idiomas, lo que estabiliza
                                // el re-renderizado y soluciona el bug con la animación.
                                <motion.div
                                    key={i} 
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="bg-cyan-950/40 border border-cyan-800/50 p-6 rounded-xl shadow-lg hover:border-cyan-500 hover:bg-cyan-950/70 hover:-translate-y-2 transition-all duration-300 flex flex-col"
                                >
                                    <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                                        {IconComponent && React.cloneElement(IconComponent, { className: 'w-6 h-6' })}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-cyan-300 text-base">{service.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </motion.section>
    );
}