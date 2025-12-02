"use client";
import { useEffect, useRef } from "react";

export default function DropdownMenuEducation({ open, setOpen, buttonRef}) {
  const menuRef = useRef(null);

  // Fermer le menu quand on clique en dehors 
  useEffect(() => {
    function handleDocClick(e) {
      const target = e.target;
      const menuNode = menuRef.current;
      const buttonNode = buttonRef?.current;

      if (!menuNode) return;
      if (menuNode.contains(target)) return;
      if (buttonNode && buttonNode.contains(target)) return;

      setOpen(false);
    }

    if (open) {
      document.addEventListener("mousedown", handleDocClick);
      document.addEventListener("touchstart", handleDocClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("touchstart", handleDocClick);
    };
  }, [open, buttonRef, setOpen]);

  // fermer au ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <>
      <div
        ref={menuRef}
        role="menu"
        aria-hidden={!open}
        className={`absolute top-full left-1/2 -translate-x-5/8 mt-2 w-52 bg-shuttle-gray-950 border rounded shadow-lg transition-all duration-150 
          ${ open ? "opacity-100 scale-100 pointer-events-auto translate-y-0" : "opacity-0 scale-95 pointer-events-none -translate-y-1"
        }`}
      >
        <div className="py-1">
          <a
            href="#cv"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-strikemaster-400 hover:bg-white/5 hover:text-strikemaster-600"
          >
            CV et lettre de motivation
          </a>

          <a
            href="#dico"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-strikemaster-400 hover:bg-white/5 hover:text-strikemaster-600"
          >
            Mode Dico
          </a>

          <a
            href="#accessibilite"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-strikemaster-400 hover:bg-white/5 hover:text-strikemaster-600"
          >
            Accessibilité / Handicap
          </a>
        </div>
      </div>
    </>
  );
}