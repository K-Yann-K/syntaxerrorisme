"use client";
import Link from "next/link";
import { Gamepad2, BookOpen, Newspaper, Info } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}


export default function MobileDropdownMenuEducation({ open, setOpen }: MobileMenuProps) {

  return (
    <nav id="mobile-nav"
      className={`md:hidden overflow-hidden transition-all duration-300 bg-swiss-coffee-200 
        ${open ? "max-h-96 py-4" : "max-h-0 py-0"}`}
    >
      <ul className="flex flex-col gap-4 text-strikemaster-700 px-6 text-base">
        <li>
          <Link href="/jeu" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-5 h-5" /> Jeu
            </div>
          </Link>
        </li>

        <li>
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5" /> Éducation
              </div>
            </summary>

            <ul className="ml-6 mt-2 flex flex-col gap-2 text-sm">
              <li>
                <a href="#cv" onClick={() => setOpen(false)}>
                  CV et lettre de motivation
                </a>
              </li>
              <li>
                <a href="#dico" onClick={() => setOpen(false)}>
                  Mode Dico
                </a>
              </li>
              <li>
                <a href="#accessibilite" onClick={() => setOpen(false)}>
                  Accessibilité / Handicap
                </a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <Link href="/actualite" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-3">
              <Newspaper className="w-5 h-5" /> Actualité
            </div>
          </Link>
        </li>

        <li>
          <Link href="/histoire" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5" /> Histoire
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
