// src/sections/SuccessCasesSection.jsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// 1. Importamos el hook de traducción
import { useTranslation } from 'react-i18next'; 

// Ya no necesitamos la constante 'cases' aquí, la eliminamos.

export function SuccessCasesSection() {
    // 2. Inicializamos el hook de traducción
    const { t } = useTranslation(); 
    
    // Obtenemos la lista de casos del archivo JSON.
    // La opción { returnObjects: true } es necesaria para que nos devuelva el array completo.
    const cases = t('cases.list', { returnObjects: true });

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

    const yFast = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
    const ySlow = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

    return (
        <section id="cases" ref={targetRef} className="relative py-32 px-8 md:px-20 overflow-hidden bg-cyan-950">
            <div className="absolute inset-0 z-0 opacity-50">
                <motion.div className="absolute top-0 left-[20%] w-0.5 h-[150%] bg-gradient-to-b from-transparent via-cyan-500 to-transparent" style={{ y: ySlow }}/>
                <motion.div className="absolute top-0 left-[80%] w-0.5 h-[150%] bg-gradient-to-b from-transparent via-cyan-500 to-transparent" style={{ y: yFast }}/>
            </div>
            
            {/* 3. Reemplazamos el texto estático del título por la traducción */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center relative z-10">
                {t('cases.title')}
            </h2>
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-24 relative z-10">
                {cases.map((item, index) => (
                    <div key={item.title} className="bg-gray-900/50 p-8 rounded-xl shadow-2xl backdrop-blur-sm border border-cyan-800/50">
                        <motion.div style={{ y: index % 2 === 0 ? yFast : ySlow }}>
                            <h3 className="text-3xl font-bold text-white"><span className="mr-3">{item.emoji}</span>{item.title}</h3>
                            <p className="text-cyan-300 mt-2 text-lg">{item.desc}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}