
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import FullLogo from "./FullLogo";
import LanguageSwitcher from "./LanguageSwitcher";

const navigation = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/accommodations", key: "accommodations" },
  { href: "/experience", key: "experience" },
  // { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
  // { href: "/faqs", key: "faqs" },
] as const;

const Header = () => {
  const nav = useTranslations("Navigation");
  const head = useTranslations("Header");
  const button = useTranslations("Buttons");

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close menu after navigation
  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-0 pt-0 md:px-6 md:pt-6">
        <div className="mx-auto max-w-7xl">

          {/* Main navigation */}
          <motion.nav
            initial={shouldReduceMotion ? false : { y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transition}
            className="relative flex items-center justify-between bg-linen px-5 py-3.5 text-primary shadow-[0_8px_35px_rgba(0,0,0,0.07)]  md:px-8 md:py-4"
            aria-label="Main navigation"
          >

            {/* Logo */}
            <Link
              href="/"
              aria-label="Home"
              className="relative z-10 shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <FullLogo className="h-10 w-auto md:h-12" />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-7 lg:flex xl:gap-9">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative py-2 text-sm tracking-wide transition-colors duration-300 hover:opacity-60"
                  >
                    <span className={`${active ? "font-black" : ""}`}>{nav(item.key)}</span>

                    {/* Active indicator */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.75 bg-primary transition-all duration-500 ${
                        active ? "w-full font-black" : "w-0 group-hover:w-full"
                      }`}
                    />

                    {active && (
                      <motion.span
                        layoutId="desktop-active-dot"
                        className="absolute -bottom-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop language switcher */}
            <div className="md:flex items-center gap-4 hidden">
              <LanguageSwitcher />

              <Link href="/accommodations" className="py-2 px-6 bg-primary text-linen border border-primary">{button("browse-rooms")}</Link>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-4 lg:hidden">
              <LanguageSwitcher />

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                className="relative z-10 flex h-11 w-11 items-center justify-center border border-primary/15 transition-colors hover:bg-primary/5"
              >
                <span className="relative flex h-4 w-5 flex-col justify-center">
                  <motion.span
                    animate={
                      menuOpen
                        ? { rotate: 45, y: 0 }
                        : { rotate: 0, y: -4 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute h-px w-5 bg-primary"
                  />

                  <motion.span
                    animate={
                      menuOpen
                        ? { rotate: -45, y: 0 }
                        : { rotate: 0, y: 4 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute h-px w-5 bg-primary"
                  />
                </span>
              </button>
            </div>

          </motion.nav>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="fixed inset-0 z-40 bg-linen text-primary lg:hidden"
          >
            {/* Menu content */}
            <motion.div
              initial={shouldReduceMotion ? false : { y: -35 }}
              animate={{ y: 0 }}
              exit={shouldReduceMotion ? undefined : { y: -25 }}
              transition={transition}
              className="flex h-full flex-col overflow-y-auto px-8 pb-10 pt-28"
            >

              {/* Small label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="mb-8 text-xs uppercase tracking-[0.3em] text-primary/50"
              >
                {head("mobile-title")}
              </motion.p>

              {/* Navigation links */}
              <nav className="flex flex-col">
                {navigation.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={
                        shouldReduceMotion
                          ? false
                          : { opacity: 0, y: 20 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, y: -10 }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.4,
                        delay: shouldReduceMotion ? 0 : 0.08 + index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className="group flex items-center justify-between border-b border-primary/15 py-4"
                      >
                        <span
                          className={`font-display text-3xl transition-opacity duration-300 ${
                            active ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                          }`}
                        >
                          {nav(item.key)}
                        </span>

                        <span className="flex items-center gap-3">
                          {active && (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          )}

                          <motion.span
                            animate={{ x: active ? 0 : -5, opacity: active ? 1 : 0.35 }}
                            className="text-xl"
                          >
                            →
                          </motion.span>
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pt-12"
              >
                <Link href="/accommodations" className="block text-center mb-5 py-2 px-6 bg-primary text-linen border border-primary">{button("browse-rooms")}</Link>

                <div className="mb-5 h-px bg-primary/15" />

                <p className="text-xs text-center uppercase tracking-[0.25em] text-primary/50">
                  Adapt — {head("punchline")}
                </p>
              </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
