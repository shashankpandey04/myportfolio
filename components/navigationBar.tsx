"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Architecture", href: "/architecture" },
  { name: "Certifications", href: "/certifications" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 hidden md:block">
        <nav
          className="relative flex items-center gap-8 px-8 py-3 rounded-full
          bg-white/10 backdrop-blur-xl border border-white/20
          shadow-xl shadow-black/30 overflow-hidden"
        >
          {/* Iron Man energy sweep */}
          <span className="pointer-events-none absolute inset-0">
            <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shine" />
          </span>

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition duration-300
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                after:bg-cyan-400 after:transition-all after:duration-300
                hover:after:w-full
                ${
                  active
                    ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Button */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-lg flex items-center justify-center md:hidden">
          <div className="flex flex-col gap-8 text-center text-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-200 hover:text-cyan-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}