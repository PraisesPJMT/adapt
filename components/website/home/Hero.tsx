
"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

const Hero = () => {
  const home = useTranslations("Home");
  const button = useTranslations("Buttons");
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  const reveal = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 25 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.9,
            delay,
            ease: smoothEase,
          },
        };

  return (
    <section className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden bg-linen">

      {/* Right-side background image */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.6,
          ease: smoothEase,
        }}
        className="absolute right-0 top-0 -z-10 h-[40svh] w-full overflow-hidden sm:h-[45svh] lg:h-full lg:w-1/2"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/beach_1.png')",
          }}
        />

        {/* Image shading */}
        <div className="absolute inset-0 bg-primary/15" />

        {/* Desktop transition into linen background */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-shell/20 via-transparent to-transparent lg:block" />

        {/* Mobile image shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-shell/40 via-transparent to-primary/10 lg:hidden" />
      </motion.div>

      {/* Wrapper content */}
      <Wrapper className="relative z-10 flex w-full flex-col gap-6 pb-14 pt-[42svh] sm:pt-[48svh] lg:py-32">

        {/* Headline */}
        <motion.h1
          {...reveal(shouldReduceMotion ? 0 : 0.35)}
          className="max-w-xl font-display text-4xl leading-tight text-primary sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
        >
          {home("hero.headline")}
        </motion.h1>

        {/* Description */}
        <motion.p
          {...reveal(shouldReduceMotion ? 0 : 0.5)}
          className="max-w-xl text-sm leading-7 text-primary/75 sm:text-base sm:leading-8"
        >
          {home("hero.text")}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          {...reveal(shouldReduceMotion ? 0 : 0.65)}
          className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4"
        >
          <Link
            href="/accommodations"
            className="group inline-flex min-h-12 items-center justify-center border border-primary bg-primary px-5 py-3 text-center text-xs uppercase tracking-[0.12em] text-shell transition-all duration-500 hover:bg-transparent hover:text-primary sm:px-7 sm:text-sm"
          >
            <span>{button("browse-rooms")}</span>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center border border-primary bg-transparent px-5 py-3 text-center text-xs uppercase tracking-[0.12em] text-primary transition-all duration-500 hover:bg-primary hover:text-shell sm:px-7 sm:text-sm"
          >
            <span>{button("contact")}</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

      </Wrapper>
    </section>
  );
};

export default Hero;
