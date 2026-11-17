
"use client";

import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

import Wrapper from "./Wrapper";

const UnderConstruction = () => {
  const t = useTranslations("UnderConstruction");
  const shouldReduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <main className="relative isolate flex min-h-svh items-center overflow-hidden bg-shell py-20 text-primary">

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Large rotating circle */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-primary/10 sm:-right-60 sm:-top-60 sm:h-[750px] sm:w-[750px]"
        >
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary/40" />
        </motion.div>

        {/* Second rotating circle */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { rotate: -360 }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full border border-primary/10 sm:-bottom-72 sm:-left-60 sm:h-[750px] sm:w-[750px]"
        >
          <div className="absolute right-1/4 top-0 h-2 w-2 rounded-full bg-primary/30" />
        </motion.div>

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #263B30 1px, transparent 1px), linear-gradient(to bottom, #263B30 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

      </div>

      <Wrapper className="relative z-10">

        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          {/* Top label */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-primary/40" />

            <p className="text-[10px] uppercase tracking-[0.4em] text-primary/60 sm:text-xs">
              {t("eyebrow")}
            </p>

            <span className="h-px w-8 bg-primary/40" />
          </motion.div>

          {/* Animated construction icon */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
            className="relative mb-10 flex h-24 w-24 items-center justify-center"
          >
            {/* Rotating outer ring */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/30"
            />

            {/* Inner circle */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-shell">
              <motion.svg
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { y: [0, -4, 0] }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21h18" />
                <path d="m5 21 2-9h10l2 9" />
                <path d="M8 12V8l4-5 4 5v4" />
                <path d="M12 3v9" />
                <path d="M9 16h6" />
              </motion.svg>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease,
            }}
            className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            {t("title")}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease,
            }}
            className="mt-8 max-w-xl text-sm leading-8 text-primary/65 sm:text-base sm:leading-9"
          >
            {t("description")}
          </motion.p>

          {/* Animated progress section */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease,
            }}
            className="mt-14 w-full max-w-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary/55">
                {t("progress-label")}
              </p>

              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: [1, 0.45, 1] }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-[10px] uppercase tracking-[0.2em] text-primary"
              >
                {t("status")}
              </motion.span>
            </div>

            {/* Progress bar - decorative, not a real completion percentage */}
            <div className="h-[2px] w-full overflow-hidden bg-primary/10">
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { x: ["-100%", "250%"] }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/3 bg-primary"
              />
            </div>

            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-primary/40">
              {t("coming-soon")}
            </p>
          </motion.div>

          {/* Return home */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              ease,
            }}
            className="mt-12"
          >
            <Link
              href="/"
              className="group inline-flex min-h-12 items-center gap-5 border border-primary bg-primary px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-shell transition-all duration-500 hover:bg-transparent hover:text-primary"
            >
              <span>{t("return-home")}</span>

              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>
          </motion.div>

          {/* Bottom decorative label */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-primary/20" />

            <p className="text-[9px] uppercase tracking-[0.35em] text-primary/40">
              ADAPT · LUXURY & HOSPITALITY
            </p>

            <span className="h-px w-8 bg-primary/20" />
          </motion.div>

        </div>
      </Wrapper>
    </main>
  );
};

export default UnderConstruction;
