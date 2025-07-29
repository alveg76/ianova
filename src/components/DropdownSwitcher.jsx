import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './DropdownSwitcher.css'; // Crearemos este archivo de estilos ahora

export function DropdownSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref para detectar clics fuera del menú

  const languages = {
    es: 'Español',
    en: 'English',
    fr: 'Français'
  };

  // Efecto para cerrar el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Añadir el listener
    document.addEventListener("mousedown", handleClickOutside);
    // Limpiar el listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Cierra el menú después de seleccionar
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        <span>{languages[i18n.language]}</span>
        {/* Un ícono de flecha (chevron) para indicar que es desplegable */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={`chevron-icon ${isOpen ? 'open' : ''}`}>
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {Object.keys(languages).map((lng) => (
            <li key={lng} className="dropdown-item" onClick={() => handleLanguageChange(lng)}>
              {languages[lng]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}