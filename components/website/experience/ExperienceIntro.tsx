
"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";
import { Link } from "@/i18n/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

const ExperienceIntro = () => {
  const intro = useTranslations("Experience.intro");
  const button = useTranslations("Buttons");
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="flex min-h-[20svh] flex-col justify-center overflow-hidden bg-shell py-10 sm:py-14 lg:py-16">
      <Wrapper className="my-8 w-full sm:my-12 lg:my-20">
        <div className="relative flex w-full flex-col items-center md:block">

          {/* Background Image */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.96, x: -25 }
            }
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.1,
              ease,
            }}
            className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-video md:w-[80%]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out hover:scale-105"
              style={{
                backgroundImage: "url('/beach_3.png')",
              }}
            />
          </motion.div>

          {/* Text Panel */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 35 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease,
            }}
            className="relative z-10 -mt-8 flex w-[94%] flex-col items-center justify-center bg-shell px-5 py-10 text-center sm:-mt-12 sm:w-[85%] sm:px-9 sm:py-14 md:absolute md:bottom-0 md:right-0 md:mt-0 md:w-[55%] md:px-8 md:py-10 lg:w-[52%] lg:p-10 xl:p-14"
          >
            {/* Decorative Line */}
            <motion.span
              initial={
                shouldReduceMotion
                  ? false
                  : { scaleX: 0 }
              }
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.35,
                ease,
              }}
              className="mb-5 h-px w-12 origin-center bg-primary/50"
            />

            {/* Heading */}
            <motion.h1
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.4,
                ease,
              }}
              className="font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl"
            >
              {intro("title")}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.55,
                ease,
              }}
              className="mt-5 max-w-xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8"
            >
              {intro("description")}
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
                href="/accommodations"
                className="group inline-flex min-h-12 items-center justify-center gap-4 border border-primary bg-transparent px-6 py-3 text-center text-xs uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-primary hover:text-shell sm:px-8 sm:text-sm"
              >
                <span>{button("browse-rooms")}</span>
  
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </Wrapper>
    </section>
  );
};

export default ExperienceIntro;
