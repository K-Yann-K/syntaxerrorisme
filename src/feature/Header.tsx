"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import DropdownMenuEducation from "@/feature/DropdownMenuEducation";
import MobileDropdownMenuEducation from "@/feature/MobileDropdownMenuEducation";
import { Gamepad2, BookOpen, Newspaper, Info, Menu, X } from "lucide-react";

export default function Header() {
    const [eduOpen, setEduOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [eduHover, setEduHover] = useState(false);
    const eduButtonRef = useRef(null);

    return (
    <header className="bg-swiss-coffee-300 shadow-sm w-full">
      
        {/* --- TOP BAR --- */}
        <article className="flex items-center justify-between pt-3.5 pb-3.5 sm:px-5 md:px-15">
            
          <header className="relative group">
              <Link href={"/"}>
                  <h1 className="text-strikemaster-600 glitch font-black text-lg flex items-center gap-2">
                      <aside className="relative flex items-center justify-center w-6 h-6 rounded-full bg-strikemaster-600/10">
                          <span className="absolute w-2 h-2 bg-strikemaster-600 rounded-full animate-pulse"></span>
                      </aside>
                      Syntaxerrorisme
                  </h1>
              </Link>

              <p className="w-full text-center italic absolute top-[70%] left-[58%] transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 text-strikemaster-600 text-xxs sm:text-xs font-medium transition-all duration-300">
                  Dites adieu aux erreurs de syntaxe
              </p>
          </header>

          {/* --- BURGER MOBILE --- */}
          <button className="md:hidden text-strikemaster-700" onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex text-gray-800 items-center text-lg gap-12">
              <Link href={"/jeu"} className="font-medium glitch hover:font-bold flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-strikemaster-600" />
                  Jeu
              </Link>

              {/* Dropdown Education */}
              <section className="relative flex items-center gap-2">
                  <button
                  ref={eduButtonRef}
                  onClick={() => setEduOpen((v) => !v)}
                  aria-expanded={eduOpen}
                  aria-haspopup="menu"
                  onMouseEnter={() => setEduHover(true)}
                  onMouseLeave={() => setEduHover(false)}
                  className={`flex items-center animate-glitch gap-2 py-2 px-1 font-medium transition-all duration-200 text-strikemaster-600 
                      ${eduOpen ? "[text-shadow:_0_0_1.5px_currentColor]" : "hover:[text-shadow:_0_0_1.5px_currentColor]"}`}
                  >
                  <BookOpen className="w-5 h-5" />
                  <span className="select-none">Education</span>
                  <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`-mr-1 h-5 w-5 text-gray-600 transition-transform duration-200 ${
                      eduOpen ? "rotate-180" : ""
                      } ${eduHover ? "scale-110 text-gray-950" : ""}`}
                  >
                      <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      />
                  </svg>
                  </button>

                  <DropdownMenuEducation open={eduOpen} setOpen={setEduOpen} buttonRef={eduButtonRef}/>
              </section>

              <Link
                  href={"/actualite"}
                  className="font-medium glitch flex items-center gap-2 transition-all duration-200 hover:[text-shadow:_0_0_0.8px_currentColor]"
              >
                  <Newspaper className="w-5 h-5 text-strikemaster-600" />
                  Actualité
              </Link>

              <Link
                  href={"/histoire"}
                  className="font-medium glitch flex items-center gap-2 transition-all duration-200 hover:[text-shadow:_0_0_0.8px_currentColor]"
              >
                  <Info className="w-5 h-5 text-strikemaster-600" />
                  Histoire
              </Link>
          </nav>
        </article>

        {/* --- MOBILE NAV MENU --- */}
        <MobileDropdownMenuEducation open={menuOpen} setOpen={setMenuOpen} />
    </header>
  );
}