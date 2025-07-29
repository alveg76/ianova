import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownSwitcher } from './DropdownSwitcher';

export function MobileMenu({ isOpen, onClose }) {
  const { t } = useTranslation();

  // Si no está abierto, no renderiza nada.
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose(); // Llama a la función para cerrar el menú
  };

  return (
    // Contenedor principal del menú, ocupa toda la pantalla
    <div className="fixed inset-0 bg-cyan-950/90 backdrop-blur-md z-40 flex flex-col items-center justify-center">
      <ul className="flex flex-col items-center gap-8 text-center">
        <li>
          <a href="#about" onClick={handleLinkClick} className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors">
            {t('navbar.about')}
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleLinkClick} className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors">
            {t('navbar.services')}
          </a>
        </li>
        <li>
          <a href="#cases" onClick={handleLinkClick} className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors">
            {t('navbar.cases')}
          </a>
        </li>
      </ul>

      {/* Ponemos el selector de idioma en la parte inferior del menú móvil */}
      <div className="absolute bottom-10">
        <DropdownSwitcher />
      </div>
    </div>
  );
}