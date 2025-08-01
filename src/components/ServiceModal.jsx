// src/components/ServiceModal.jsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ServiceModal.css';

export function ServiceModal({ isOpen, onClose, service }) {
  // AnimatePresence permite animar la salida del componente
  return (
    <AnimatePresence>
      {isOpen && service && (
        // El fondo oscuro (overlay)
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* El contenido del modal */}
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal lo cierre
          >
            <button onClick={onClose} className="close-button">×</button>
            <h2>{service.title}</h2>
            <p>{service.long_desc}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}