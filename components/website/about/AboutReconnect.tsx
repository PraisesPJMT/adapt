
"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

const ease = [0.22, 1, 0.36, 1] as const;

const AboutReconnect = () => {
  const reconnect = useTranslations("About.reconnect");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-linen py-16 sm:py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Large rotating circle */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-48 -top-48 h-[420px] w-[420px] rounded-full border border-primary/10 sm:-right-64 sm:-top-64 sm:h-[700px] sm:w-[700px]"
        >
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary/30" />
        </motion.div>

        {/* Second rotating circle */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { rotate: -360 }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full border border-primary/10 sm:-bottom-64 sm:-left-64 sm:h-[700px] sm:w-[700px]"
        >
          <div className="absolute right-1/4 top-0 h-2 w-2 rounded-full bg-primary/25" />
        </motion.div>

        {/* Background Grid */}
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
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-6 lg:gap-12">
          {/* Left Content - Preserved */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              ease,
            }}
            className="flex flex-col items-center justify-center bg-linen px-5 py-12 text-center sm:px-9 sm:py-14 lg:p-10 xl:p-14"
          >
            <motion.span
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                ease,
              }}
              className="mb-5 h-px w-12 origin-center bg-primary/50"
            />

            <h1 className="font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
              {reconnect("title")}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
              {reconnect("description")}
            </p>
          </motion.div>

          {/* Right Content - Cascading Images */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease,
            }}
            className="relative flex min-h-[400px] items-center justify-center sm:min-h-[500px] md:min-h-[460px] lg:min-h-[580px]"
          >
            {/* Image Composition */}
            <div className="relative h-[340px] w-[min(100%,420px)] sm:h-[430px] sm:w-[min(100%,480px)] lg:h-[500px] lg:w-[min(100%,520px)]">
              {/* Back Image */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: 30, y: -20, scale: 0.94 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.1,
                  delay: shouldReduceMotion ? 0 : 0.2,
                  ease,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.025 }
                }
                className="absolute right-0 top-0 z-10 h-[75%] w-[72%] overflow-hidden shadow-xl"
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/about_image_1.png')",
                  }}
                />
              </motion.div>

              {/* Front Image - Offset Bottom Left */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: -30, y: 30, scale: 0.94 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.1,
                  delay: shouldReduceMotion ? 0 : 0.4,
                  ease,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.025 }
                }
                className="absolute bottom-0 left-0 z-20 h-[75%] w-[72%] overflow-hidden border-[6px] border-linen shadow-2xl sm:border-[8px]"
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/about_image_2.png')",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutReconnect;
