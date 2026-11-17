
"use client";

import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

type HighlightPosition = "top" | "bottom" | "left" | "right";

type HighlightProps = {
  title?: string;
  position?: HighlightPosition;
  image?: string;
};

const Highlight = ({
  title = "New Page Heading",
  position = "top",
  image = "url('/404_bg.png')"
}: HighlightProps) => {
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  const isHorizontal = position === "top" || position === "bottom";
  const isPrimaryPosition = position === "top" || position === "left" || position === "right";

  const backgroundPosition = {
    top: "inset-x-0 top-0 h-1/2",
    bottom: "inset-x-0 bottom-0 h-1/2",
    left: "inset-y-0 left-0 w-1/2",
    right: "inset-y-0 right-0 w-1/2",
  }[position];

  const titleColor = isPrimaryPosition ? "text-shell" : "text-primary";

  const titleWidth = isHorizontal
    ? "max-w-4xl"
    : position === "left"
      ? "max-w-[45%] md:max-w-[42%]"
      : "ml-auto max-w-[45%] md:max-w-[42%]";

  const titleAlignment =
    position === "right" ? "items-end text-right" : "items-start text-left";

  const imageReveal = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 25,
      clipPath: shouldReduceMotion
        ? "inset(0 0 0 0)"
        : "inset(0 0 100% 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0 0)",
    },
  };

  return (
    <section
      className={`
        relative isolate flex w-full flex-col
        justify-center overflow-hidden bg-shell
        min-h-[38svh]
        sm:min-h-[42svh]
        md:min-h-[75svh]
        lg:min-h-[80svh]
        py-16 sm:py-20
        md:py-24
      `}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">

        {/* Mobile Background */}
        <div
          className="
            absolute inset-0
            bg-cover bg-center
            md:hidden
          "
          style={{
            backgroundImage: image,
          }}
        />

        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-primary/70 md:hidden" />

        <div
          className="
            absolute inset-0
            bg-linear-to-b
            from-primary/20
            via-primary/40
            to-primary/80
            md:hidden
          "
        />

        {/* Desktop Colored Background */}
        <div
          className={`
            absolute hidden md:block
            bg-primary
            ${backgroundPosition}
          `}
        />
      </div>

      {/* Content */}
      <Wrapper
        className={`
          relative z-10
          flex w-full flex-col
          ${titleAlignment}
        `}
      >
        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            ease: smoothEase,
          }}
          className={`
            w-full
            ${titleWidth}
            font-display
            text-4xl
            leading-[1.1]
            tracking-tight
            ${titleColor}
            sm:text-5xl
            md:mb-1
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          `}
        >
          {title}
        </motion.h1>

        {/* Central Desktop Image */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: smoothEase,
          }}
          className={`
            relative mt-8
            hidden h-56 w-full
            overflow-hidden
            bg-cover bg-center
            md:block
            md:h-64
            lg:h-72
            xl:h-80
          `}
          style={{
            backgroundImage: image,
          }}
        >
          <div className="absolute inset-0 bg-primary/45" />
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default Highlight;
