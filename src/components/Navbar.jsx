import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isDetailPage = location.pathname.startsWith("/product");

  const navClass = ({ isActive }) =>
    `block py-1 transition ${
      isActive
        ? "font-semibold border-b-2 border-white"
        : "opacity-80 hover:opacity-100"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-primary">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* LEFT */}
          {isDetailPage ? (
            <button
              onClick={() => navigate("/")}
              className="
    flex items-center gap-2
    text-white
    leading-none
    py-1
    hover:opacity-80
  "
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>

              <span className="text-sm font-medium leading-none">Kembali</span>
            </button>
          ) : (
            <img src="/images/logo-moencake.png" className="h-9" />
          )}

          {/* DESKTOP MENU */}
          {!isDetailPage && (
            <nav className="hidden md:flex items-center gap-8 text-white">
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
          )}

          {/* HAMBURGER */}
          {!isDetailPage && (
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* SIDE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-primary z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 text-white">
          <button onClick={() => setOpen(false)} className="self-end text-xl">
            ✕
          </button>

          <NavLink to="/" onClick={() => setOpen(false)} className={navClass}>
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
      </aside>
    </>
  );
}
