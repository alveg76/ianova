import React from 'react';
import { CpuChipIcon } from '@heroicons/react/24/outline';

export function CtaSection() {
    return (
        <section className="py-24 text-center bg-gradient-to-t from-black via-cyan-950 to-cyan-950">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto px-4">
                ¿Listo para construir el futuro con nosotros?
            </h2>
            <button className="bg-white hover:bg-cyan-200 text-black font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-110 text-xl inline-flex items-center gap-3 shadow-lg shadow-cyan-500/20">
                <CpuChipIcon className="w-8 h-8 text-cyan-600" />
                Empezar ahora
            </button>
        </section>
    );
}