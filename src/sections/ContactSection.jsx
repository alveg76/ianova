// src/sections/ContactSection.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';

export function ContactSection() {
  const { t } = useTranslation();
  
  // 2. Inicializamos el hook con el ID de tu formulario de Formspree.
  //    (Es el mismo código que está en tu URL, ej: "mqkrvvyq")
  //    El hook nos da un 'estado' (state) y una función 'handleSubmit'.
  const [state, handleSubmit] = useForm("xzzvgokz");

  // 3. Si el estado es 'succeeded' (envío exitoso), mostramos un mensaje de gracias.
  if (state.succeeded) {
      return (
          <section id="contact" className="py-24 px-8 md:px-20 relative bg-black flex items-center justify-center" style={{ minHeight: '80vh' }}>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">¡Gracias por tu mensaje!</h2>
              <p className="text-xl text-gray-300">Nos pondremos en contacto contigo pronto.</p>
            </div>
          </section>
      );
  }

  // 4. Si el envío no ha sido exitoso, mostramos el formulario normal.
  return (
    <section 
      id="contact"
      className="py-24 px-8 md:px-20 relative bg-black"
    >
      <div 
        className="absolute inset-0 opacity-[0.03] z-0" 
        style={{ 
          backgroundImage: 'url(/circuit-board.png)', 
          backgroundSize: '300px', 
          animation: 'pan 60s linear infinite' 
        }}>
      </div>
      <style>{`@keyframes pan { 0% { background-position: 0 0; } 100% { background-position: 300px 300px; } }`}</style>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">{t('contact.title')}</h2>
        
        {/* 5. CAMBIO CLAVE EN LA ETIQUETA <form>: */}
        {/*    - Quitamos 'action' y 'method'. */}
        {/*    - Añadimos 'onSubmit' y le pasamos la función 'handleSubmit' del hook. */}
        <form 
          onSubmit={handleSubmit}
          className="grid gap-6 text-left"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input required id="name" name="name" type="text" placeholder={t('contact.form.name')} className="bg-gray-900/70 border border-cyan-800 p-4 rounded-lg w-full text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
            <input id="company" name="company" type="text" placeholder={t('contact.form.company')} className="bg-gray-900/70 border border-cyan-800 p-4 rounded-lg w-full text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
          </div>
          
          <input required id="email" name="email" type="email" placeholder={t('contact.form.email')} className="bg-gray-900/70 border border-cyan-800 p-4 rounded-lg w-full text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm"
          />

          <textarea required id="solution" name="solution" placeholder={t('contact.form.solution')} rows="4" className="bg-gray-900/70 border border-cyan-800 p-4 rounded-lg w-full text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"></textarea>
          
          <select required id="area" name="area" className="bg-gray-900/70 border border-cyan-800 p-4 rounded-lg w-full text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all [&>option]:bg-gray-900">
            <option value="">{t('contact.form.area.placeholder')}</option>
            <option value="Legal">{t('contact.form.area.legal')}</option>
            <option value="Salud">{t('contact.form.area.health')}</option>
            <option value="Industria">{t('contact.form.area.industry')}</option>
            <option value="Familiar">{t('contact.form.area.family')}</option>
            <option value="Otra">{t('contact.form.area.other')}</option>
          </select>

          {/* 6. Deshabilitamos el botón mientras se está enviando el formulario */}
          <button type="submit" disabled={state.submitting} className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg flex items-center justify-center gap-3 disabled:bg-gray-500 disabled:cursor-not-allowed">
            {t('contact.form.submitButton')}
          </button>
        </form>
      </div>
    </section>
  );
}