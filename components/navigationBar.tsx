"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Writing", href: "/blog" },
  { name: "About", href: "/about" },
];

const secondaryItems = [
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

const allItems = [...navItems, ...secondaryItems];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-3"
      aria-label="Shashank Pandey — Home"
    >
      {!compact && (
        <div className="min-w-0">
          <p className="text-[13px] font-medium tracking-[-0.025em] text-white">
            Shashank Pandey
          </p>
          <p className="mt-0.5 text-[10px] tracking-[0.025em] text-white/40">
            Developer <span className="px-0.5 text-white/20">/</span> Builder
          </p>
        </div>
      )}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  if (pathname === "/resume") {
    return null;
  }

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between border px-4 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-white/[0.12] bg-[#080808]/95 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
              : "border-white/[0.08] bg-[#080808]/75"
          } h-[62px] backdrop-blur-xl`}
        >
          <Brand />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative px-3 py-2 text-[12px] transition-colors duration-200 xl:px-3.5 ${
                    active
                      ? "text-white"
                      : "text-white/45 hover:text-white/90"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute inset-x-3 bottom-0 h-px origin-left bg-cyan-400 transition-transform duration-200 xl:inset-x-3.5 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/certifications"
              aria-current={
                isActive("/certifications") ? "page" : undefined
              }
              className={`text-[11px] transition-colors ${
                isActive("/certifications")
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              Certifications
            </Link>

            <span className="h-4 w-px bg-white/10" />

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border border-white/15 px-3.5 py-2 text-[11px] text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/[0.06]"
            >
              Let's talk
              <ArrowUpRight
                size={13}
                strokeWidth={1.6}
                className="text-white/50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
              />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/75 transition-colors hover:border-white/25 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X size={19} strokeWidth={1.5} />
            ) : (
              <Menu size={19} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          tabIndex={mobileOpen ? 0 : -1}
          aria-label="Close navigation menu"
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          inert={!mobileOpen}
          className={`absolute right-0 top-0 flex h-dvh w-[min(88vw,400px)] flex-col border-l border-white/10 bg-[#080808] px-6 pb-6 pt-5 transition-transform duration-300 ease-out sm:px-8 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Brand />

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Close navigation"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div className="pb-4 pt-8">
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/35">
              Explore
            </p>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto"
          >
            <div className="flex flex-col">
              {allItems.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center justify-between border-b border-white/[0.07] py-[17px] transition-colors duration-200 ${
                      active
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`font-mono text-[9px] ${
                          active ? "text-cyan-400" : "text-white/25"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[15px] tracking-[-0.015em]">
                        {item.name}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className={`transition-all duration-200 ${
                        active
                          ? "text-cyan-400"
                          : "text-white/25 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="mt-7 border border-white/10 p-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-cyan-400/30" />
                <span className="relative inline-flex h-2 w-2 bg-cyan-400" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.13em] text-white/55">
                Open to opportunities
              </span>
            </div>

            <p className="mt-3 text-[12px] leading-6 text-white/40">
              Building systems, platforms, and ideas that solve real
              problems.
            </p>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="group mt-4 flex w-full items-center justify-between bg-white px-4 py-3 text-[12px] font-medium text-black transition-colors hover:bg-gray-200"
            >
              <span>Let's talk</span>
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="flex items-center justify-between pt-5 text-[9px] uppercase tracking-[0.14em] text-white/25">
            <span>Shashank Pandey</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </aside>
      </div>
    </>
  );
}