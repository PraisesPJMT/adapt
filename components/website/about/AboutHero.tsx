
"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

const ease = [0.22, 1, 0.36, 1] as const;

const AboutHero = () => {
  const hero = useTranslations("About.hero");
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.9,
        ease,
      },
    },
  };

  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-primary py-14 sm:min-h-[80svh] sm:py-20 lg:py-24">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 overflow-hidden">
        <motion.div
          initial={
            shouldReduceMotion
              ? { scale: 1 }
              : { scale: 1.08 }
          }
          animate={{ scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.8,
            ease,
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/wide_image_1.png')",
          }}
        />

        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-primary" />
      </div>

      {/* Main Content */}
      <Wrapper className="relative z-10 w-full bg-shell">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center px-5 py-12 text-center sm:px-9 sm:py-14 lg:p-10 xl:p-14"
        >
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
                  delay: shouldReduceMotion ? 0 : 0.2,
                  ease,
                },
              },
            }}
            className="mb-5 h-px w-12 origin-center bg-primary/50"
          />

          <motion.h1
            variants={fadeUp}
            className="font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl"
          >
            {hero("title")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease,
            }}
            className="mt-5 max-w-xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8"
          >
            {hero("description")}
          </motion.p>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default AboutHero;
