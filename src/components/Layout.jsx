// src/components/Layout.jsx

import React from 'react';
import { Navbar } from './Navbar'; 
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="bg-black text-cyan-100 min-h-screen font-sans antialiased">
      <Navbar /> 
      <main>{children}</main>
      <Footer />
    </div>
  );
}