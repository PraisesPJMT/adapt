
"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

const ease = [0.22, 1, 0.36, 1] as const;

const ExperienceHero = () => {
  const reconnect = useTranslations("Experience.hero");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="flex min-h-[35svh] flex-col justify-end bg-shell py-12 sm:min-h-[40svh] sm:py-16 lg:py-20">
      <Wrapper className="w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center px-5 pt-8 sm:px-9 sm:pt-10 lg:pt-10 xl:pt-14"
        >
          {/* Decorative Line */}
          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                scaleX: 0,
              },
              visible: {
                opacity: 1,
                scaleX: 1,
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease,
                },
              },
            }}
            className="mb-6 h-px w-12 origin-left bg-primary/50"
          />

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.9,
                  delay: shouldReduceMotion ? 0 : 0.1,
                  ease,
                },
              },
            }}
            className="max-w-4xl font-display text-3xl leading-tight text-primary sm:text-4xl md:text-5xl lg:text-5xl"
          >
            {reconnect("title")}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.9,
                  delay: shouldReduceMotion ? 0 : 0.25,
                  ease,
                },
              },
            }}
            className="mt-5 max-w-xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8"
          >
            {reconnect("description")}
          </motion.p>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default ExperienceHero;
