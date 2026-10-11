"use client";

import { useState } from "react";

const links = [
  { href: "#hero", label: "Главная" },
  { href: "#sanctuary", label: "Пространство" },
  { href: "#journeys", label: "Программы" },
  { href: "#journal", label: "Журнал" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-linen-100/95 backdrop-blur-md">
      <div className="site-header-inner mx-auto h-[76px] max-w-[1440px] px-5 sm:px-8 md:h-[92px] md:px-12">
        <nav aria-label="Основная навигация" className="site-header-left hidden items-center gap-8 lg:flex">
          <a className="nav-link nav-link-active" href="#hero">Главная</a>
          <a className="nav-link" href="#sanctuary">Пространство</a>
        </nav>

        <a
          aria-label="STILL: на главную"
          className="absolute left-1/2 -translate-x-1/2 pl-[0.18em] font-serif text-[28px] font-light uppercase leading-none tracking-[0.18em] sm:text-[35px] sm:tracking-[0.28em] lg:static lg:translate-x-0 lg:text-[40px]"
          href="#hero"
        >
          STILL
        </a>

        <div className="site-header-right ml-auto flex items-center gap-2 sm:gap-5 lg:ml-0 lg:gap-8">
          <nav aria-label="Дополнительная навигация" className="hidden items-center gap-8 lg:flex">
            <a className="nav-link" href="#journeys">Программы</a>
            <a className="nav-link" href="#journal">Журнал</a>
          </nav>
          <a
            className="inline-flex min-h-10 items-center justify-center border border-charcoal/80 px-2.5 text-[8px] font-medium uppercase tracking-[0.13em] transition-colors hover:bg-charcoal hover:text-linen-50 sm:px-5 sm:text-[10px] sm:tracking-[0.15em] lg:min-h-11 lg:text-[11px]"
            href="#book"
          >
            <span className="sm:hidden">Бронь</span>
            <span className="hidden sm:inline">Забронировать ретрит</span>
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            className="flex size-9 items-center justify-center sm:size-10 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true" className="flex w-[19px] flex-col gap-[5px]">
              <span className={`h-px w-full bg-charcoal transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-charcoal transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Мобильная навигация"
          className="absolute inset-x-0 top-full border-b border-border bg-linen-100 px-6 pb-6 pt-2 shadow-sm lg:hidden"
          id="mobile-navigation"
        >
          {links.map((link, index) => (
            <a
              className={`block py-3 font-serif text-2xl ${index < links.length - 1 ? "border-b border-border/70" : ""}`}
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
