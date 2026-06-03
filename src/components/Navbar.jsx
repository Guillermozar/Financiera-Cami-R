import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navbar component for navigation with responsive mobile menu.
 * 
 * @param {Function} onOpenModal - Callback to trigger opening the lead capture modal.
 */
export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="[Nombre de Marca] Inicio">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold italic transition-transform group-hover:scale-105" aria-hidden="true">
            [L]
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">[Nombre de Marca]</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-500">
          <a href="#productos" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-md px-1">Productos</a>
          <a href="#seguridad" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-md px-1">Seguridad</a>
          <a href="#tarifario" className="hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-md px-1">Tarifario</a>
          <button 
            onClick={onOpenModal}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 active:scale-95 transition-all shadow-md hover:shadow-lg hover:shadow-slate-200"
            aria-label="Hacerme Cliente de [Nombre de Marca]"
          >
            Hacerme Cliente
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none rounded-lg"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer (Menu colapsable) */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 text-base font-semibold text-slate-600">
          <a 
            href="#productos" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-slate-900 py-2 border-b border-slate-50 transition-colors"
          >
            Productos
          </a>
          <a 
            href="#seguridad" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-slate-900 py-2 border-b border-slate-50 transition-colors"
          >
            Seguridad
          </a>
          <a 
            href="#tarifario" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-slate-900 py-2 border-b border-slate-50 transition-colors"
          >
            Tarifario
          </a>
          <button 
            onClick={() => {
              setIsOpen(false);
              onOpenModal();
            }}
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all text-center shadow-lg shadow-slate-100"
          >
            Hacerme Cliente
          </button>
        </div>
      </div>
    </nav>
  );
}
