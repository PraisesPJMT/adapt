"use client";

import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

const AccommodationsHero = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="min-h-[30svh] md:min-h-[40svh] bg-linen flex flex-col items-end justify-end overflow-hidden">
      <Wrapper className="mt-auto mb-10 flex flex-col items-center justify-end text-center">
        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="text-primary font-display text-5xl leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Rooms and Suites
        </motion.h1>

        <motion.p
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="text-primary max-w-xl text-sm leading-7 sm:text-base sm:leading-8"
        >
          Leave the everyday behind and immerse yourself in a world of natural
          beauty, serenity, and exceptional hospitality.
        </motion.p>
      </Wrapper>
    </section>
  );
};

export default AccommodationsHero;