
"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

const HeroMoonshot = () => {
  const home = useTranslations("Home");
  const button = useTranslations("Buttons");
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative isolate overflow-hidden bg-shell py-16 sm:py-24 lg:flex lg:min-h-[750px] lg:items-center lg:py-28">

      {/* Background Image */}

      {/* Background Image - Full Width */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.6,
          ease: smoothEase,
        }}
        className="absolute inset-0 -z-10 h-[380px] w-full overflow-hidden sm:h-[480px] lg:h-full"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/beach_3.png')",
          }}
        />

        {/* Image shading */}
        <div className="absolute inset-0 bg-primary/35" />

        {/* Desktop gradient - preserves content readability on the left */}
        {/*<div className="absolute inset-0 hidden bg-gradient-to-r from-shell/95 via-shell/65 to-transparent lg:block" />*/}

        {/* Mobile gradient */}
        {/*<div className="absolute inset-0 bg-gradient-to-t from-shell/80 via-shell/20 to-primary/20 lg:hidden" />*/}
      </motion.div>

      {/* Content Wrapper */}
      <Wrapper className="relative z-10 flex w-full items-center">

        {/* Content Panel - Left */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, x: -50, y: 20 }
          }
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.1,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: smoothEase,
          }}
          className="relative z-10 -mt-12 flex w-[94%] flex-col items-start bg-shell px-6 py-9 shadow-[0_25px_70px_rgba(0,0,0,0.09)] sm:-mt-16 sm:w-[85%] sm:px-10 sm:py-12 md:w-[75%] md:px-12 lg:my-auto lg:ml-0 lg:mt-0 lg:w-[44%] lg:px-10 lg:py-14 xl:w-[42%] xl:px-14 xl:py-16"
        >

          {/* Decorative detail */}
          <motion.span
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.5,
              ease: smoothEase,
            }}
            className="mb-7 h-px w-12 origin-left bg-primary/50"
          />

          {/* Heading */}
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease: smoothEase,
            }}
            className="font-display text-3xl leading-tight text-primary sm:text-4xl md:text-5xl"
          >
            {home("hero3.title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.5,
              ease: smoothEase,
            }}
            className="mt-5 max-w-lg text-sm leading-7 text-primary/70 sm:text-base sm:leading-8"
          >
            {home("hero3.text")}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.65,
              ease: smoothEase,
            }}
            className="mt-8"
          >
            <Link
              href="/experience"
              className="group inline-flex min-h-12 items-center justify-center gap-4 border border-primary bg-transparent px-6 py-3 text-center text-xs uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-primary hover:text-shell sm:px-8 sm:text-sm"
            >
              <span>{button("explore-experience")}</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* Decorative corner */}
          <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-primary/20" />

        </motion.div>
      </Wrapper>
    </section>
  );
};

export default HeroMoonshot;
