import React from 'react';

export function Footer() {
  return (
    <footer className="text-center py-8 text-cyan-700 text-sm bg-black">
      © {new Date().getFullYear()} IAnova Labs. Todos los derechos reservados.
    </footer>
  );
}