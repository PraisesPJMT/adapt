
"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

const HeroAbout = () => {
  const home = useTranslations("Home");
  const button = useTranslations("Buttons");
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative overflow-hidden bg-linen py-20 sm:py-28 lg:py-36">
      <Wrapper>
        <div className="relative flex flex-col items-center lg:min-h-[720px] lg:flex-row">

          {/* Large Image - Left */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.2,
              ease: smoothEase,
            }}
            className="relative h-[400px] w-full overflow-hidden sm:h-[520px] lg:absolute lg:left-0 lg:top-1/2 lg:h-[620px] lg:w-[72%] lg:-translate-y-1/2 xl:h-[680px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] hover:scale-105"
              style={{
                backgroundImage: "url('/beach_2.png')",
              }}
            />

            <div className="absolute inset-0 bg-primary/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-transparent" />
          </motion.div>

          {/* Smaller Floating Content Panel - Right */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, x: 45, y: 20 }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.1,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: smoothEase,
            }}
            className="relative z-10 -mt-12 flex w-[92%] flex-col items-start bg-shell px-6 py-9 shadow-[0_25px_70px_rgba(0,0,0,0.09)] sm:-mt-16 sm:w-[82%] sm:px-9 sm:py-12 md:w-[75%] md:px-12 lg:ml-auto lg:mt-0 lg:w-[42%] lg:px-10 lg:py-12 xl:w-[40%] xl:px-12 xl:py-16"
          >
            {/* Decorative detail */}
            <span className="mb-6 h-px w-12 bg-primary/50" />

            <h2 className="font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
              {home("about.title")}
            </h2>

            <p className="mt-5 text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
              {home("about.text")}
            </p>

            <Link
              href="/accommodations"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-4 border border-primary bg-primary px-6 py-3 text-center text-[10px] uppercase tracking-[0.15em] text-shell transition-all duration-500 hover:bg-transparent hover:text-primary sm:text-xs"
            >
              <span>{button("browse-rooms")}</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Corner decoration */}
            <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-primary/20" />
          </motion.div>

        </div>
      </Wrapper>
    </section>
  );
};

export default HeroAbout;
