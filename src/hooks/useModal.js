// src/hooks/useModal.js

import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Pequeño delay para que la animación de salida termine antes de limpiar los datos
    setTimeout(() => setSelectedService(null), 300);
  };

  return {
    isOpen,
    selectedService,
    openModal,
    closeModal,
  };
};