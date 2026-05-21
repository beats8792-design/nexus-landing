"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { Menu } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-outline-variant shadow-sm">
        <div className="max-w-container-max mx-auto flex justify-between items-center px-4 py-3">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:text-secondary hover:border-b-2 hover:border-secondary hover:pb-1 transition-all duration-100"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button variant="primary">Free Consultation</Button>
          </div>
          <Menu className="block md:hidden" onClick={() => setIsOpen(true)} />
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-surface z-50 shadow-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-outline-variant">
          <Logo />
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <nav className="flex flex-col gap-4 p-4">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="p-4 mt-auto">
          <Button variant="primary">Free Consultation</Button>
        </div>
      </aside>
    </>
  );
}
