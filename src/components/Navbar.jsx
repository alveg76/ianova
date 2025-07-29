// src/components/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { DropdownSwitcher } from './DropdownSwitcher';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">
            <img src="/logo.png" alt="IAnova Labs Logo" />
          </a>

          <div className="hidden md:flex items-center gap-4">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#about" className="nav-link">{t('navbar.about')}</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">{t('navbar.services')}</a>
              </li>
              <li className="nav-item">
                <a href="#cases" className="nav-link">{t('navbar.cases')}</a>
              </li>
            </ul>
            <div className="nav-controls">
              <a 
                href="#contact" 
                onClick={openChat} 
                className="contact-button"
              >
                {t('navbar.contact')}
              </a>
              <DropdownSwitcher />
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50">
              {/* === ESTE ES EL BLOQUE CORREGIDO === */}
              {isMenuOpen ? (
                // Ícono de "X" (Cerrar) - CÓDIGO COMPLETO
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              ) : (
                // Ícono de Hamburguesa (Abrir) - CÓDIGO COMPLETO
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}