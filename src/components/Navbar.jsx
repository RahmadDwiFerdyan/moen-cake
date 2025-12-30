import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `block py-1 transition ${
      isActive
        ? "font-bold border-b-2 border-white"
        : "opacity-80 hover:opacity-100"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <div className="max-w-6xl mx-auto px-8 pt-3 pb-4 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src="/images/logo-moencake.png"
          alt="MoenCake"
          className="h-12 w-auto"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white text-base font-medium">
          <NavLink to="/" className={navClass}>
            Katalog
          </NavLink>
          <NavLink to="/gallery" className={navClass}>
            Galeri
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Kontak
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded hover:bg-white/20 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary px-6 py-4 space-y-3 text-white">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={navClass}
          >
            Katalog
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setOpen(false)}
            className={navClass}
          >
            Galeri
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={navClass}
          >
            Kontak
          </NavLink>
        </div>
      )}
    </header>
  );
}
