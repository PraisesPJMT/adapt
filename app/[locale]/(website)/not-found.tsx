
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

export default function WebsiteNotFound() {
  const t = useTranslations("Not-found");
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-shell px-4 py-20 sm:px-6 md:py-24">

      {/* Background - Top Half */}
      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-primary">

        {/* Background image */}
        <motion.div
          initial={shouldReduceMotion ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2,
            ease: smoothEase,
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/404_bg.png')",
          }}
        />

        {/* Primary color overlay */}
        <div className="absolute inset-0 bg-primary/80" />

        {/* Subtle texture / shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/20 to-primary/60" />
      </div>

      {/* Bottom Half */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-shell" />

      {/* Centered Content Panel */}
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 40, scale: 0.97 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.1,
          ease: smoothEase,
          delay: shouldReduceMotion ? 0 : 0.15,
        }}
        className="relative z-10 flex w-full max-w-3xl items-center justify-center border border-primary/20 bg-shell px-6 py-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:px-12 sm:py-10 md:px-16 lg:px-20"
      >

        {/* Decorative corner details */}
        <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-primary/40 sm:left-5 sm:top-5" />
        <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-primary/40 sm:right-5 sm:top-5" />
        <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-primary/40 sm:bottom-5 sm:left-5" />
        <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-primary/40 sm:bottom-5 sm:right-5" />

        {/* Main Content */}
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">

          {/* 404 Number */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease: smoothEase,
            }}
          >
            <h1 className="font-display text-7xl leading-none tracking-[0.15em] text-tide sm:text-8xl md:text-9xl">
              404
            </h1>

            <div className="mx-auto mt-2 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary/30" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-tide/70 sm:text-xs">
                {t("headline")}
              </p>
              <span className="h-px w-8 bg-primary/30" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.5,
              ease: smoothEase,
            }}
            className="mt-4 max-w-xl font-display text-4xl leading-[1.15] text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.65,
              ease: smoothEase,
            }}
            className="mt-3 max-w-md text-sm leading-7 text-primary/65 sm:text-base sm:leading-8"
          >
            {t("text")}
          </motion.p>

          {/* Return Home Button */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.8,
              ease: smoothEase,
            }}
            className="mt-9"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-primary px-8 py-4 text-xs uppercase tracking-[0.18em] text-shell transition-colors duration-500 hover:bg-primary sm:px-10"
            >
              <span>{t("return-link")}</span>

              <motion.span
                animate={shouldReduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-base"
              >
                →
              </motion.span>
            </Link>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}
