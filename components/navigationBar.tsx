"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Architecture", href: "/architecture" },
  { name: "Experience", href: "/experience" },
  { name: "Community", href: "/community" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const secondaryItems = [
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (pathname === "/resume") {
    return null;
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/8 bg-black/60 px-4 py-3 backdrop-blur-xl sm:px-5">

            <Link
              href="/"
              className="group flex items-center gap-3 shrink-0"
            >

              <div className="hidden lg:block">
                <p className="text-sm font-medium tracking-tight text-white">
                  Shashank Pandey
                </p>

                <p className="text-[11px] text-gray-500">
                  Developer & Builder
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    isActive(item.href)
                      ? "bg-white/8 text-white"
                      : "text-gray-500 hover:bg-white/4 hover:text-gray-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                  isActive("/contact")
                    ? "bg-white/8 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Let's talk
                <ArrowUpRight size={14} />
              </Link>

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 text-gray-300 transition hover:bg-white/5 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">

          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative flex min-h-screen flex-col px-8 pt-28 pb-10">

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                Navigation
              </p>
            </div>

            <nav className="flex flex-col">
              {[...navItems, ...secondaryItems].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`group flex items-center justify-between border-b border-white/8 py-5 text-xl transition ${
                    isActive(item.href)
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.name}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 transition group-hover:text-white"
                  />
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <p className="text-sm text-gray-600">
                Shashank Pandey
              </p>

              <p className="mt-1 text-xs text-gray-700">
                Building systems, platforms & ideas.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}